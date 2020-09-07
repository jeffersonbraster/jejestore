import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen (props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    console.log(product);
    return (
    <div>
        <div className="back-to-result">
        <Link to="/">Voltar</Link>
        </div>
        <div className="details">
        <div className="details-image">
            <img src={product.image} alt="product" ></img>
        </div>
        <div className="details-info">
            <ul>
            <li>
                <h4>{product.name}</h4>
            </li>
            <li>
                {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
                Valor: <b>R${product.price}</b>
            </li>
            <li>
                Descrição:
                <div>
                {product.description}
                </div>
            </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
            <li>
                Preço: {product.price}
            </li>
            <li>
                Status: {product.status}
            </li>
            <li>
                Quant: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
            </li>
            <li>
                <button className="button primary" >Add ao carrinho</button>
            </li>
            </ul>
        </div>

        </div>

    </div>
    )
}

export default ProductScreen;