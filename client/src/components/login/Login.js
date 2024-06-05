import React, { useState, useEffect } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/UserAction';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import showPwdImg from '../../assets/svg/show-password.svg';
import hidePwdImg from '../../assets/svg/hide-password.svg';

function Login(props) {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.userSignin);
  const { userInfo, error } = user;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  });

  return (
    <div class="login-page">
      <h2> ĐĂNG NHẬP </h2>
      <form onSubmit={handleSubmit(onSubmit)} class="form-login">
        <input {...register("email")} placeholder="Email" required></input>
        <input
          {...register("password")}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          required
        ></input>
        <img
          title={showPassword ? <VisibilityOff /> : <Visibility />}
          src={showPassword ? hidePwdImg : showPwdImg}
          onClick={handleClickShowPassword}
          style={{  cursor: "pointer",
          position: "absolute",
          width: "20px",
          right: "20px",
          top: "160px",}}
        />

        <input type="submit" value="Đăng Nhập"></input>
        {error ? <h2>{error}</h2> : <></>}
        <span>Bạn chưa có tài khoản? <Link to="/register">Tạo tài khoản</Link></span>
      </form>
    </div>
  );
}

export default Login;