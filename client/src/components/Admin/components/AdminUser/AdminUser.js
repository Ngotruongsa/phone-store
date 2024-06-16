import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllUser } from '../../../../actions/UserAction';
import ListUser from './ListUser';
import './AdminUser.css';
import { AppstoreAddOutlined} from '@ant-design/icons';

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            <div className='add-user'>
            <span>Customers</span>
            <Link to="/admin/customer/create" className="add-product">
          <AppstoreAddOutlined></AppstoreAddOutlined>
        </Link>
            </div>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> Loading</h2>)
            }
        </div>
    );
}

export default AdminUser;