import React,{useContext} from "react";
import Context from "../Context";



function Contact(){
    let inputVal = useContext(Context)

    return(
        <div>
      <h2>Contact</h2>
      <p>Value from parent: {inputVal}</p>
     
    </div>
    );
}
export default Contact;