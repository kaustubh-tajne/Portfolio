import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer mt-5">
        <div className="container-fluid">
          <div className="row py-3 px-3 foot">
            <div className="col-lg-8 col-md-8 col-12 col-xxl-8 text-center text_footer">
              <span>Copyright © 2022 kaustubhtajne.com</span>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-xxl-4 text-end link_sec">
              <a href="https://www.linkedin.com/in/kaustubh-tajne-5816481bb/" target='_blank'>
                <SiLinkedin />
              </a>
              <a href="https://github.com/kaustubh-tajne" target='_blank'>
                <BsGithub />
              </a>
              <a href="https://www.facebook.com/kaustubh.tajne.98/" target='_blank'>
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/kaustubh_tajne/" target='_blank'>
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
