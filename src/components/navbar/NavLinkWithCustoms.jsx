import { NavLink } from "react-router";

export default function NavLinkWithCustoms({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-lg   ${
          isActive ? "bg-blue-400 text-green-100" : "text-green-200"
        } `
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
