import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
// import LoadingDots from './LoadingDots';

// props destructured:
const Header = ({loading}) => {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active" className="btn btn-danger">Home</IndexLink>
        {"  "}
        <Link to="/courses" activeClassName="active" className="btn btn-default">Courses</Link>
        {"  "}
        <Link to="/about" activeClassName="active" className="btn btn-success">About</Link>
        {/* {loading && <LoadingDots interval={100} dots={12}/>} */}
      </nav>
    );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
