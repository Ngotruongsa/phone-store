import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { updateCustomer } from "../../../../actions/UserAction";
import axios from "axios"; // Import axios for fetching user details

function UpdateUser(prop) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/user/${id}`);
        setName(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setPhone(data.phone);
        reset(data);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    fetchUserDetails();
  }, [id, reset]);

  const onSubmit = (data) => {
    const updatedData = {};
    if (data.name !== undefined) updatedData.name = data.name;
    if (data.email !== undefined) updatedData.email = data.email;
    if (data.address !== undefined) updatedData.address = data.address;
    if (data.phone !== undefined) updatedData.phone = data.phone;

    dispatch(updateCustomer(id, updatedData));

    history.push("/admin/customer");
  };

  return (
    <div className="admin-create">
      <span>Update Customer</span>
      <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          {...register("email")}
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          {...register("address")}
          placeholder="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          {...register("phone")}
          placeholder="Phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
}

export default UpdateUser;
