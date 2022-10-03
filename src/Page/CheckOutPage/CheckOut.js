import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutTable from './CheckoutTable';

const CheckOut = ({cart}) => {
    const [restQty, setResQty] = useState(1)

    
    let subTotal = 0;

    for(const product of cart){
      const total = subTotal + product.price;
      subTotal = total* restQty

    }
    return (
       <>
       <h1 className='font-bold text-center'>My Order Summery</h1>
        <div id='checkout' className='flex justify-center mb-12 mt-4'>   
            <div className='w-7/12'>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead className='h-'>
                  <tr className=''>
                    <th className='flex'>
                    <p className='mx-4'>product</p> 
                    </th>
                    <th>Price</th> 
                    <th>Quantity</th>
                    <th>Subtotal</th>
          
                  </tr>
                </thead>
               
                <tbody>
                    {
                        cart.map(product => <CheckoutTable
                             key={product.id} product={product}
                             restQty={restQty} 
                             setResQty={setResQty}></CheckoutTable>)
                    }
                </tbody>  
              </table> 

            </div>
            <div className=' w-3/12 ml-12 border rounded'>
                <div className='p-4'>
                <div className='ml-4 font-bold'>  Card Totals </div>
                <div className='mt-3 flex space-x-52 justify-center'>
                    <p className='font-bold'>Subtotal</p>
                    <p className='text-info'>${subTotal}</p>
                </div>
                <div className="divider"></div> 
                <div className='flex space-x-56 justify-center'>
                    <p className='font-bold'>Total</p>
                    <p className='text-info'>${subTotal}</p>
                </div>
                <Link to='/checkout'> <button className='btn btn-primary mt-4 w-11/12 ml-4 rounded-3xl'>Proceed To Checkout</button></Link>
                </div>
              
            </div>
        </div>
       </>
    );
};

export default CheckOut;