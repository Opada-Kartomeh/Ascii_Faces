import React from 'react';

const Filter = (props) => {

    return (
        <React.Fragment>
            <div className="Container_Filter">
                <div className="filter">
                    <a href="/products?_sort=price">Price</a>
                    <a href="/products?_sort=size">Size</a>
                    <a href="/products?_sort=_id">Id</a>

                </div>
            </div>
        </React.Fragment>
    )
}
export default Filter;