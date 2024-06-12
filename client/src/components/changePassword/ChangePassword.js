import React, { useState, useEffect } from "react";
import "./ChangePassword.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changePassword } from "../../actions/UserAction"; // Cần tạo action này
import { InputAdornment, TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import showPwdImg from '../../assets/svg/show-password.svg';
import hidePwdImg from '../../assets/svg/hide-password.svg';
import { message} from 'antd';

function ChangePassword(prop) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
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

  const success = () => {
    message.success({
        content: 'Thay đổi mật khẩu thành công',
        duration: 1,
        className: 'custom-class',
        style: {
            position: 'absolute',
            right: '2rem',
            top: '2rem',
            margin: '1rem 0'
        },
      });
  };

  const onSubmit = (data) => {
    dispatch(changePassword(userInfo._id, data.oldPassword, data.newPassword));
    setOldPassword("");
    setNewPassword("");
    reset();
    success()
  };

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  return (
    <div className="changepassword-page">
      <h1>Đổi mật khẩu</h1>
      <div className="subtitle">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </div>
      <form onSubmit={handleSubmit(onSubmit)} classname="form-changepassword">
        <div className="input-container">
        <input
          {...register("oldPassword", { required: "Mật khẩu cũ là bắt buộc" })}
          placeholder="Mật khẩu cũ"
          type={showOldPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={errors.newPassword ? "input-error" : ""}
          required
        />
        <img
          title={showOldPassword ? <VisibilityOff /> : <Visibility />}
          src={showOldPassword ? hidePwdImg : showPwdImg}
          onClick={handleClickShowOldPassword}
        />
        </div>
        {errors.oldPassword && (
          <span className="error-message">{errors.oldPassword.message}</span>
        )}
        <div>

        </div>
        
        <input
          {...register("newPassword", { required: "Mật khẩu mới là bắt buộc" })}
          placeholder="Mật khẩu mới"
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{position: "relative"}}
          className={errors.newPassword ? "input-error" : ""}
          required
        />
        <img
          title={showNewPassword ? <VisibilityOff /> : <Visibility />}
          src={showNewPassword ? hidePwdImg : showPwdImg}
          onClick={handleClickShowNewPassword}
          style={{  cursor: "pointer",
            position: "absolute",
            width: "20px",
            right: "40px",
            top: "280px",}}
        />
        {errors.newPassword && (
          <span className="error-message">{errors.newPassword.message}</span>
        )}

        <input type="submit" value="Đổi mật khẩu" />
        {error ? <h2>{error}</h2> : null}
      </form>
    </div>
  );
}

export default ChangePassword;
