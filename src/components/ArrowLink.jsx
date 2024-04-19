const ArrowLink = ({ destination, title }) => {
    return (
        <div className="arrow-link flex items-center hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-full">
            <a href={destination} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <text className="text-sm">{title}</text>
            </a>
        </div>
    )
}

export default ArrowLink;
