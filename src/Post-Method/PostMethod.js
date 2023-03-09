import React, { useState } from 'react'

export const PostMethod = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");


    function saveNew() {
        let data = { id, name, details, price, quantity };

        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then((result) => {
                console.warn("result", result)
            })
        })
    }

    return (
        < div>
            <form>
                ID:
                <input type='number' name='id' value={id} onChange={(e) => { setId(e.target.value) }} ></input> <br></br>
                Name:
                <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} ></input> <br></br>
                Details:
                <input type='text' name='details' value={details} onChange={(e) => { setDetails(e.target.value) }} ></input> <br></br>
                Price:
                <input type='number' name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} ></input> <br></br>
                Quantity:
                <input type='number' name='quantity' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} ></input> <br></br>

                <button type='button' onClick={saveNew}>Save New</button>
            </form>
        </div>
    )
}
