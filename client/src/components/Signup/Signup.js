import React, { useState } from 'react';
import './Signup.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {SignupUser} from '../../actions/UserAction';
import {Link} from 'react-router-dom';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import showPwdImg from '../../assets/svg/show-password.svg';
import hidePwdImg from '../../assets/svg/hide-password.svg';
import { message} from 'antd';

function Login(props) {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [emailExists, setEmailExists] = useState('');

    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleClickShowRepeatPassword = () => {
      setShowRepeatPassword(!showRepeatPassword);
    };

    const success = () => {
      message.success({
          content: 'Đăng ký thành công',
          duration: 2,
          className: 'custom-class',
          style: {
              position: 'absolute',
              right: '2rem',
              top: '2rem',
              margin: '1rem 0'
          },
        });
    };

    const onSubmit = async (data) => {
        if(password === confirmPassword) {
          try {
            await dispatch(SignupUser(data));
            history.push("/login")
            success()
        } catch (error) {
            setEmailExists(error.message);
        }            
        } else{
            alert("wrong repeat password")
        }
        
    }
  
    return (
      <div className="signup-page">
        <h2>ĐĂNG KÍ</h2>
        <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
          <input {...register("name")} placeholder="Name" required></input>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            required
            onChange={() => setEmailExists('')}
          ></input>
          
          <input
            {...register("password")}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
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
          top: "320px",}}
        />
          <input
            {...register("repeat password")}
            placeholder="Repeat password"
            type={showRepeatPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>
          <img
          title={showRepeatPassword ? <VisibilityOff /> : <Visibility />}
          src={showRepeatPassword ? hidePwdImg : showPwdImg}
          onClick={handleClickShowRepeatPassword}
          style={{  cursor: "pointer",
          position: "absolute",
          width: "20px",
          right: "20px",
          top: "400px",}}
        />

          {emailExists && <p className="error-message">Email đã tồn tại</p>}
          <input type="submit" value="Đăng Ký"></input>
        </form>
          <span>Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></span>
      </div>
    );
}

export default Login;