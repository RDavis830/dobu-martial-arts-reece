import logo from "~/assets/svg/dobu-logo.svg";
import NavbarLink from "./navbarLink";

const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img src={logo} alt="Dubo Martial Arts Gym" className="h-16 w-auto" />
        </div>
        <div>
          <button
            className="text-grey-500 block hover:text-white focus:text-white focus:outline-none"
            type="button"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <NavbarLink url="/about">About us </NavbarLink>
      <NavbarLink url="/membership">Memberships </NavbarLink>
      <NavbarLink url="/contact">Contact us </NavbarLink>
      <NavbarLink url="/forums">Forums </NavbarLink>
      <NavbarLink url="/timetable">Timetable </NavbarLink>
    </header>
  );
};
export default Navbar;
