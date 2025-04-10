import { useState, useEffect, } from 'react'

import './App.css'
import ListComponent from './components/ListComponent'
import Navbar from './components/Nav'

function App() {
  
  const [datas, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [err, setErr] = useState()
 

  useEffect(() => {
  const fetchData = async () => {
    setTimeout(async () => {
      try {
        const res = await fetch("http://jsonplaceholder.typicode.com/posts");
        if(!res.ok){
          throw Error("couldn't catch data")
        }         
        const data = await res.json();
        setData(data);
        setIsPending(false);
        
      } catch (err) {
        setErr(err.message);
        setIsPending(false);
      }
    }, 1000);
  };

  fetchData();
}, []);


  return (
    <>
     <Navbar/>
     <div>
     <ListComponent datas={datas} setData={setData} isPending={isPending} err={err}/>
     </div>
      
    </>
  )
}

export default App
