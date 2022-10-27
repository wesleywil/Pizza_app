import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import OrderCardItems from "../OrderCartItems/orderCartItems.component";
import OrderCartTotal from "../OrderCartTotal/orderCartTotal.component";

import Logo from "../../assets/CherryPizzaLogo.svg";

const Navbar = () => {
  let activeClassName = "underline";
  return (
    <div className="navbar bg-white text-red-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end
              >
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Create Pizza
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Login/Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="hover:opacity-70">
          <img src={Logo} alt="logo" className="w-10" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn text-xl">
            <FaShoppingCart />
          </label>
          <ul
            tabIndex={0}
            className=" dropdown-content p-2 shadow bg-base-100 rounded-xl w-72 mt-4"
          >
            <OrderCardItems />
            <OrderCartTotal />
            <li className="w-full bg-[#cb0033] hover:bg-[#ef90a9] text-[#f1f2f2] p-2 font-bold text-xl text-center rounded transition duration-700 ease-in-out">
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                ORDER
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
