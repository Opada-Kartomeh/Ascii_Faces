import React from 'react';
import ErrorMessage from '../Layout/errorMessage/errorMessage'

const errorHandling=(props)=>{
   
    let {children,error} = props;

    return(
        <React.Fragment>
        {error!==""&&<ErrorMessage message={error}></ErrorMessage>}
        {children}
       </React.Fragment>
    )
}


export default errorHandling