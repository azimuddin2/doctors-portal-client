import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className='lg:mr-6'
                style={{
                    color: match ? 'white' : '',
                    backgroundColor: match ? '#3A4256' : '',
                    padding: match ? '8px 16px' : '0px',
                    borderRadius: match ? '5px' : '0px',
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;