import React from "react";



function CustomInput(props)
{
    return <>
    <h1 >  Enter Your {props.cont}     </h1>  <input style={{color:props.tx}}></input>
    </>

}

export default CustomInput;