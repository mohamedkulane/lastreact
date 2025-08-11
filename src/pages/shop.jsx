import Productlists from "../components/ui/products"
import axios from "axios"
import { useEffect, useState } from "react"

function Shop(){
    const [data, setdata]=useState([])
    const [search,setsearch]=useState("")
    function handleread(){
        axios.get("https://fakestoreapi.com/products").then((reponse)=>{
            setdata(reponse.data)
        })
    }
    const filterData=data.filter((xog)=>{
        const searchData=xog.title.toLowerCase().includes(search.toLowerCase())
        return searchData
    })
    useEffect(()=>{
        handleread()
    },[0])
    return <div >
        <div className="flex gap-10 mx-28 mt-20 items-center">
            <input value={search} onChange={(e)=>setsearch(e.target.value)} className="w-72 h-12 bg-gray-400 text-white rounded-lg pl-3 text-3xl" type="text" />
            <div className="text-xl space-x-9">
                <input className="scale-110" type="radio" />All
                <input className="scale-110" type="radio" />electronics
                <input className="scale-110" type="radio" />jewelery
                <input className="scale-110" type="radio" />men's clothing
                <input className="scale-110" type="radio" />women's clothing

            </div>
        </div>


    <div className="grid grid-cols-4 ml-3">
     {
        filterData.map((items)=>{
            return <Productlists products={items}/>
        })
     }
     </div>
    </div>
}
export default Shop