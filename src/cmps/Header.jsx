import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/actions/gameActions';
export const Header = () => {
  const dispatch = useDispatch();
  // const searchResults = useSelector((state) => state.gameModule.search);
  // const onSetSearch = (query) => {
  //   // console.log(query.query);
  //   if (query.query === '') return;
  //   dispatch(setSearch(query));
  // };
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
