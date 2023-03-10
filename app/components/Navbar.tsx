import logo from "~/assets/svg/dobu-logo.svg";
import NavbarLink from "../components/navbarLink";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-900 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img src={logo} alt="Dubo Martial Arts Gym" className="h-16 w-auto" />
        </div>
        <div className="md:hidden">
          <button
            className="text-grey-500 block hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : null}
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : null}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavbarLink url="/about">About us </NavbarLink>
        <NavbarLink url="/membership">Memberships </NavbarLink>
        <NavbarLink url="/contact">Contact us </NavbarLink>
        <NavbarLink url="/timetable">Timetable </NavbarLink>
        <NavbarLink url="/login">login </NavbarLink>
      </div>
    </header>
  );
};

export default Navbar;
