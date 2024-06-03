import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * @author Aidan Froggatt
 * @description ScrollToTop component for use with react-router-dom
 * @returns {null} null
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
