import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { SignoutUser } from "../../actions/UserAction";
import { useThemeToggle } from "../../ThemeContext";
import { useHistory } from "react-router";
import { searchProduct } from "../../actions/ProductAction";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Switch, FormControlLabel } from "@mui/material";

import {
  DownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showAccount, setShowAccount] = useState(false);
  const [showAccount2, setShowAccount2] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount = cartItems.reduce((a, b) => a + b.qty, 0);

  const [menu, setMenu] = useState(true);

  const toggleDarkMode = useThemeToggle();

  const handleSignout = () => {
    dispatch(SignoutUser());
  };

  const SearchProduct = async (e) => {
    e.preventDefault();
    await history.push("/search");
    dispatch(searchProduct(search));
    setSearch("");
  };

  return (
    <div className="header">
      <section id="menu">
        <div className="logo">
          <span>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </span>
        </div>
        <div className="search">
          <form onSubmit={(e) => SearchProduct(e)}>
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm ..."
              defaultValue={setSearch}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <SearchOutlined onClick={(e) => SearchProduct(e)}></SearchOutlined>
            {/* <button type="submit" onClick={(e) => SearchProduct(e)}>Search</button> */}
          </form>
        </div>
        <ul className="menu-list" id={menu ? "hidden" : ""}>
          <li className="active">
            <Link to="/">
              {" "}
              <HomeIcon /> Trang Chủ{" "}
            </Link>
          </li>
          <li>
            <Link to="/product">
              {" "}
              <NotesIcon /> Sản Phẩm{" "}
            </Link>
          </li>
          {userInfo ? (
            <li onClick={() => setShowAccount2(!showAccount2)}>
              <Link>
                <AccountCircleIcon />
                {userInfo.name}
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>
              {showAccount2 ? (
                <div className="menu-drop">
                  {userInfo.isAdmin ? <Link to="/admin">Admin</Link> : ""}
                  <Link>Tài khoản của tôi</Link>
                  <Link to="/password">Đổi mật khẩu</Link>
                  <Link to="/myOrder">Đơn hàng</Link>
                  <Link onClick={() => handleSignout()}>Đăng xuất</Link>
                  <ul style={{display: "flex"}}>
                    <li>
                    Dark mode
                    </li>
                    <li style={{marginLeft: "-5px"}}>
                  <FormControlLabel
                    control={<Switch onChange={toggleDarkMode} />}
                  />
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          ) : (
            <li onClick={() => setShowAccount(!showAccount)}>
              <Link>
                <AccountCircleIcon />
                Tài khoản
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>

              {showAccount ? (
                <div className="menu-drop">
                  <Link to="register">Đăng kí</Link>
                  <Link to="login">Đăng nhập</Link>
                  <ul style={{display: "flex"}}>
                    <li>
                    Dark mode
                    </li>
                    <li style={{marginLeft: "-5px"}}>
                  <FormControlLabel
                    control={<Switch onChange={toggleDarkMode} />}
                  />
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          )}
          <li className="shop-cart">
            <Link to="/cart" className="shop-cart">
              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
              ></ShoppingCartOutlined>
              <span className="count"> {amount} </span>
            </Link>
          </li>
        </ul>
        <div className="bar" onClick={() => setMenu(!menu)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </section>
    </div>
  );
}

export default Header;
