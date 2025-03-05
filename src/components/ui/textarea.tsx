import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string; // Optional label text
}

const Textarea: React.FC<TextareaProps> = ({ error, label, ...props }) => {
    return (
        <div className="relative flex flex-col w-full group">
            {label && (
                <label htmlFor={props.id} className="mb-1 text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <div className="flex flex-col h-full">
                <div
                    className={`relative inline-flex flex-row items-center w-full gap-3 transition-colors duration-150 border-2 rounded-lg shadow-sm tap-highlight-transparent ${error ? '!border-[#f31260]' : 'border-Gray-200 hover:border-Gray-400 focus-within:!border-Brand-600'
                        } min-h-10 transition-background motion-reduce:transition-none h-fit`}
                >
                    <div className="box-border inline-flex items-center w-full h-full">
                        <textarea
                            rows={4}
                            className={`px-5 py-3 w-full font-normal bg-transparent outline-none placeholder:text-foreground-500 focus-visible:outline-none text-md resize-none`}
                            {...props}
                        />
                    </div>
                </div>
            </div>
            {error && (
                <p className="ml-2 mt-1 text-sm text-[#f31260]">{error}</p>
            )}
        </div>
    );
};

export default React.memo(Textarea);