import { DashboardEmpty } from "./components/DashboardEmpty";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DashboardCard } from "./components/DashboardCard";
import { useEffect, useState } from "react";
import { useTitle } from "../../Hooks/useTitle";
import { getUserOrders } from "../../services/dataService";
export const DashbaordPage = () => {
  useTitle("My DashBoard")
  const [orders,setOrders] = useState([]);
   
  useEffect( ()=>{
    
    async function fetchOrders()
    {
     try{const data = await getUserOrders();
      setOrders(data);}
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
    fetchOrders();
  },[])
    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>
        <section>
          { orders.length && orders.map( (order)=>(
            <DashboardCard key={order.id} order={order} />
          ))}
        </section>
        <section>
          { orders.length===0 && <DashboardEmpty/>}
        </section>
      </main>
    )
  }