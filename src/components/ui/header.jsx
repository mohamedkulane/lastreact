import { Link } from "react-router-dom"

function Header(){
    return<>
    <div className="flex justify-between px-20 py-2.5 items-center bg-primarycolor text-orange-100">
        <h1 className="text-4xl font-semibold">EStore</h1>
        <ul className="flex gap-10 text-2xl font-semibold">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
        </ul>
    </div>
    </>
}
export default Header