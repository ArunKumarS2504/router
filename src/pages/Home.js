import React,{useContext} from "react";
import Context from "../Context";



function Home(){
    const inputVal = useContext(Context)

    return(
        <div>
      <h2>Home</h2>
      <p>Value from parent: {inputVal}</p>
     
    </div>
    );
}
export default Home;