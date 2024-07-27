import { useLocation } from "react-router-dom"
import Footer from "./Footer";
import Navbar from "./Navbar";


const Details = () => {

    const location = useLocation();


  return (
    <div>
      <Navbar setSearch={""} />
        <div className="flex p-4">

        <img className="w-1/2 h-auto object-cover" src={location?.state?.data?.image}  />
        <div className="w-1/2 pl-4 mt-10" >
            <h1 className="font-bold text-3xl">$ {location?.state?.data?.price}</h1>
            <h1 className="mt-5"><span className="font-semibold ">Category</span> {location?.state?.data?.category}</h1>
            <h1 className="mt-5"><span className="font-semibold ">Title</span> {location?.state?.data?.title}</h1>
            <h1 className="mt-5"><span className="font-semibold ">Description</span> {location?.state?.data?.description}</h1>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Details