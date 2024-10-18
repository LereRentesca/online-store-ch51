import QuantityPicker from "./quantityPicker";
import './styles/product.css';

function Product(props){
    function add(){
        console.log("adding to cart");
    }

    return(
        <div className="product">
            <img src={"./img/"+props.data.image} alt="" />
            {/* <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg" alt="" /> */}
            <h3>{props.data.title}</h3>
            <span>{"ID: " + props.data._id}</span>
            <br/> 
            <div className="product-price">
                <label>$total</label>
                <label>${props.data.price}</label>
            </div>

            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-success" onClick={add}>Add</button> 
        </div>
    );
}

export default Product;