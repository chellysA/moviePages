import { NavLink } from "react-router-dom";

interface INavBarProps {
    link: string;
    label: string;
    onClick?: () => void;
  }

const NavBarItem = ({ link, label, onClick }: INavBarProps) => {
    return (
      <NavLink
        to={link}
        className="no-underline text-white px-3"
        onClick={onClick}
      >
        <li className="text-sm hover:text-principal-200 w-max">{label}</li>
      </NavLink>
    );
  };

  export default NavBarItem