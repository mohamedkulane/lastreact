import { addtoCart } from "../../redux/reducer/cart"
import { useDispatch } from "react-redux"

function Productlists({products}){
    const dispatch=useDispatch()
    const handlePost=()=>{
        dispatch(addtoCart(products))
    }
    return<>
        <div className="mt-20 md:w-96   lg:w-72 w-[370px] h-[410px] p-2 rounded-lg border-2 border-zinc-400 ">
            <img className="w-80 h-60" src={products.image} alt="" />
            <div className="text-center font-semibold  mt-4 ">
                <h1 className="w-[250px] ml-3 text-xs">{products.title}</h1>
                <h1 className="text-2xl ">${products.price}</h1>
            </div>
            <button onClick={handlePost} className="bg-blue-500 text-white w-full py-2 mt-3 text-3xl  rounded-lg">Add Cart</button>
         </div>
    
    
    
    </>
}
export default Productlists