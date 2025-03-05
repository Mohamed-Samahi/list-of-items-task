import React, { useCallback } from 'react'

import { useModal } from '../../context/ModalContext';

import Button from '../ui/button';

import { AlertCircle } from '../icons';

const DeleteItemModal = ({ itemId, itemTitle }: { itemId: string; itemTitle: string }) => {
    const { closeModal } = useModal();

    const handleDeleteListItem = useCallback(() => {
        console.log(itemId);
        closeModal();
    }, [itemId]);

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
                className='!bg-red-700 !border-red-700 w-full'
            >
                Delete
            </Button>
        </div>
    )
}

export default React.memo(DeleteItemModal);