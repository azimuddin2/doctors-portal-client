import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                background: match ? '#F1F5F9' : '',
                fontWeight: match ? '600' : '500',
                borderLeft: match ? '4px solid #19D3AE' : '',
                borderRadius: '4px',
                color: '#3A4256',
                marginBottom: '2px'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;