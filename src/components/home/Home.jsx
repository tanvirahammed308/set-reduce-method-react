import React from 'react'

const Home = ({selectedCat,setSelectedCategory,filterCategory,handlAddToCart,cartItems,totalprice}) => {
  console.log('j',cartItems);
  return (
    <div>
        <div className='flex justify-center my-5 gap-5 '>
        
           {
            selectedCat.map((item)=><button className="btn btn-outline btn-primary" onClick={()=>setSelectedCategory(item)}>{item}</button>)
           }
        </div>
        <div className='flex gap-10 w-full  mx-10'>
        <div className='grid grid-cols-2 gap-10 '>
            {
                filterCategory.map((item)=>(
                    <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" className='w-24'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <h2 className="card-title text-red-600">{item.category}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary capitalize" onClick={()=>handlAddToCart(item)}>Add to cart</button>
    </div>
  </div>
</div>
                ))
            }
        </div>
        <div className='shadow-2xl  '>
          <div className='w-[350px] absolute right-4 border border-blue-600 px-3 py-2'>
            <div>{
              cartItems.map((item)=><div className='shadow-2xl'>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <p>{item.description}</p>
              </div>)
              
              
              }
              
              
            </div>
            <div className='border border-t-2 my-5'>

            </div>
            <div>
              total price:{totalprice}
            </div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Home