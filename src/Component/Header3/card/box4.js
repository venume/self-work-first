import React,{Component} from "react";
import "./box4.css";
import{ Icon} from "antd";
class box4 extends Component{
    render( ){

        return(<div className="main" >
            <div  className="main2" > <Icon style={{fontSize:"60px"}} type="clock-circle" /> < h5>it,s in the numbers</h5> <p>A New bisness list on flippa every houre</p></div>
            <div  className="main2"><Icon  style={{fontSize:"60px"}}type="credit-card" />< h5>The Buyer Wellet</h5><p>A New bisness list on flippa every houre</p></div>
            <div  className="main2"> <Icon  style={{fontSize:"60px"}} type="wechat" />< h5>A Verified Comunity</h5><p>A New bisness list on flippa every houre</p></div>
     


     </div>
        )
    }
}
export default   box4;