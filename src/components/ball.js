import React from "react";

const Ball = ({description,classvalue}) =>(
    <div>
         <div className={classvalue}>
            
            </div> <span className="legend">{description}</span><br />
    </div>
)

export default Ball;