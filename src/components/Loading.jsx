import '../styles/components/Loading.css';

/**
 * @author Aidan Froggatt
 * @description Loading component
 * @returns {JSX.Element} Loading component
 */
const Loading = () => {
    return (
        <div className="min-h-screen bg-custom-dark flex justify-center items-center">
            <div className="loader w-loader aspect-loader bg-loader animate-loader-animation"></div>
        </div>
    )
}

export default Loading;
