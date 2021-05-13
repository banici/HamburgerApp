import React from 'react';
import styling from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={styling.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;