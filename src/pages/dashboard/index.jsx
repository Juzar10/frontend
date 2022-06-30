import React from "react";
import "./style/index.css";
import hogwartsImage from "../../assets/images/release_1_hogwarts.png";
import witcherImage from "../../assets/images/1244644.jpeg";

function DashBoard() {
  return (
    <div className="h-screen bg-offwhite">
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
                The Monk Who Sold His Farrai
              </p>
              {/* author and title name start*/}
              <div className="flex items-center">
                <p className="mr-8 font-semibold text-para text-purple">
                  author name
                </p>
                <p className="font-semibold text-para text-purple">genre</p>
              </div>
              {/* author and title name end*/}
            </div>
            <div
              id="description-box"
              className="w-4/5 p-4 mt-4 border-l-2 border-lightpurple "
            >
              <p className=" text-para text-purple max-h-52">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                Lorem ipsum
              </p>
            </div>
            <div id="price-box" className="flex items-end w-1/2 mt-8 ">
              <p className="font-extrabold text-purple text-main">$225</p>
              <p className="mb-2 ml-6 text-para text-purple">$500</p>
              <p className="p-1 mb-3 ml-6 border rounded-md border-pink text-menu bg-pink text-offwhite">
                20% off
              </p>
            </div>
            <div id="button box" className="mt-8">
              <button className="w-48 h-20 rounded-sm bg-purple text-offwhite text-para ">
                Add to Cart
              </button>
              <button className="w-48 h-20 ml-6 border rounded-sm text-purple border-purple text-para">
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
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="relative news-item hero-item">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-ori-sin.jpg"
            alt=""
            className="absolute w-full "
          />
        </div>
        <div className="relative news-item standard-item divcontainer">
          <img
            src={witcherImage}
            alt=""
            className="absolute w-full max-h-full backgroundImage"
          />
          <div className="absolute flex items-center justify-center w-full h-full opacity-0 middle">
            <div>Withcher and CIri</div>
          </div>
        </div>
        <div className="news-item standard-item"></div>
        <div className="news-item standard-item"></div>
        <div className="news-item standard-item"></div>
        <div className="news-item standard-item"></div>
      </div>
    </div>
  );
}

export default DashBoard;
