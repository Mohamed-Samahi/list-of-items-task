import React from "react"

const buttonClasses = `py-[0.625rem] px-4 w-fit min-w-0 h-fit rounded-lg border text-lg font-semibold transition-all 
            active:shadow-activeElementBoxShadow active:scale-[.98] active:bg-Brand-600
            bg-Brand-600 text-white border-Brand-600
            hover:bg-Brand-700
            !opacity-100
            disabled:bg-Brand-200`

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`${buttonClasses} ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default Button