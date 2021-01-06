import React from 'react';


const loader=(props)=>{
    let body=null;
    if(props.isFinished)
     body=(<h3 className="end_Catalog">End Of Catalogue</h3>);
    else
    body=(<React.Fragment>
    <div ></div>
    <div className="animated_loader animated_loader_first"></div>
    <div className="animated_loader animated_loader_second"></div>
    <div className="animated_loader animated_loader_third"></div>
    </React.Fragment>)
    return(<div className="lds-ring">{body}</div>)
}
export default loader