import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {register} from '../actions/userActions';


function RegisterScreen (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    const redirect = props.location.search?props.location.search.split('=')[1] : '/';

    useEffect(() => {
       if(userInfo) {
           props.history.push(redirect);
       }
        
      }, [userInfo, props.history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));

    }  

    
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Criar conta</h2>
                </li>
                <li>
                    {loading && <div>Carregando...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">Nome completo</label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>                    
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="rePassword">Redigite a senha</label>
                    <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                </li>
                <li>
                    <button type="submit" className="button primary">Registrar</button>
                </li>
                <li>
                    Já possui uma conta?
                    <Link to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect} className="button secondary text-center">Criar sua conta na JejeStore</Link>
                </li>                                
            </ul>
        </form>
    </div>
}

export default RegisterScreen;

