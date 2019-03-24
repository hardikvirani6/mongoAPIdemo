import React , {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {"  |  "}
      <Link to="/about" activeClassName="active">About</Link>
      {"  |  "}
      <Link to="/contact" activeClassName="active">Employee</Link>
      {"  |  "}
      <Link to="/product" activeClassName="active">Products</Link>
      {loading && <LoadingDots dots={20} interval={100}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
