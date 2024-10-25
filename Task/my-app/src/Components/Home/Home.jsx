import React, { useEffect, useState } from 'react';
import axiso from "axios";
import Loading from "../Loading/Loading";
const Home = (Home) => {
    const [Products, setProducts] = useState(null);
    const [loading, setloading] = useState(null);
    async function getProducts() {
        try {
            setloading(true);
            let { data } = await axiso.get("https://fakestoreapi.com/products");
            setProducts(data);   
            console.log(data);
             
        } catch (error) {
            console.log(error);
            alert('Error');  
        }
        setloading(false);

    }
    useEffect(() => {
      getProducts();
    }, [])
    return (
        <>
        { loading ?  
            < Loading /> 
            : ""  
        }
        <div className="container my-2 ">
        <div >
        {
            Products ? 
            <div className="row d-flex justify-content-sm-center align-items-center">{Products.map(function (product,index) {
                return<>
                     <div className="col-md-3 my-2">
                        <div className="card p-1" style={{ height: "550px" , weight: "100px"}}>
                             <img src={product.image} className="card-img-top w-100" style={{ height: "350px" , weight: "400px"}} alt="..." />
                            <div className="card-body">
                                  <h5 className="card-title">{product.title.split(' ').splice(0,3).join(' ')}</h5>
                                  <p className="card-text">{product.description.split(' ').splice(0,6).join(' ')}</p>
                                  <p className="card-text">{product.price} <strong>L.E</strong></p>
                                 
                                  <div>
                                    <i className="fa-solid fa-star mx-1" style={{ color: "#FFD43B" }}></i>
                                    {product.rating.rate}
                                  </div>
    
                            </div>
                        </div>
                     </div>
                    </>

            })}</div> : <div className='vh-100'></div>
        }
    </div>
</div>

        </>
    );
}

export default Home;