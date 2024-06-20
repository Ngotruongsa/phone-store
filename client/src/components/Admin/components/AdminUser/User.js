import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUser } from '../../../../actions/UserAction';
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined} from '@ant-design/icons';

function User(props) {
    const {user, number} = props
    const dispatch = useDispatch()
    const handleDeleteUser = async (user) => {
        await dispatch(deleteUser(user._id))
        dispatch(getAllUser())
    }

    return (
        <tr>
            <td>{number + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td className="delete-user">
            <Link to={`/admin/customer/update/${user._id}`}>
          <EditOutlined></EditOutlined>
</Link>
            </td>
            <td className="delete-user"onClick={() => handleDeleteUser(user)}><DeleteOutlined /></td>
        </tr>
    );
}

export default User;