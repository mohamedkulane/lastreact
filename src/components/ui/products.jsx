function Productlists({products}){
    return<>
        <div className="mt-20 md:w-96   lg:w-72 w-[370px] h-[410px] p-2 rounded-lg border-2 border-zinc-400 ">
            <img className="w-80 h-60" src={products.image} alt="" />
            <div className="text-center font-semibold px-3 mt-4 ">
                <h1 className="w-[200px] md:w-[300px] text-[14px] md:text-[16px] lg:text-[10px]">{products.title}</h1>
                <h1 className="text-2xl">${products.price}</h1>
            </div>
            <button className="bg-blue-500 text-white w-full py-2 mt-4 text-3xl  rounded-lg">Add Cart</button>
         </div>
    
    
    
    </>
}
export default Productlists