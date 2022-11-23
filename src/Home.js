import React from "react";
import image from "./assests/img2.jpg"
class Home extends React.Component{
    render(){
        return(
            
            <img src={image} style={{height:'100vh',width:'100%'}}/>
        )
    }
}
export default Home;