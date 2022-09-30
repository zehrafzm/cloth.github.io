import Box from '@mui/material/Box';
import { useEffect } from 'react';

export default function ShopBag(e){
    
  const product= localStorage.getItem('productUrl')
  const price = localStorage.getItem('totalPrice')
  useEffect(()=>{
    var list = document.getElementById('shopBagDiv')
    
    list += "<img lassName='bagProductImage' src={product} />" + "<p>"+ "değişti"
    
  }
  
  )
    return(
        <div id='shopBagDiv'>
          <p>shopbag</p>
          <Box className='bagProduct' >
            <img className='bagProductImage' src={product} /> 
            
          </Box>
          <Box className='bagProduct' >
            <img className='bagProductImage' src={product} /> 
          </Box>
          <Box className='bagProduct' >
          <img className='bagProductImage' src={product} /> 
          </Box>
          total price: {price}
        </div>
    )

}