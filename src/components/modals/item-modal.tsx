import React from 'react';

import { useForm } from 'react-hook-form';

import { useModal } from '../../context/ModalContext';

import Button from '../ui/button';
import Input from '../ui/input';
import Textarea from '../ui/textarea';

import { Edit, Plus } from '../icons';

interface ItemModalProps {
    title?: string;
    description?: string;
    isUpdateModal?: boolean;
}

const ItemModal: React.FC<ItemModalProps> = ({ title, description, isUpdateModal = false }) => {
    const { closeModal } = useModal();

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        defaultValues: {
            title: title || '',
            description: description || '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data: { title: string; description: string }) => {
        try {
            if (isUpdateModal) {
                console.log('Updating item:', data);
            } else {
                console.log('Adding item:', data);
            }
            closeModal();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className="w-full mb-4">
                <div className='flex items-start justify-between w-full'>
                    <div className='flex justify-start w-full'>
                        <div className='p-2 rounded-full border-5 lg:border-8 border-Brand-50/95 bg-Brand-100/95 lg:p-3'>
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
                >
                    {isUpdateModal ? 'Update' : 'Add'}
                </Button>
            </form>
        </>
    );
};

export default React.memo(ItemModal);