import React from  'react';
import { DivAddProductCard, DivButtonAddProductCard } from './styles';
import { useNavigate } from "react-router-dom";

export function AddProductCardRegister(){
    let navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/register', { replace: true });
    };
    return(
            <DivAddProductCard onClick={handleNavigate}>
                <DivButtonAddProductCard >
                    <h1>Ainda não faz parte dessa comunidade?</h1>
                </DivButtonAddProductCard>
                <h3>Crie sua conta agora!</h3>
            </DivAddProductCard>
    );
};
