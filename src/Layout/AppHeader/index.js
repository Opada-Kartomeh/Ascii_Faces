import React from 'react';
import logo from '../../assets/logo-light.png'

const header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="Left">
                <img src={logo} className="logo" alt="logo" />
                </div>
            </div>

        </React.Fragment>




    )
}
export default header