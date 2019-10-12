import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./card.css";
import {Icon} from "antd";
import image from "./image/a.jpg";
import images from "./image/b.jpg";
import imagess from "./image/c.jpg";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className='z'>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      > 
        <div  className="pry sry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
         <div  className="pry"  style={{ height: 300, background: '#EEE' }}> <img src={image} alt=""/  ><h4>card is here</h4><h4>u$$ 20,0000</h4> <div> 
         </div> <div className="try"> <div className="adit"><  Icon type="eye"  /> Watch </div> <div>contrct /ads</div></div> </div> 
        
      </ItemsCarousel>
      
    </div>
  );
};
 
 