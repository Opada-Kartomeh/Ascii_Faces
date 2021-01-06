import React from 'react';

const card = (props) => {
    const getDate=()=>{
       let createdDate=new Date(props.date);
       let nowDate=new Date();
       let dayes=Math.round((nowDate.getTime()-createdDate.getTime())/(1000*3600*24));
       if(dayes<=7)
       return `${dayes} dayes ago`;
       else
       return createdDate.toLocaleDateString('en-GB');
    }
    return (
       
            <div className="card-container">
                <span className="pro">{`${props.price}$`}</span>
                <div className="round" style={{fontSize:props.size }} >{props.face}</div>
                <h3>{getDate()}</h3>
                <div className="buttons">
                    <button className="primary">
                        Buy now
                    </button>
                </div>
            </div>
       
    )
}
export default card;