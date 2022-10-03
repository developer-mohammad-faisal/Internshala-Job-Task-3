import React, { useState } from 'react';
import cartImg from '../../assets/shopping-cart.png';

const Product = ({product, cart, setCart}) => {
    const {name, color, stock, price, img} = product;
    const [qty , setQty] = useState(1);
   

    const handleOnChange = (e) => {
      if(e.target.value > 0){
         setQty(e.target.value)
      }
    };

    const handleChecked = (e) => {
      const {p, checked} = e.target;
      if(checked){
        const cartProduct = product ? {...product, p, isChecked : checked,} : product;
        const arr = []
        arr.push(...cart, cartProduct)
        setCart(arr)
      }

    }


    return (
        <>
            <tr>
              <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squire ml-2 w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold ml-10">{name}</div>
                    </div>
                  </div>
              </td>
                <td className='text-info font-bold'> <u>{color}</u> </td>
                <td>
                 { stock === 'In stock' ?  <p className='text-success'>{stock}</p> :  <p className='text-error'>{stock}</p>}
                </td>
                <td className='text-[#898989]'>${price}</td>
                <td className='ml-20'>
                  <input readOnly value={qty} onChange={(e)=> handleOnChange(e)} className='w-16 border bg-[#f2efef] pt-1.5 pl-5' type="number"></input>
                  <button className='w-16 border ml-2 bg-[#eae3e3] pb-1.5'> <img className='w-6 mx-auto' src={cartImg}  alt=""/>  </button>
                  <label>
                    {
                    stock === 'In stock' ? 
                    <input
                     p={product}
                      onChange={handleChecked} 
                      checked={product?.isChecked}
                      type="checkbox" className="checkbox ml-2" 
                      /> 
                    : 
                     <input type="checkbox" className="checkbox ml-2" disabled/>}
                    
                  </label>
                </td>
              </tr>
        </>
    );
};

export default Product;