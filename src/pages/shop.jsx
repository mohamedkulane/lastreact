import Productlists from "../components/ui/products"
import axios from "axios"
import { useEffect, useState } from "react"

function Shop(){
    const [data, setdata]=useState([])
    const [search,setsearch]=useState("")
    const [category,setCategory]=useState("")
    function handleread(){
        axios.get("https://fakestoreapi.com/products").then((reponse)=>{
            setdata(reponse.data)
        })
    }
    const filterData=data.filter((xog)=>{
        const searchData=xog.title.toLowerCase().includes(search.toLowerCase()) || xog.category.toLowerCase().includes(search.toLowerCase()) 
        const selectedCategory=category? xog.category===category:true
        return searchData && selectedCategory 
    })
    useEffect(()=>{
        handleread()
    },[])
    return <div >
        <div className="flex gap-10 mx-28 mt-20 items-center">
            <input value={search} onChange={(e)=>setsearch(e.target.value)}  className="w-72 h-12 bg-primarycolor text-white rounded-lg pl-3 text-3xl" type="text" />
            <div className="text-xl space-x-10">
                <input name="category" value={""} onChange={(e)=>setCategory("")} className="scale-110" type="radio" />All
                <input name="category" value={"electronics"} onChange={(e)=>setCategory("electronics")} className="scale-110" type="radio" />electronics
                <input name="category" value={"jewelery"} onChange={(e)=>setCategory("jewelery")} className="scale-110" type="radio" />jewelery
                <input name="category" value={"men's clothing"} onChange={(e)=>setCategory("men's clothing")} className="scale-110" type="radio" />men's clothing
                <input name="category" value={"women's clothing"} onChange={(e)=>setCategory("women's clothing")} className="scale-110" type="radio" />women's clothing

            </div>
        </div>


    <div className="grid grid-cols-4 ml-3">
     {
      filterData.length>0?  filterData.map((items)=>{
            return <Productlists products={items}/>
        }):
        <p className="text-5xl  mt-10 font-semibold">ther's no data</p>

     }
     </div>
    </div>
}
export default Shop