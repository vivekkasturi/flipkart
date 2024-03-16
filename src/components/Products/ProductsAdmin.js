import { Button } from "bootstrap"
import { useEffect, useState } from "react"

export default function ProductsAdmin() {

    const [apiProductData, setApiProductData] = useState({ 
        "title": "",
        "price": "",
        "description": "",
        "category": "",
        "image": "",
        "rating": ""
        })
    const Inputdata = () => {

    // alert("your api data is submitted")
    }

const handleChange = (e) =>{

    //destruturing data
    const { name1,value } = e.target
   //{[key] = value};
    setApiProductData({...apiProductData,[name1]:value});
 console.log("data", apiProductData);

}

    return (


        <div className="ProductsAdmin">
            <h2>ProductsAdmin Page</h2>

            <form onSubmit={Inputdata()}>
            <label>title</label>
            <input type="text" placeholder="Producttitle" name="title" onChange={(e)=>handleChange(e)} /><br /><br />
            <label>price</label>
            <input type="number" placeholder="Producprice" name="price"  onChange={(e)=>handleChange(e)} /><br /><br />
            <label>description</label>
            <input type="text" placeholder="Productdescription" name="description" onChange={(e)=>handleChange(e)} /><br /><br />
            <label>category</label>
            <input type="text" placeholder="Productcategory" name="category" onChange={(e)=>handleChange(e)} /><br /><br />
            <label>image</label>
            <input type="text" placeholder="Productimage" name="image" onChange={(e)=>handleChange(e)}/><br /><br />
            <label>rating</label>
            <input type="range" placeholder="Productrating" min="1" max="5" name="rating" onChange={(e)=>handleChange(e)}/><br /><br />

            <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
           
        </div>
    )
}