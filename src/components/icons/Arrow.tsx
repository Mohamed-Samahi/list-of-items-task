interface ArrowProps {
    stroke?: string,
    width?: number,
    height?: number,
    className?: string,
    pathClassName?: string
}

const Arrow = ({ stroke = "#344054", width = 20, height = 20, className, pathClassName }: ArrowProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.3334 10H4.66675M4.66675 10L10.5001 15.8333M4.66675 10L10.5001 4.16667"
                stroke={stroke}
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={pathClassName}
            />
        </svg>

    )
}

export default Arrow