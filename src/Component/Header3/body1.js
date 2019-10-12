import React,{Component} from "react";
import {Icon} from "antd";

import "./body1.css";
class Body1 extends Component{
    render( ){

        return(
            <div className="bodyy">
              <p> <Icon type="check"  className="bodyy3" />  10 year experence </p>
               <p><Icon type="check" className="bodyy3"/> lovest fee for seller</p>

                <p><Icon type="check"className="bodyy3" /> more then 250 bissess sold</p>

                <p><Icon type="check" className="bodyy3"/> no fee for byers</p>

            </div>
        )
    }
}
export default   Body1;