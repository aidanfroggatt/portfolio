const ArrowLink = ({ destination, title }) => {
    return (
        <div className="arrow-link flex items-center">
            <a href={destination} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="mr-2">{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V16a1 1 0 11-2 0V7.414L5.707 9.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
                </svg>
            </a>
        </div>
    )
}

export default ArrowLink;
