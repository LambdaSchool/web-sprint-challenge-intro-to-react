// Write your Character component here
import React, {useState} from 'react';
import { Button} from 'reactstrap';
import '../App.css'
import Film from './Films'
import { H1 } from './Example'
export default function Characters(props) {
const apiData = props.item; 
const [ openModel, setOpenModel ] = useState(false) 
function onclickhandler(event){
   event.preventDefault();
   return  !openModel ?  setOpenModel(true)  : setOpenModel(false);
}                 // This removes the need got having to type 'props'.         
 return (

     <div>
         <ul >          
            {
            apiData.map((item,count) =>
                 <H1> 
                     <li key={ count+1}>{item.name}                  
                        {openModel && <Film films={apiData[count]} click={item}/>}  
                     </li> 
                     <Button color="primary lg " onClick={                        
                             onclickhandler
                            
                       }>Detail </Button>
                 </H1>)
             }                               
             
        </ul> 
             
    </div>            
 )
}