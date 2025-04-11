import React from 'react'

import './App.css'
import ListComponent from './components/ListComponent'
import Navbar from './components/Nav'
import useFetch from './components/useFetch'

function App() {
  const {datas, isPending, err, setData} = useFetch("http://jsonplaceholder.typicode.com/posts");
  

  //   const hasRun = useRef(false);

//   useEffect(() => {

//   if (hasRun.current) return;
//   hasRun.current = true;

//   const fetchData = async () => {
//     setTimeout(async () => {
//       try {
//         const res = await fetch("http://localhost:8000/blogs");
//         const data = await res.json();
//         setCounts(data);
//         setIsPending(false);
//       } catch (err) {
//         console.log(err);
//         setIsPending(false);
//       }
//     }, 1000);
//   };

//   fetchData();
// }, []);



//  useEffect(() => {
//     setTimeout(()=>{

//       fetch("http://localhost:8000/blogs")
//       .then(res=>{
//         return res.json()
//       })
//       .then(data=>{
//         return setCounts(data);
//       })
//       setIsPending(false)
//       .catch(err =>{
//         console.log(err)
//       });
        
//     }, 1000)
// }, []);



  return (
    <>
     <Navbar/>
     <div>
     <ListComponent datas={datas} isPending={isPending} err={err} setData={setData}/>
     </div>
      
    </>
  )
}

export default App
