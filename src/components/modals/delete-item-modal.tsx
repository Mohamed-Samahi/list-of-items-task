import React, { useCallback } from 'react'

import { useModal } from '../../context/ModalContext';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteItemAction } from '../../redux/actions/itemsActions';

import Button from '../ui/button';

import { AlertCircle } from '../icons';
import { toast } from 'sonner';

const DeleteItemModal = ({ itemId, itemTitle }: { itemId: number; itemTitle: string }) => {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector(state => state.items);
    const { closeModal } = useModal();

    const handleDeleteListItem = useCallback(async () => {
        try {
            await dispatch(deleteItemAction(itemId)).unwrap();

            toast.success('Item deleted successfully!');
            closeModal();
        } catch (error) {
            toast.error('Failed to delete item!');
            console.error('Failed to delete item:', error);
        }
    }, [itemId, dispatch, closeModal]);

    return (
        <div className='flex flex-col items-center gap-3 md:gap-5 lg:gap-7'>
            <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                    <div className='flex justify-center w-full'>
                        <div className='p-3 border-8 rounded-full border-Error-50 bg-Error-100'>
                            <AlertCircle width={24} height={24} />
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h1 className='text-lg font-bold text-Gray-900'>Delete '{itemTitle}'</h1>
                    <p className='mt-1 text-sm text-gray-600 font-regular'>Are you sure you want to delete this item?</p>
                </div>
            </div>
            <Button
                onClick={handleDeleteListItem}
                className='!bg-Error-700 !border-Error-700 w-full disabled:!bg-Error-400'
                disabled={loading.deleting}
            >
                {loading.deleting ? 'Deleting...' : 'Delete'}
            </Button>
        </div>
    )
}

export default React.memo(DeleteItemModal);