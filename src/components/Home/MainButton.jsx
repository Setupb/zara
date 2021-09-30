import React from 'react';
import { Context } from '../../Context';
import { useContext, useState  } from 'react';
const MainButton = () => {
    const [btn,setBtn]=useState('block');
    const {change,setChange}=useContext(Context);
    const styles={
        button:
        {
            display:btn
        }
    }
   return (
       <button onClick={()=>{setChange('flex');setBtn('none')}} style={styles.button} className="main__button">View more</button>
   );
};


export default MainButton;