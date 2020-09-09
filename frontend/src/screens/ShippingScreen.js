import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {saveShipping} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';


function ShippingScreen (props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('');

   
    const dispatch = useDispatch();
   

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping(address, city, cep, pais));
        props.history.push('payment');

    }  

    
    return <div>
        <CheckoutSteps step1 step2 ></CheckoutSteps>

        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Endereço de envio</h2>
                </li>
                <li>
                    <label htmlFor="address">Endereço completo</label>
                    <input type="address" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="city">Cidade</label>
                    <input type="city" name="city" id="city" onChange={(e) => setCity(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="cep">Cep</label>
                    <input type="cep" name="cep" id="cep" onChange={(e) => setCep(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="pais">País</label>
                    <input type="pais" name="pais" id="pais" onChange={(e) => setPais(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Continuar</button>
                </li>                         
            </ul>
        </form>
    </div>
    </div>
   
}

export default ShippingScreen;

