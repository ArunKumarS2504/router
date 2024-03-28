import React, { useContext } from 'react'
import { Link} from "react-router-dom"
import './Layout.css';

import Context from '../Context'

const Layout =() => {
    const {inputVal,setInputVal} = useContext(Context);

    const handleChange = (e)=>{
        setInputVal(e.target.value)
    }

    return(
        <div>
            <input 
            type='text'
            value={inputVal}
            onChange={handleChange}
            placeholder='Type...'>
            </input>
             <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/aboutus">About Us</Link> |{" "}
      </nav>
      {/* <button onClick={}>submit</button> */}
        </div>
    )
}
export default Layout;