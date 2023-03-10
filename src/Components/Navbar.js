import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
const [searchuser,setsearchuser]=useState("")
const [searchuserresult,setsearchuserresult]=useState([])
const userid="6408dcecf6ef6c6d81ee9916"
const handlesearchuser=async(e)=>{
    e.preventDefault()
    
    const res=await axios.get("http://localhost:3330/api/user/search/"+searchuser)
    if(res.status===200){
        setsearchuserresult(res.data)
        setsearchuser("");
        console.log(res.data)
        
    }
    else{
      console.log("no such user found")
    }
}
const handlecutsearch=()=>{
    setsearchuserresult([])
}
  return (
    <div className="sticky top-0 z-10 "> 
        
<nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container  flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Blog</span>
  </Link>
  <div className="flex  w-1/3 md:order-1">
  
<form className="relative w-full hidden md:block " onSubmit={handlesearchuser}>    
    <div className="flex ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User Only by their firstname..."  onChange={(e)=>setsearchuser(e.target.value)} value={searchuser} required/>
        <button type="submit" className="text-white  ml-1 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


    <button data-collapse-toggle="navbar-search" type="button" className="absolute right-0 top-0 inline-flex items-center p-2 text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      
    <form className="relative mt-3 md:hidden" onSubmit={handlesearchuser}>   
    <div className="flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User Only by their firstname ..." onChange={(e)=>setsearchuser(e.target.value)} value={searchuser}  required/>
        <button type="submit" className="text-white ml-1 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='absolute top-16 w-full'>
  <div className='flex justify-center w-full'>
  {searchuserresult.length>0?<div className='w-96 p-1 overflow-auto ...  absolute bg-white border border-gray-200 h-48 m-1 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
    <div className='flex flex-row-reverse'>
    <button type="button" onClick={handlecutsearch} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 w-10 h-10 font-semibold rounded-full text-lg  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">X</button>
      </div>
   
     
  {searchuserresult.map((x)=>(<Link to={`/profile/${x._id}/${userid}`}><div className="flex m-2">
            
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={x.picturePath} alt="Bordered avatar"/>
            <h1 className='text-xl font-semibold mx-2 my-1'>{x.firstname+" "+x.lastname}</h1>
            
                    </div></Link>))}</div>:""


  }
</div>

</div>
  
    </div>
  )
}

export default Navbar