import { Link } from "@remix-run/react";
type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
};
const NavbarLink = ({ children, url }: NavbarLinkProps) => {
  return (
    <Link to={url} className="block text-white">
      {children}
    </Link>
  );
};
export default NavbarLink;
