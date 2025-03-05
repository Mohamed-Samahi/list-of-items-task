import React from 'react';

import { useForm } from 'react-hook-form';

import { useModal } from '../../context/ModalContext';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { createItemAction, updateItemAction } from '../../redux/actions/itemsActions';

import Button from '../ui/button';
import Input from '../ui/input';
import Textarea from '../ui/textarea';

import { Edit, Plus } from '../icons';

import { ListItem } from '../../types';
import { toast } from 'sonner';

interface ItemModalProps {
    isUpdateModal?: boolean;
    item?: ListItem;
}

const ItemModal: React.FC<ItemModalProps> = ({
    isUpdateModal = false,
    item
}) => {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector(state => state.items);
    const { closeModal } = useModal();

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        defaultValues: {
            title: item?.title || '',
            description: item?.description || '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (data: { title: string; description: string }) => {

        try {
            if (isUpdateModal && item) {
                await dispatch(updateItemAction({
                    id: item.id,
                    title: data.title,
                    body: data.description?.length ? data.description : undefined
                })).unwrap();

            } else {
                await dispatch(createItemAction({
                    title: data.title,
                    body: data.description?.length ? data.description : undefined
                })).unwrap();

            }

            toast.success(`Item ${isUpdateModal ? 'updated' : 'created'} successfully!`);
            closeModal();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(`Failed to ${isUpdateModal ? 'update' : 'create'} item!`);
            closeModal();
        }
    };

    return (
        <>
            <div className="w-full mb-4">
                <div className='flex items-start justify-between w-full'>
                    <div className='flex justify-start w-full'>
                        <div className='p-3 border-8 rounded-full border-Brand-50/95 bg-Brand-100/95'>
                            {
                                isUpdateModal ?
                                    <Edit stroke='#00213A' /> :
                                    <Plus width={24} height={24} stroke='#00213A' />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col items-center gap-3 md:gap-5 lg:gap-7 forms-container'
            >
                <div className='flex flex-col items-center w-full gap-3 md:gap-4 lg:gap-5'>
                    <Input
                        id='title'
                        {...register('title', { required: 'Title is required' })}
                        label='Title'
                        placeholder='Title'
                        error={errors.title?.message}
                        onChange={() => clearErrors('title')}
                    />
                    <Textarea
                        id='description'
                        {...register('description')}
                        label='Description'
                        placeholder='Description'
                        error={errors.description?.message}
                        onChange={() => clearErrors('description')}
                    />
                </div>

                <hr className='w-full bg-[#EAECF0]' />

                <Button
                    type='submit'
                    className='w-full py-1 md:py-2 min-w-20 md:min-w-28'
                    disabled={isUpdateModal ? loading.updating : loading.creating}
                >
                    {isUpdateModal
                        ? (loading.updating ? 'Updating...' : 'Update')
                        : (loading.creating ? 'Adding...' : 'Add')
                    }
                </Button>
            </form>
        </>
    );
};

export default React.memo(ItemModal);