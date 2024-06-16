import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {createUser} from '../../../../actions/UserAction';

function CreateUser(props) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = data => {
        if(password === confirmPassword) {
            dispatch(createUser(data))            
        } else{
            alert("wrong repeat password")
        }
        history.push("/admin/customer");
    }
  
    return (
      <div className="admin-create">
      <span>Create Customer</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("name")} placeholder="Name"></input>

        <input
          {...register("email")}
          placeholder="Email"
          type="text"
        ></input>

        <input {...register("password")} placeholder="Password" type="password"></input>

          <input
            {...register("repeat password")}
            placeholder="Repeat password"
            type="password"
            required
          ></input>

        <input
          {...register("address")}
          placeholder="Address"
          type="text"
        ></input>

        <input
          {...register("phone")}
          placeholder="Phone"
          type="number"
        ></input>

        <button type="submit">Add Customer</button>
      </form>
    </div>
    );
}

export default CreateUser;