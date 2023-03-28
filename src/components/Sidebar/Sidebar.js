import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Sidebar = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#19D3AE' : '',
                fontWeight: match ? '500' : '',
                borderLeft: match ? '3px solid #19D3AE' : '',
                borderRadius: '0px',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Sidebar;