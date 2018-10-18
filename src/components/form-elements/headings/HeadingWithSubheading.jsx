import React from 'react';
import './HeadingWithSubheading.css';

export const HeadingWithSubheading = ({ headingType, headingText, subText, className }) => {
    const heading = {
        h1: <h1 className="heading-with-subheading--heading">{ headingText }</h1>,
        h2: <h2 className="heading-with-subheading--heading">{ headingText }</h2>,
        h3: <h3 className="heading-with-subheading--heading">{ headingText }</h3>,
        h4: <h4 className="heading-with-subheading--heading">{ headingText }</h4>,
        h5: <h5 className="heading-with-subheading--heading">{ headingText }</h5>,
        h6: <h6 className="heading-with-subheading--heading">{ headingText }</h6>
    };

    return (
        <header className={`heading-with-subheading flex-container-column ${className}`}>
            { heading[headingType] }
            <p className="heading-with-subheading--subheader">{ subText }</p>
        </header>
    )
};