import React from "react";

import CustomInput from "../component/custom_input_field";

function Screen()

{
    return <> <CustomInput cont={"Name"} tx={"Black"}  ></CustomInput>  <CustomInput cont={"email"} tx={"blue"}></CustomInput>  <CustomInput cont={"password" } tx={"red"}></CustomInput>   <button>Submit</button> </>
}



export default Screen