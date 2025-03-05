import React, { useLayoutEffect } from 'react';

import { useModal } from '../../context/ModalContext';

import Button from '../ui/button';

import { XClose } from '../icons';

const ModalWrapper: React.FC = () => {
    const { isOpen, content, closeModal } = useModal();

    useLayoutEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, closeModal]);

    if (!isOpen || !content) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 modal-backdrop"
            style={{
                background: 'rgba(16, 24, 40, 0.48)',
                backdropFilter: 'blur(8px)',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '1000'
            }}
        >
            <div className="relative max-w-[544px] max-h-[calc(100vh-4rem)] overflow-hidden w-full rounded-xl p-3 md:p-4 lg:p-6 bg-white transition-all animate-appearance-in">
                {content}
                <Button
                    onClick={closeModal}
                    className='cursor-pointer absolute top-3 md:top-4 lg:top-6 right-3 md:right-4 lg:right-6 !bg-transparent !w-fit !border-transparent shadow-md !p-2'
                >
                    <XClose />
                </Button>
            </div>
        </div>
    );
};

export default ModalWrapper;