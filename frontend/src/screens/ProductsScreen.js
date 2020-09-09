import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';


function ProductsScreen (props) {
    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');


    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
    
    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;

    const dispatch = useDispatch();


    useEffect(() => {
        if(successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
    }, [successSave, successDelete, dispatch])
    
    const openModal = (product) => {
        setModalVisible(true);

        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setDescription(product.description);
        setCategory(product.category);
        setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({_id: id, name, price, image, brand, category, countInStock, description}));

    }
    
    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }

    
    return <div className="content content-margined">
        <div className="product-header">
            <h3>Produtos</h3>
            <button className="button primary" onClick={() => openModal({})}>Criar produto</button>
        </div>   
    {modalVisible &&
        <div className="form">
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
                     <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}>                    
                     </input>
                 </li>
                 <li>
                     <label htmlFor="price">Valor</label>
                     <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="brand">Marca</label>
                     <input type="text" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="description">Descrição</label>
                     <textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                     </textarea>
                 </li>
                 <li>
                     <label htmlFor="category">Categoria</label>
                     <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="countInStock">Quant estoque</label>
                     <input type="text" id="countInStock" name="countInStock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
                 </li>
                 <li>
                     <label htmlFor="image">Imagem</label>
                     <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                 </li>
                 <li>
                     <button type="submit" className="button primary">{id ? "Editar" : "Criar"}</button>
                 </li>
                 <li>
                     <button type="submit" onClick={() =>{setModalVisible(false)}} className="button secondary">Fechar</button>
                 </li>
                 
             </ul>
         </form>
     </div>
    }
   



        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => 
                     <tr key={product._id}>
                     <td>{product._id}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.category}</td>
                     <td>{product.brand}</td>
                     <td>
                         <button className="button" onClick={() => openModal(product)}>Edit</button>
                         {' '}
                         <button className="button" onClick={() => deleteHandler(product)}>Delete</button>
                     </td>
                     </tr>
                )} 
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductsScreen;

