import { useSelector } from "react-redux"

function Cartpage(){
    const items=useSelector((e)=> e.cart.items)
    return <>
    {
        items.map((data) => {

            return <div className="mt-40 ml-4">
                <div className="w-[450px] h-48 bg-rose-600 text-white py-2 pl-4 rounded-lg">
                    <div className="flex gap-6">
                    <img className="w-20 h-20 rounded-lg" src={data.image} alt="" />
                    <div>
                        <h1 className="text-2xl font-semibold">{data.title}</h1>
                    </div>
                    </div>
                    <div className="flex justify-between px-3">
                    <h1 className="font-semibold text-3xl">${data.price}</h1>
                    <button className="bg-white text-red-500 px-7 py-3 rounded-md">Remove</button>
                    </div>
                </div>
            </div>
    })
}
    
    </>
}
export default Cartpage