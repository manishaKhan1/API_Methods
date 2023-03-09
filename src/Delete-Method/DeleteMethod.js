import React, { useEffect, useState } from 'react'

export const DeleteMethod = () => {

    const [data, setData]=useState([])

    useEffect(()=>{
        getFunction()
        
        
    },[])

    function getFunction(){
        
        fetch("http://localhost:3001/posts").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    }

    console.warn(data)

    function deleteItems(id){
        
        
        fetch(`http://localhost:3001/posts/${id}`,{
            method: "DELETE",
        }).then((result) => {
          //convert into json
          result.json().then((resp) => {
              console.log(resp);
                
                getFunction()
            })
        })
    }
    
  return (
    <>
        <table border='1'>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>QUANTITY</td>
                <td>PRICE</td>
            </tr>
            {
                data.map((item, i)=>
                <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>deleteItems(item.id)}>Delete</button></td>
                </tr>
                )
            }
        </table>
    </>
  )
}


