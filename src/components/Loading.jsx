import '../styles/components/Loading.css';
import {ScrollToTop} from "../utils/scrollUtils.js";

const Loading = () => {

    return (
        <>
            <ScrollToTop/>
            <div className="min-h-screen bg-custom-dark flex justify-center items-center">
                <div className="loader"></div>
            </div>
        </>
    )
}

export default Loading;
