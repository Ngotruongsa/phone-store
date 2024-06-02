import React, { useState, useEffect } from "react";
import "./ChangePassword.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changePassword } from "../../actions/UserAction"; // Cần tạo action này

function ChangePassword(prop) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
    dispatch(changePassword(userInfo._id, data.oldPassword, data.newPassword));
    setOldPassword("");
    setNewPassword("");
    reset();
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
        <input
          {...register("oldPassword", { required: "Mật khẩu cũ là bắt buộc" })}
          placeholder="Mật khẩu cũ"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={errors.newPassword ? "input-error" : ""}
          required
        />
        {errors.oldPassword && (
          <span className="error-message">{errors.oldPassword.message}</span>
        )}
        <div>

        </div>
        <input
          {...register("newPassword", { required: "Mật khẩu mới là bắt buộc" })}
          placeholder="Mật khẩu mới"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={errors.newPassword ? "input-error" : ""}
          required
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
