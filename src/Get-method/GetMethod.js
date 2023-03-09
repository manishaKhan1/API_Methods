import React, { useEffect, useState } from 'react'

export const GetMethod = () => {

    const [data, setData]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/posts").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])

    console.warn(data)
    
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
                data.map((item)=>
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                </tr>
                )
            }
        </table>
    </>
  )
}
