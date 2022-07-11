import React from "react";

const User = (props) => {
    return(
 <>
    <h1>user secnery </h1>
    <h2>{props.data.name} {props.data.age}</h2>
 </>      
    )


}


export default User