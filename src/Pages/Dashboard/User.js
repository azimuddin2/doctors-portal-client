import React from 'react';

const User = ({ user, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                <button class="btn btn-sm">Make Admin</button>
            </td>
            <td>
                <button class="btn btn-sm btn-error text-white">Remove</button>
            </td>
        </tr>
    );
};

export default User;