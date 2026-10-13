import React from "react";
import { useNavigate } from "react-router-dom";

const estiloBotao = {
    padding: "10px 20px",
    fontsize: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundcolor: "#007bff",
    color: "#ffffff"
}

export default function BotaoNavegacao({rota,texto}){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(rota)} style ={estiloBotao}>
            {texto}
        </button>
    );
}