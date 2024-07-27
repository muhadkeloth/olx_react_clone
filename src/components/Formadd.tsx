// import { useState } from 'react'
// import Navbar from './Navbar'
// import { useNavigate } from 'react-router-dom'
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const Formadd:React.FC = () => {

//   const [search,setSearch] = useState<string>("")
  
//   const navigate=useNavigate()
//   const[name,setName]=useState<string>('')
//   const[category,setCategory]=useState<string>('')
//   const[price,setPrice]=useState<string>('')
//   const[image,setImage]=useState<File | null>(null)


//   const handleSubmit=async (e: FormEvent)=>{
//     const storage = getStorage();
//     const storageRef = ref(storage, `images/${image.name}`);
//     uploadBytes(storageRef, image).then(async(snapshot) => {
//       console.log('Uploaded a file!');
//       const url = await getDownloadURL(storageRef)
//       console.log(url)
//       console.log('3')

//       const db = getFirestore();
//       try {
//          addDoc(collection(db, "products"), {
//            name,
//            category,
//            price,
//            url,
//            userId:user.uid,
//            createdAt: data.toDateString()
  
//         }).then(()=>{
//            navigate("/")
//         })
        
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }

//     }).catch((error) => {
//       console.log(error, 'error in the uploadBytes')
//   })
//   console.log('2')
//   }



//   return (
//     <div>
//       <Navbar setSearch={setSearch} />
      
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
//         <div className="centerDiv">
//         <div className="mb-4">
//             <label  htmlFor="fname">Name</label>
//             <br />
//             <input
//               className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               id="fname"
//               name="Name"
              // value={name}
              // onBlur={validateName}
          //     onChange={(e)=>setName(e.target.value)}
          //     defaultValue="John"
          //   />
            
          // </div>

            {/* <div style={{color:'red',fontSize:'.9vw'}}>{nameErr}</div> */}
            {/* <br />
            <div className="mb-4">
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="fname"
              name="category"
              value={category} */}
              // onBlur={validateCategory}
              // onChange={(e)=>{setCategory(e.target.value);validateCategory('')}}
            //   defaultValue="John"
            // />
            // </div>
            // <br />
            // <div className="mb-4">
            // <label htmlFor="fname">Price</label>
            // <br />
            // <input value={price} 
            // onBlur={validatePrice} 
      //        onChange={(e)=>setPrice(e.target.value)} 
      //          className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      //          type="number" id="fname" name="Price" />
      //      </div>
      //       <br />
      //     <br />
      //     <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image) : ""}></img>
      //       <br />
      //       <input   className='inputImage'  type="file"  onChange={(e) => setImage(e.target.files[0])} />
      //       <br />
      //       <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
      //   </div>
      // </div>
      // </div>


    
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        <form >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              name="image"
              onChange={(e)=>{
                setImage(e.target.files[0])
              }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
          </div>
          <div>
              <img src={image? URL.createObjectURL} width="200px" height="200px" alt="" />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
            <button
              type="reset"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div> */}


    {/* </div>
  )
}

export default Formadd */}



// ********************************















import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../firevase/setup';
// import { getAuth } from 'firebase/auth';

const Formadd: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.error('1');
    if (!image) {
      console.error('No image selected');
      return;
    }
    console.error('2');
    // const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    try {
      console.error('3');
      const snapshot = await uploadBytes(storageRef, image);
      console.error('3.5');
      console.log('Uploaded a file!', snapshot);
      const url = await getDownloadURL(storageRef);
      console.log(url);

      // const db = getFirestore();

      // const auth = getAuth();
      //const user = { uid: 'user123' }; // Replace this with actual user data
      // const user = auth.currentUser;


      
      const date = new Date();

  

      const productData = {
        name: name.toString(), // Ensure name is a string
        category: category.toString(), // Ensure category is a string
        price: price.toString(), // Ensure price is a string
        imageUrl: url,
        createdAt: date.toISOString(),
      };
      


      try{
        const docRef = await addDoc(collection(db, 'products'), productData);
        console.log('Document written with ID:', docRef.id);

      }catch(error){
      console.log('Error adding document:', error)
      }



      console.error('4');
      // await addDoc(collection(db, 'products'), {
      //   name,
      //   category,
      //   price,
      //   url,
      //   createdAt: date.toISOString(),
      // });
      console.error('5');
      
      navigate('/');
      console.error('6');
    } catch (error) {

      console.error('hello');
      console.error('Error uploading file or adding document:', error);
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
          <div className="centerDiv">
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <br />
              <input
                className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category">Category</label>
              <br />
              <input
                className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price">Price</label>
              <br />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="price"
                name="price"
                required
              />
            </div>
            <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} />
            <br />
            <input className="inputImage" type="file" onChange={handleImageChange} />
            <br />
            <div className="flex items-center mt-2 justify-between">
            <button onClick={handleSubmit}  className="uploadBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Upload and Submit
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Formadd;
