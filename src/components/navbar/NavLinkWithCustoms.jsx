import { NavLink } from "react-router";

export default function NavLinkWithCustoms({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-lg   ${
          isActive ? "bg-blue-400 text-green-200" : "text-blue-400"
        } `
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
