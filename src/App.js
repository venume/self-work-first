import React,{Component} from 'react';
import Header from './Component/Header/Header';
import Header2 from './Component/body/Header2';
import Header3 from './Component/Header3/Header3';
import Body1 from  "./Component/Header3/body1";
import Box2 from  "./Component/Header3/box2";
import Card from  "./Component/Header3/card/card";
import Body2 from "./Component/Header3/body2"
import Box3 from  "./Component/Header3/card/box3";
import Box4 from  "./Component/Header3/card/box4";
import Last1 from "./Component/last1/last1"
import Last2 from "./Component/last1/last2"
import Last3 from "./Component/last1/last3"
import Last4 from "./Component/last1/last4"
import Last5 from "./Component/last1/last5"
import Last6 from "./Component/last1/last6"
import './App.css';

 class  App extends Component{
   render(){
     return(
       <div>
        <Header3/>
        <br/><br/><br/><br/>
        <Header />
        

        <Header2/>
        <br/><br/>

        <Body1 />
        <Box2/>
        <Body2/>
        <Card/>
        <Body2/>
        <Card/>
        <Body2/>
        <Card/>
        <Body2/>
        <Card/>
        <Body2/>
        <Card/>
        <Box3/>
        <Box4/>
        <Last1/>
        <Last2/>
        <Last3/>
        <Last4/>
        <Last5/>
        <Last6/>
        




       </div>
     )
   }
 }




export default App;
