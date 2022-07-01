import styled from "styled-components";

export const DivFilter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: absolute;
    
    margin: 1rem 1rem 1rem 0rem;

    a {
        text-decoration: none;
        color: #fff;
    }
    
    label {
        text-decoration: none;
        color: #fff;
    }

    label:hover {
        opacity: 0.8;
    }

    ul {
        list-style: none;
    }

    img {
        width: 22px;
        height: 22px;
        border: none;
        border-radius: 50%;
    }

    .listaFiltros {
        background-color: var(--color-blue-light);

        padding: 0.4rem 2rem;
        border: none;
        border-radius: 8px;
        color: var(--color-white);
        font-weight: 300;
        position: relative;

        top: -40px;
        right: -175px;

    }

    .listaFiltros .itemFiltrar a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0 auto;
    }
    
    .listaFiltros .itemFiltrar .subLista {
        display: flex;
        flex-direction: column;
        display: none;
    }

    .listaFiltros:hover {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .subLista {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            gap: 5px;
            margin: 0;
        }
    }

    .listaFiltros .itemFiltrar .subLista .itemLista {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        padding: 0;
    }
`;