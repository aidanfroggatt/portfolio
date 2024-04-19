import React from 'react';
import '../styles/components/DownArrow.css';

const DownArrow = () => {


    return (
            <div className="mouse_scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="mouse_scroll_arrow arrow1"></span>
                    <span className="mouse_scroll_arrow arrow2"></span>
                    <span className="mouse_scroll_arrow arrow3"></span>
                </div>
            </div>
    )
}

export default DownArrow;
