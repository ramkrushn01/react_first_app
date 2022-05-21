import React from 'react'
import PropTypes from 'prop-types'

const aboutGet = () => {
    document.getElementsByClassName('container')[0].style.display = 'none';
}

const homeGet = (event) => {
    document.getElementsByClassName('container')[0].style.display = '';
}

export default function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li><h3>{props.heading}</h3></li>
                <li onClick={homeGet}>Home</li>
                <li onClick={aboutGet}>About</li>
            </ul>
        </div>
    );
};


Navbar.propTypes = {
    heading: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    heading: "Enter Your heading"
};


