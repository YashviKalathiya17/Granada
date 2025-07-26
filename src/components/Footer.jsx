import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaTh,
  FaLinkedinIn,
  FaFlickr,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-5 pb-3 footer1">
      <div className="container">
        <div className="row text-start">

          {/* MY ACCOUNT */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3 footer1 ">My Account</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none footer1">My account</a></li>
              <li><a href="#" className="text-decoration-none footer1">Personal information</a></li>
              <li><a href="#" className="text-decoration-none footer1">Addresses</a></li>
              <li><a href="#" className="text-decoration-none footer1">Discount</a></li>
              <li><a href="#" className="text-decoration-none footer1">Orders history</a></li>
              <li><a href="#" className="text-decoration-none footer1">Your vouchers</a></li>
              <li><a href="#" className="text-decoration-none footer1">Safe shopping</a></li>
              <li><a href="#" className="text-decoration-none footer1">Size guides</a></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3 footer1">Customer Service</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none footer1">Help & contact</a></li>
              <li><a href="#" className="text-decoration-none footer1">Shipping & taxes</a></li>
              <li><a href="#" className="text-decoration-none footer1">Return policy</a></li>
              <li><a href="#" className="text-decoration-none footer1">Careers</a></li>
              <li><a href="#" className="text-decoration-none footer1">Affiliates</a></li>
              <li><a href="#" className="text-decoration-none footer1">Legal Notice</a></li>
              <li><a href="#" className="text-decoration-none footer1">Privacy & Security</a></li>
              <li><a href="#" className="text-decoration-none footer1">Sitemap</a></li>
            </ul>
          </div>

          {/* FROM TWITTER */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">From Twitter</h6>
            {/* You can embed tweets or add placeholder content */}
          </div>
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-end gap-2 mt-4 flex-wrap">
          {[
            <FaFacebookF />,
            <FaTwitter />,
            <FaRss />,
            <FaTh />,
            <FaLinkedinIn />,
            <FaFlickr />,
            <FaSkype />,
            <FaEnvelope />,
          ].map((Icon, index) => (
            <div
              key={index}
              className="border p-2 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              {Icon}
            </div>
          ))}
        </div>
          <hr />
        <div className="text-center mt-4 small">
          © 2014 Powered by WooCommerce™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
