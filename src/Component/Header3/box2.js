import React,{Component} from "react";
import {Icon} from "antd";

import "./box2.css";
class Box2 extends Component{
    render( ){

        return(
            <div className="bodyy2" >
            <div className="bore1">
               <h5><Icon type="safety" className="bore2" /> Percasing Gerntess <button className=" bore3">learn more <Icon type="arrow-right" /></button></h5>
            </div>
             <div  className="bore1">
             
               <h5 ><Icon type="play-circle"  className="bore2"/> How to do it ? <button  className=" bore3"> watch vedio <Icon type="arrow-right" /></button></h5>
            
          </div>
          </div>
        )
    }
}
export default   Box2;