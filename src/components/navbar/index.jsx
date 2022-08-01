import React from "react";
import { ReactComponent as IconCart } from "../../assets/cartIcon.svg";
import { ReactComponent as Temp } from "../../assets/temp.svg";
import { ReactComponent as IconDownArrow } from "../../assets/downArrow.svg";
import SearchBar from "./subcomponent/searchbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../reduxStore/user-slice";
import Logo from "../../assets/images/logo2.jpeg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.totalItems);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    dispatch(removeUser());
  };
  return (
    <nav className="flex w-screen h-20 ">
      {/* logo div */}
      <div className="w-3/12 h-full ">
        <Link to="/">
          <div className="flex items-center h-full ml-16">
            <img src={Logo} alt="" className="h-full " />
            <p className="font-mono font-bold text-para text-purple">
              Story Books
            </p>
          </div>
        </Link>
      </div>
      {/* searchbar div */}
      <SearchBar />
      {/* profile and cart div */}
      <div className="flex items-center w-3/12 h-full ">
        {/*Cart Svg */}
        <Link to="/cart">
          <div className="relative">
            <IconCart className="w-8 h-8 ml-8 stroke-2 stroke-purple" />
            {cartItems !== 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 p-0 m-0 font-mono text-sm leading-tight text-center text-white rounded-full bg-pink top right">
                {cartItems}
              </span>
            )}
          </div>
        </Link>
        {/*Profile Svg */}
        {!user.user.email && (
          <div className="flex items-center px-6 py-4 ml-16 border rounded-md hover:bg-yellow-600 bg-orange">
            <Link to="/login">
              <p className="font-bold text-offwhite text-menu">
                SignUp / Login
              </p>
            </Link>
          </div>
        )}

        {user.user.email && (
          <>
            {" "}
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <div className="flex items-center ml-8">
                <Temp />
                <div className="items-start ml-3">
                  <div className="flex items-center">
                    {/*Profile Name */}
                    <h1 className="font-bold text-menu text-purple">
                      {user.user.username}
                    </h1>
                    {/*Dropdown for settings and logout. Just svg */}
                    <IconDownArrow className="w-6 h-8 ml-2 stroke-2 stroke-purple" />
                  </div>
                  {/*user email address */}
                  <p className="text-tiny text-lightpurple">
                    {user.user.email}
                  </p>
                </div>
              </div>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
}
