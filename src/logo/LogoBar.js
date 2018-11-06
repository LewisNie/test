import React, { Component } from 'react';

import logo from '../image/holiday.png';

class LogoBar extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo" style={{width: "1440px", backgroundColor: "#66b3ff" }}/>
            </div>
        );
    }
}


export default LogoBar;

