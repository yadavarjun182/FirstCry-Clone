
import React, { useState } from "react";

let info = {
    title:'',
    description:'',
    mrp:'',
    discount:'',
    brand:'',
    category:'',
    gender:'',
    quantity:'',
    rating:'',
    thumbnail:'',
    images:'',
    specification:''
}

export const Productform = () => {
  const [product,setProduct] = useState(info)
  const [data,setData] = useState([])

  const addtoDBS = (payload) => {

    fetch('https://lonely-long-johns-fish.cyclic.app/products/add',{
        method:'POST',
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(payload)
    }).then(res => res.json())
    .then(res =>console.log(res))
    .catch(err => console.log(err))
}


  const handelchange = (e) => {
    let {name,value,type} = e.target;
    let valpro = type === "number" ? Number(value) : value;
    setProduct({...product,[name]:valpro})
  }

  const submitData = (event) => {
    event.preventDefault()
    addtoDBS(product)
    setProduct(info)
  }


    return(
        <div>
            <form onSubmit={submitData} style={{backgroundColor:'gray',padding:'15px',margin:'auto',width:'380px',marginTop:'50px'}} >
                <input name="title" value={product.title} placeholder="title" onChange={handelchange} type="text" /><br />
                <input name="description" value={product.description} placeholder="description----" onChange={handelchange} type="text" /><br />
                <input name="mrp" value={product.mrp} placeholder="mrp" onChange={handelchange} type="text" /><br />
                <input name="discount" value={product.discount} placeholder="discount" onChange={handelchange} type="number" /><br />
                <input name="brand" value={product.brand} placeholder="brand" onChange={handelchange} type="text" /><br />
                <input name="category" value={product.category} placeholder="category" onChange={handelchange} type="text" /><br />
                <input name="gender" value={product.gender} placeholder="gender" onChange={handelchange} type="text" /><br />
                <input name="quantity" value={product.quantity} placeholder="quantity" onChange={handelchange} type="name" /><br />
                <input name="rating" value={product.rating} placeholder="rating" onChange={handelchange} type="number" /><br />
                <input name="thumbnail" value={product.thumbnail} placeholder="thumbnail" onChange={handelchange} type="text" /><br />
                <input name="specification" value={product.specification} placeholder="specification" onChange={handelchange} type="text" /><br />
                <input type="submit" style={{backgroundColor:'red'}}/>
            </form>
        </div>
    )
}