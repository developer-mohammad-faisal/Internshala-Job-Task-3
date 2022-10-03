import React from 'react';

const CheckoutTable = ({product, restQty, setResQty}) => {
    const {img, name, price} = product
    const SubTotal = (+price) * (+restQty)
    return (
        <>
          <tr>
              <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squire ml-2 w-12 h-12">
                        <img src={img}  alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold ml-10">{name}</div>
                    </div>
                  </div>
              </td>
                <td > ${price}.00</td>
                <td className='flex space-x-4 mt-2 border rounded-3xl justify-center'> 
                    <button disabled={restQty === 1}
                    onClick={()=>setResQty(restQty - 1)}
                     className='mr-2 w-2'>-</button> 
                         {restQty} 
                     <button  
                     onClick={()=>setResQty(restQty + 1)}
                     className=''>+</button> 
                </td>
             <td className='text-[#898989] text-center'>${SubTotal}</td>
              </tr>
        </>
    );
};

export default CheckoutTable;