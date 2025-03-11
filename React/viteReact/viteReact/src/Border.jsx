import React from "react";
const Border = ({children}) => {
    return(
        <div style={{border: "1px solid red",backgroundColor: "yellow",height: "150px",width: "120px"}}>
            {children}
        </div>
    )
}

export default Border