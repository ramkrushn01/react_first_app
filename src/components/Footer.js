import React from 'react';
import PropTypes from 'prop-types';


export default function Footer(props) {
    return (
        <footer>
            <p>Copyright &copy; {props.year} All Right Reserved</p>
            <p>Design By: {props.devName} </p>
        </footer>
    )
}

Footer.propTypes = {
    year: PropTypes.number,
    devName: PropTypes.string
}

Footer.defaultProps = {
    year: 2022,
    devName: 'Ramkrushn B. Salunkhe'
}