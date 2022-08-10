import React from "react";
import Navbar from "../connections/Navbar";
import aboutbg from "../../images/bg2.jpg";
import Arijit from "../../images/Arijit2.jpg";
import Supriya from "../../images/Supriya copy.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page d-flex flex-column">
        <div className="about-heads mb-5">
          <div className="d-flex flex-column justify-content-center text-align-center align-items-center about-head p-5">
            <h1 className="text-align-center mx-5 my-3 ">ABOUT US</h1>
            <p className="col-10 text-align-center">
              This website is basically designed to explore things,places easily
              in just one click.Explore the world ,We are here to help you
              out.Connect with us for more.
            </p>
          </div>
        </div>
        <div className="about-main my-5 d-flex">
          <div className="about-user1 ">
            <div className="user-box mx-5 d-flex ">
              <div className="user-para">
                <h2 className="pt-5 px-5 user-heads">ABOUT ARIJIT</h2>
                <p className="pl-5  px-5 col-10 user-paras ">
                  I am Arijit kumar sahu from Bhubaneswar,Odisha.
                </p>
                <div className="links d-flex flex-space-between px-5 py-5">
                  <i class="bx bxl-facebook-circle bx-sm mx-2"></i>
                  <i class="bx bxl-instagram bx-sm"></i>
                  <i class="bx bxl-linkedin bx-sm mx-2"></i>
                  <i class="bx bxl-github bx-sm"></i>
                </div>
              </div>
              <div className="user-img">
                <img src={Arijit} alt="" className="img-class" />
              </div>
            </div>
          </div>
          <div className="about-user2">
            <div className="user-box mx-5 d-flex ">
              <div className="user-img">
                <img src={Supriya} alt="" className="img-class " />
              </div>
              <div className="user-para d-flex align-items-end flex-column">
                <h2 className="pt-5 px-5 user-heads">ABOUT SUPRIYA</h2>
                <p className="pl-5  col-10 user-paras">
                  I am Supriya Nanda from Rourkela,Odisha.
                </p>
                <div className="links d-flex flex-space-between px-5 py-5">
                  <i class="bx bxl-facebook-circle bx-sm mx-2"></i>
                  <i class="bx bxl-instagram bx-sm"></i>
                  <i class="bx bxl-linkedin bx-sm mx-2"></i>
                  <i class="bx bxl-github bx-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-footer"></div>
      </div>
    </>
  );
};

export default About;
