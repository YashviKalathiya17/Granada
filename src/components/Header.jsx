// function Header() {
//     return <nav className=" navbar navbar-expand-sm">
//         {/* <div> */}
//             <div className="container-fluid p-4 navMain">
//                 <div className="fs-1 textLogo navbar-brand">GRANADA</div>
            
//             <div className="d-flex collapse navbar-collapse justify-content-between ">
//                 <ul className="navbar-nav me-auto ">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link"></a> HOME
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link"></a> HOME
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link"></a> HOME
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link"></a> HOME
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>

// }
// {/* <img src="/src/assets/react.svg" alt="Logo" /> */ }

// export default Header











import React from "react";
import { FaShoppingBag, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 navMain">
      <div className="container">

        <a className="navbar-brand fw-bold fs-2 textLogo" href="#">
          GRANADA
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4 text-uppercase fw-medium">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3">

          <div className="position-relative">
            <FaShoppingBag className="fs-5 text-secondary" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              2
            </span>
          </div>

          <FaUser className="fs-5 text-secondary" />
          <FaSearch className="fs-5 text-secondary" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
