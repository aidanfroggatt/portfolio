import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Button from "./Button.jsx";

const ProjectPageBackButton = ({className}) => {
    const navigate = useNavigate();
    const [isBackClicked, setIsBackClicked] = useState(false);

    useEffect(() => {
        if (isBackClicked) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 0); // Duration of the exit animation
            return () => clearTimeout(timer);
        }
    }, [isBackClicked, navigate]);

    const handleBack = () => {
        setIsBackClicked(true);
    };

    return (
        <motion.div
            initial={{y: -100, opacity: 0}}
            animate={{
                y: 0,
                opacity: 1,
                transition: {duration: 1.0, ease: 'easeInOut'}
            }}
            exit={{
                y: -100,
                opacity: 0,
                transition: {duration: 0.25, ease: 'easeInOut'}
            }}
            className={`z-50 ${className}`}
        >
            <Button title="Back" leftArrow={true} handleClick={handleBack}/>
        </motion.div>
    );
};

export default ProjectPageBackButton;