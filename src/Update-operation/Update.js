import React, { useEffect, useState } from 'react'

export const Update = () => {

    const [data, setData] = useState([])


    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");


    const [userId, setUserId]=useState(null)

    useEffect(() => {
        getFunction()


    }, [])

    function getFunction() {

        fetch("http://localhost:3001/posts").then((result) => {
            result.json().then((resp) => {
                setData(resp)
                // setId(resp[0].id)
                // setName(resp[0].name)
                
                // setPrice(resp[0].price)
                // setQuantity(resp[0].quantity)
                // setUserId(resp[0].id)
            })
        })
    }

    console.warn(data)

    function deleteItems(id) {


        fetch(`http://localhost:3001/posts/${id}`, {
            method: "DELETE",
        }).then((result) => {
            //convert into json
            result.json().then((resp) => {
                console.log(resp);

                getFunction()
            })
        })
    }

    function selectUser(id){
            console.warn(data[id-2]);
            let item=data[id-2]
                setId(item.id)
                setName(item.name)
                setPrice(item.price)
                setQuantity(item.quantity)
                // setUserId(item.id)
    }


    function updateUser(){
            console.warn(userId, name, price,quantity);
            let item={id, name, price,quantity}

            fetch(`http://localhost:3001/posts/${id}`, {
            method: "PUT",
            headers:{
                'Accept':"application/json",
                'Content-Type':"application/json"
            },
            body:JSON.stringify(item)
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
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => deleteItems(item.id)}>Delete</button></td>
                            <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </table>

            < div>
                <form>
                    < div>
                    <form>
                ID:
                <input type='number' name='id' value={id} onChange={(e) => { setId(e.target.value) }} ></input> <br></br>
                Name:
                <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} ></input> <br></br>
                
                Price:
                <input type='number' name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} ></input> <br></br>
                Quantity:
                <input type='number' name='quantity' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} ></input> <br></br>

                <button type='button' onClick={updateUser} >Update now</button>
            </form>
                    </div>
                </form>
            </div>
        </>
    )
}




