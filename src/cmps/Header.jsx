import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/">
        <h2 className="title">Gaming Journal</h2>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
};
