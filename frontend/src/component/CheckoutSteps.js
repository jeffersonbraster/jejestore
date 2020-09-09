import React from 'react';

function CheckoutSteps(props) {
    return <div className="checkout-steps">
        <div className={props.step1 ? 'active' : ''}>Registro</div>
        <div className={props.step2 ? 'active' : ''}>Endereço de entrega</div>
        <div className={props.step3 ? 'active' : ''}>Pagamento</div>
        <div className={props.step4 ? 'active' : ''}>Historico pedido</div>
    </div>
}

export default CheckoutSteps;