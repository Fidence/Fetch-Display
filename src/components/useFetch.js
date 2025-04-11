import { useState, useEffect, } from 'react'
const useFetch = (url) => {

  const [datas, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [err, setErr] = useState()

  useEffect(() => {
  const fetchData = async () => {
    setTimeout(async () => {
      try {
        const res = await fetch(url);
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
}, [url]); 



  return  {datas, isPending, err, setData}
}

export default useFetch