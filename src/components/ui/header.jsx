import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header(){
    const items=useSelector((e)=> e.cart.items)
    console.log(items)
    return<>
    <div className="flex justify-between px-20 py-2.5 items-center bg-primarycolor text-orange-100">
        <h1 className="text-4xl font-semibold">EStore</h1>
        <div className="flex gap-10 items-center">
        <ul className="flex gap-10 text-2xl font-semibold">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
        </ul>
        <div className="relative">
       <Link to="/cartpage"> <i className="fa-solid fa-shopping-cart text-3xl "></i><span className="absolute -right-9 -top-3 text-2xl font-semibold">({items.length})</span></Link>
        </div>
        </div>
    </div>
    </>
}
export default Header