import { useEffect, useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import { useLocation } from "react-router-dom";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductCard } from "../../components";
import {FilterBar} from "./components/FilterBar";

import { useFilter } from "../../context"
import { getProductList } from "../../services";


export const ProductsList = () => {

  const { products,initialProductList }=useFilter();
 const [errorMessage, setErrorMessage]=useState("")

  useTitle(" Explore eBooks Collection ")
  const [filter,setFilter]=useState(false);

  const search=useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");


  useEffect(()=>{
    async function fetchProducts()
    {
      try
      {const data = await  getProductList(searchTerm);
      initialProductList(data)
      setErrorMessage("");}
      catch(error){
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          
          });
      }
    }
    fetchProducts();
   
  },[searchTerm]);//eslint-disable-line
  
    return (
      <main>
          <section className="my-5">
            <div className="my-5 flex justify-between">
              <span  className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
              <span>
                <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                  <span onClick={()=>setFilter(!filter)} tooltip="filter" className="bi bi-funnel-fill text-2xl text-gray-700 dark:text-white"></span>
                </button>
              </span>            
            </div>    
  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {errorMessage }
              {products.map( (product)=>(
                <ProductCard key={product.id} product={product} />
              ))};
              

            </div>  
          </section>
          {filter&& <FilterBar setFilter={setFilter} />}
        </main> 
    )
  }