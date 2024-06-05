import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateUser } from "../../actions/UserAction";

function Profile(prop) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = useSelector((state) => state.userSignin);
  const { userInfo, error } = user;

  const onSubmit = (data) => {
    const updatedData = {};
    if (data.name) updatedData.name = data.name;
    if (data.email) updatedData.email = data.email;
    if (data.address) updatedData.address = data.address;
    if (data.phone) updatedData.phone = data.phone;

    dispatch(updateUser(userInfo._id, updatedData));
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setAddress(userInfo.address);
      setPhone(userInfo.phone);
    }
  }, [userInfo, history]);

  return (
    <div className="profile-page">
      <h1>Hồ sơ của tôi</h1>
      <div className="subtitle">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-profile">
        <div className="input-container">
          <input
            {...register("name")}
            placeholder="Tên"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            {...register("address")}
            placeholder="Địa chỉ"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            {...register("phone")}
            placeholder="Số điện thoại"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <input type="submit" value="Lưu" />
        {error && <h2>{error}</h2>}
      </form>
    </div>
  );
}

export default Profile;
