import { Toaster } from 'sonner';

const AppToaster = () => {
    return (
        <Toaster
            position="top-right"
            richColors
            expand={false}
            visibleToasts={3}
            style={{ zIndex: 9999 }}
            toastOptions={{
                classNames: {
                    toast: 'bg-white shadow-lg border rounded-lg',
                    title: 'text-gray-800',
                    description: 'text-gray-600',
                    success: 'border-green-500',
                    error: 'border-red-500',
                    warning: 'border-yellow-500',
                    info: 'border-blue-500'
                }
            }}
        />
    );
};

export default AppToaster;