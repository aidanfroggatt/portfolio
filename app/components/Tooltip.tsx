
interface TooltipProps {
    children: React.ReactNode;
    text: string;
}

const Tooltip = ({children, text}: TooltipProps) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mb-2 w-max px-2 py-1 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {text}
            </div>
        </div>
    )
}

export default Tooltip;
