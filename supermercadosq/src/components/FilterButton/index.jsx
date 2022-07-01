import React from 'react'
import { DivFilter } from './styles'
import Bola from '../../assets/images/bola.jpg'

export function FilterButton(){
    return(
        <DivFilter>
            <ul className='listaFiltros'>
                <li className='itemFiltrar'><a href="#">Filtrar</a>
	         	    <ul className='subLista'>
	                    <li className='itemLista'>
                            <input type="checkbox" id="peixe"/>
                            <img src={Bola}/>
                            <label htmlFor="peixe">Peixe</label>
                        </li>
	                    <li className='itemLista'>
                            <input type="checkbox" id="soja"/>
                            <img src={Bola}/>
                            <label htmlFor="soja">Soja</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="trigo"/>
                            <img src={Bola}/>
                            <label htmlFor="trigo">Trigo</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="noz"/>
                            <img src={Bola}/>
                            <label htmlFor="noz">Noz</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="amendoin"/>
                            <img src={Bola}/>
                            <label htmlFor="amendoin">Amendoin</label>
                        </li><li className='itemLista'>
                            <input type="checkbox" id="crustaceos"/>
                            <img src={Bola}/>
                            <label htmlFor="crustaceos">Crustáceos</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="ovo"/>
                            <img src={Bola}/>
                            <label htmlFor="ovo">Ovo</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="lactose"/>
                            <img src={Bola}/>
                            <label htmlFor="lactose">Lactose</label>
                        </li>
                        <li className='itemLista'>
                            <input type="checkbox" id="mostarda"/>
                            <img src={Bola}/>
                            <label htmlFor="mostarda">Mostarda</label>
                        </li>
	       		    </ul>
			    </li>
            </ul>
        </DivFilter>
    )
}
