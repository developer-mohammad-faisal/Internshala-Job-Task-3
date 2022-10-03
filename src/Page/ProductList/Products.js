import React, { useEffect, useState } from 'react';
import Product from './Product';
import resetArrow from '../../assets/undo-arrow.png';
import CheckOut from '../CheckOutPage/CheckOut';


const Products = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [cart, setCart] = useState([])

    const loadProducts = () => {
      const allProduct = category
      setProducts(allProduct)
    }
    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setCategory(data)
        setProducts(data)
      })
    },[]);

    const handleFilter = (e) => {

      if(e.target.value){
          const match = category.filter(c => c.category.includes(e.target.value));
            setProducts(match)
      }
      else{
             loadProducts()
      }
    
    }

    const handleFilterClr = () =>{
           loadProducts()
            
            
    };

    const handleSearch = (e) => {
      console.log();
      if(e.target.value){
        const match = products.filter(p => p.name.includes(e.target.value));
        setProducts(match)
      }
      else{
       loadProducts()
      }
    }

    return (
        <>
         <div className="overflow-x-auto w-4/5 mt-12 mx-auto mb-22">
          <div className='flex place-content-between'>
          <div className='flex'>
          <select onChange={(e) => handleFilter(e)} className=" bg-white border border-black rounded w-32 ml-12 mb-4 mt-2">
            <option disabled selected>category</option>
              {category.map(p => <option key={p.id} >{p.category}</option>)}
          </select>
          <div onClick={handleFilterClr} className='flex ml-3'>
          <img className='h-[18px] mt-2.5 ml-4' src={resetArrow} alt="" /> 
           <p className='text-xl font-bold mt-1.5 ml-2 text-info'>Reset</p>
          </div>
        
          </div>
        
            <div className='flex'>
            <div className="form-control mr-12">
            <input  onChange={(e) => handleSearch(e)}  type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <a href="#checkout" className='btn btn-info mr-12'>ADD To Cart</a>
            </div>
          </div>
              <div className="divider"></div> 
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead className='h-'>
                <tr className=''>
                  <th className='flex'>
                  <p className='mx-4'>Image</p>
                  <p className='ml-12'>Name</p>  
                  </th>
        
                  <th>color</th>
                  <th>Stock</th> 
                  <th>price</th>
                  <th>Buy</th>
        
                </tr>
              </thead>
             
              <tbody>
                {/* <!-- row 1 --> */}
                {
                  
                  products.map(product => <Product
                     key={product.id} product={product}
                     cart={cart}
                     setCart={setCart}></Product>)
                }
    
              </tbody>  
            </table> 
            <div className="divider"></div> 
              
          </div>
          <CheckOut cart={cart}></CheckOut>
          </>
    );
};

export default Products;