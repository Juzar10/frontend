import React, { useState } from "react";
import "./style/index.css";
import hogwartsImage from "../../assets/images/release_1_hogwarts.png";
import witcherImage from "../../assets/images/1244644.jpeg";
import narniaImage from "../../assets/images/narnia.jpg";
import ringImage from "../../assets/images/lord.webp";
import dorian from "../../assets/images/Dorian Gray.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import { addToCart } from "../../reduxStore/cart-slice";
import { Alert, Snackbar } from "@mui/material";
import Footer from "../../components/footer";

function DashBoard() {
  const [open, setOpen] = useState(false);

  const listOfData = useSelector(
    (state) => state.dashboard.listOfDashboardItems
  );

  const navigate = useNavigate();

  const onViewDetailsHandler = (e) => {
    navigate(ROUTES.PRODUCTDETAILS, { state: { id: e.target.id } });
  };

  const dispatch = useDispatch();

  const onCartAddHandler = (e) => {
    setOpen(true);
    const cartItem = {
      key: listOfData[e.target.id]._id,
      id: listOfData[e.target.id]._id,
      title: listOfData[e.target.id].title,
      coverImg: listOfData[e.target.id].coverImg,
      price: listOfData[e.target.id].price,
      quantity: 1,
      author: listOfData[e.target.id].author,
    };
    dispatch(addToCart(cartItem));
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {listOfData.length !== 0 && (
        <div className="h-screen bg-offwhite">
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Item Added to cart
            </Alert>
          </Snackbar>
          <div className="relative flex items-center h-full mb-3 divcontainer">
            <img
              src={hogwartsImage}
              alt="heelo"
              className="absolute top-0 left-0 h-screen w-max backgroundImage"
            />
            <div className="absolute flex mx-16 opacity-0 h-5/6 middle">
              <div className="w-[65%]">
                {" "}
                <div>
                  <p className="text-orange text-menu">
                    B&nbsp;E&nbsp;S&nbsp;T&nbsp;&nbsp;S&nbsp;E&nbsp;L&nbsp;L&nbsp;E&nbsp;R
                  </p>
                  <p className="font-bold text-grab text-purple">
                    {listOfData[0].title}
                  </p>
                  {/* author and title name start*/}
                  <div className="flex items-center">
                    <p className="mr-8 font-semibold text-para text-purple">
                      {listOfData[0].author[0]}
                    </p>
                    <p className="font-semibold text-para text-purple">
                      {listOfData[0].genres[0]}
                    </p>
                  </div>
                  {/* author and title name end*/}
                </div>
                <div
                  id="description-box"
                  className="w-4/5 p-4 mt-4 border-l-2 border-lightpurple "
                >
                  <p className="overflow-hidden text-clip text-para text-purple max-h-52">
                    {listOfData[0].description}
                  </p>
                </div>
                <div id="price-box" className="flex items-end w-1/2 mt-8 ">
                  <p className="font-extrabold text-purple text-main ">
                    ${listOfData[0].price}
                  </p>
                  <del className="mb-2 ml-6 text-para text-purple">
                    ${Math.round(listOfData[0].price * 1.2 * 100) / 100}
                  </del>
                  <p className="p-1 mb-3 ml-6 border rounded-md border-pink text-menu bg-pink text-offwhite">
                    20% off
                  </p>
                </div>
                <div id="button box" className="mt-8">
                  <button
                    className="w-48 h-20 rounded-sm bg-purple hover:bg-indigo-900 text-offwhite text-para "
                    id={0}
                    onClick={onCartAddHandler}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="w-48 h-20 ml-6 border rounded-sm text-purple hover:border-indigo-900 hover:text-indigo-900 border-purple text-para"
                    id={listOfData[0]._id}
                    onClick={onViewDetailsHandler}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="w-[35%] h-full pt-12">
                <div className="book">
                  {" "}
                  <img
                    src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg"
                    alt="haryy potter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="relative news-item hero-item divcontainer">
              <img
                src={ringImage}
                alt=""
                className="absolute w-full h-full backgroundImage"
              />
              <div className="absolute flex justify-center w-full h-full opacity-0 middle">
                <div className="w-2/3 mt-32">
                  <div className="h-full ">
                    <p className="font-bold text-purple text-grab">
                      {listOfData[3].title}
                    </p>
                    <div className="flex font-semibold text-purple text-para">
                      <p className="mr-8"> {listOfData[3].author[0]}</p>
                      <p>{listOfData[3].genres[0]}</p>
                    </div>
                    <div id="button box" className="mt-8">
                      <button
                        className="w-48 h-20 rounded-sm bg-purple hover:bg-indigo-900 text-offwhite text-para "
                        id={3}
                        onClick={onCartAddHandler}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="w-48 h-20 ml-6 border rounded-sm text-purple border-purple text-para"
                        id={listOfData[3]._id}
                        onClick={onViewDetailsHandler}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative news-item standard-item divcontainer">
              <img
                src={witcherImage}
                alt=""
                className="absolute w-full max-h-full backgroundImage"
              />
              <div className="absolute flex justify-center w-full h-full opacity-0 middle">
                <div className="w-2/3 mt-32">
                  <div className="h-full ">
                    <p className="font-bold text-purple text-grab">
                      {listOfData[4].title}
                    </p>
                    <div className="flex font-semibold text-purple text-para">
                      <p className="mr-8"> {listOfData[4].author[0]}</p>
                      <p>{listOfData[4].genres[0]}</p>
                    </div>
                    <div id="button box" className="mt-8">
                      <button
                        className="w-48 h-20 rounded-sm bg-purple hover:bg-indigo-900 text-offwhite text-para "
                        id={4}
                        onClick={onCartAddHandler}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="w-48 h-20 ml-6 border rounded-sm text-purple border-purple text-para"
                        id={listOfData[4]._id}
                        onClick={onViewDetailsHandler}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative news-item standard-item divcontainer">
              <img
                src={dorian}
                alt=""
                className="absolute w-full h-full backgroundImage"
              />
              <div className="absolute flex justify-center w-full h-full opacity-0 middle">
                <div className="w-2/3 mt-32">
                  <div className="h-full ">
                    <p className="font-bold text-purple text-grab">
                      {listOfData[2].title}
                    </p>
                    <div className="flex font-semibold text-purple text-para">
                      <p className="mr-8"> {listOfData[2].author[0]}</p>
                      <p>{listOfData[2].genres[0]}</p>
                    </div>
                    <div id="button box" className="mt-8">
                      <button
                        className="w-48 h-20 rounded-sm bg-purple hover:bg-indigo-900 text-offwhite text-para "
                        id={2}
                        onClick={onCartAddHandler}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="w-48 h-20 ml-6 border rounded-sm text-purple border-purple text-para"
                        id={listOfData[2]._id}
                        onClick={onViewDetailsHandler}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative news-item standard-item divcontainer">
              <img
                src={narniaImage}
                alt=""
                className="absolute w-full h-full backgroundImage"
              />
              <div className="absolute flex justify-center w-full h-full opacity-0 middle">
                <div className="w-2/3 mt-32">
                  <div className="h-full ">
                    <p className="font-bold text-purple text-grab">
                      {listOfData[1].title}
                    </p>
                    <div className="flex font-semibold text-purple text-para">
                      <p className="mr-8"> {listOfData[1].author[0]} </p>
                      <p> {listOfData[1].genres[0]} </p>
                    </div>
                    <div id="button box" className="mt-8">
                      <button
                        className="w-48 h-20 rounded-sm bg-purple hover:bg-indigo-900 text-offwhite text-para "
                        id={1}
                        onClick={onCartAddHandler}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="w-48 h-20 ml-6 border rounded-sm text-purple border-purple text-para"
                        id={listOfData[1]._id}
                        onClick={onViewDetailsHandler}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </>
  );
}

export default DashBoard;
