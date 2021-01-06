import React,{useEffect} from 'react';


const Modal=(props)=>{

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'auto';
    },[])
 return(
     <div className="modal">
         <div className="modal-content"
          style={{backgroundImage:`url(${props.src})`,
          backgroundPosition:'50% 50%',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'}}>
        </div>
        <div className="modal-footer"  onClick={props.close}>Cancel</div>
        </div>
 )
}
export default Modal 