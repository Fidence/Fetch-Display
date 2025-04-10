import {React }from 'react'

const ListComponent = ({datas, setData, isPending, err}) => {

  const handleDelete =(id)=>{
  const newDelete = datas.filter(data => data.id !==id);
  setData(newDelete)
}




  return (
    <div className='wrapper'>
      {err && <div>{err}</div>}
      {isPending && <div>Loading...</div>}
        <h1 className='b-title'>Posts</h1>
        <div className='blog'>
        {datas.map((data)=>(
        <div className="blog-wrap" key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <button onClick={()=>handleDelete(data.id)}>Delete</button>
        </div>
        ))}
    </div>
    </div>
  )
}
export default ListComponent