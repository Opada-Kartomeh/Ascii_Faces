import  React from 'react';
const errorMessage=(props)=>{

    let {message}=props;
    return (
        <div className="error">
           <div className="error_message">
            {message}
            </div>
        </div>
    )
}
export default errorMessage;