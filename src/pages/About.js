import React,{useContext} from "react";
import Context from "../Context";



function About(){
    const inputVal = useContext(Context)

    return(
        <div>
      <h2>About</h2>
      <p>Value from parent: {inputVal}</p>
     
    </div>
    );
}
export default About;