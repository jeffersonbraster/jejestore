import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { saveProduct } from '../actions/productActions';


function ProductsScreen (props) {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();

    

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));

    }  

    
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Criar novo produto</h2>
                </li>
                <li>
                    {loadingSave && <div>Carregando...</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="price">Valor</label>
                    <input type="number" id="price" name="price" onChange={(e) => setPrice(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="brand">Marca</label>
                    <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="description">Descrição</label>
                    <textarea type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </li>
                <li>
                    <label htmlFor="category">Categoria</label>
                    <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="countInStock">Quant estoque</label>
                    <input type="text" id="countInStock" name="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="image">Imagem</label>
                    <input type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)} />
                </li>
                <li>
                    <button type="submit" className="button primary">Criar</button>
                </li>
                
            </ul>
        </form>
    </div>
}

export default ProductsScreen;

