import React from "react";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data";
import { Link, useNavigate, useParams } from 'react-router-dom';
function ProductScreen(props) {
  const params = useParams();
  const { id: productId } = params.id;
  
  //console.log(props.match.params.id);
  const product = data.products.find((x) => Number(x._id) === productId);
  
  /*let {_id} = props.match.params
  const product = data.products.find(product => product._id === _id)*/
  if(!product){
    return <div> Product Not Found!</div>
  }
  return (
    
  <div>
    <div className="row">
      <div className="col-2">
        <img className="large" src={product.image} alt={product.name}></img>
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating 
              rating={product.rating} 
              numReviews={product.numReviews}>
            </Rating>
          </li>
          <li>Price:${product.price}</li>
          <li>Description:
            <p>{product.description}</p>
          </li>
        </ul>
        
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">${product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>
                  {product.countInStock>0? (<span className="success">In stock</span>)
                  :
                  (<span className="error">Unavailable</span>)}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>);
}
export default ProductScreen;
