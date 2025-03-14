import React, { useEffect, useState } from 'react'
import Home from './components/home/Home'

const App = () => {
  const [data,setData]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState("all");
  const [cartItems,setCartItems]=useState([]);
  console.log(cartItems);
  
  
  useEffect(()=>{
    fetch("product.json")
    .then(res=>res.json())
    .then(data=>{
      setData(data);
    })
  },[])

  const filterCate=new Set(data.map((item)=>item.category));
  const selectedCat=["all",...filterCate];

  const filterCategory= selectedCategory === "all" ? data : data.filter((item)=>item.category ===selectedCategory);

  const handlAddToCart=item=>{
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }
  const totalpriceCount=cartItems.reduce((acc,item)=>acc+item.price,0)
  const totalprice=totalpriceCount.toFixed(2)
  console.log(totalprice);

  
  
  return (
    <div className=''>
      <Home selectedCat={selectedCat} setSelectedCategory={setSelectedCategory} filterCategory={filterCategory} handlAddToCart={handlAddToCart} cartItems={cartItems} totalprice={totalprice}/>
    </div>
  )
}

export default App