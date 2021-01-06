import React from 'react';
import logo from '../../assets/logo-light.png';
const GetStart = (props) => {
    console.log(props);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                   <a
                    className="App-link"
                    href="/products">
                    Products
                </a>
            </header>
        </div>
    )
}
export default GetStart