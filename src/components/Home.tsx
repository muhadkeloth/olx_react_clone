import { Link } from "react-router-dom"
import ProductList from "./ProductList"

type productsProp = {
    products:any,
    search:any,
    menu:any
}



const Home = (props:productsProp) => {


  return (
    <div className="grid grid-cols-4 p-5">
     
      <ProductList />
      
         {props?.products?.filter((data:any)=> data?.title?.toLowerCase().includes(props?.search ? props?.search.toLowerCase() : props?.menu.toLowerCase() )).map((data:any)=>{
        return  <Link to="/details" state={{data:data}} key={data.id}><div className="border border-spacing-1 p-2 ml-3 mt-3">
                <img src={data?.image} className="w-60 h-48" />
                <h1 className="font-bold text-xl">$ {data?.price}</h1>
                <h1>{data?.title}</h1>
                <h1>{data?.category}</h1>
            </div></Link>
      })}  
    </div>
  )
}

export default Home