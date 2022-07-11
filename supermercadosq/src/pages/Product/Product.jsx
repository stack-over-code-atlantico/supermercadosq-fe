import React, { useEffect, useState } from 'react';

import { NavbarProducts } from '../../components/NavbarProducts';
import { Footer } from '../../components/Footer';
import { NavbarAdm } from '../../components/NavbarProductsAdm';
import { CardsContainer } from '../../components/CardsContainer';
import { FilterButton } from '../../components/FilterButton';
import { AddProductCard } from "../../components/AddProductCard";
import { ProductCard } from "../../components/ProductCard";
import { getAllProducts } from '../../services/useProducts';
import { userLevel } from '../../services/useAuth';

import cardDefault from '../../assets/images/Card-default.png';
import ellipsis from '../../assets/icons/ellipsis.png';
import seafoodIcon from '../../assets/icons/seafood.png';
import milkIcon from '../../assets/icons/milk.png';
import fishIcon from '../../assets/icons/fish.png';
import mustardIcon from '../../assets/icons/mustard.png';
import peanutIcon from '../../assets/icons/peanut.png';
import eggIcon from '../../assets/icons/egg.png';
import wheatIcon from '../../assets/icons/wheat.png';
import sojaIcon from '../../assets/icons/soja.png';
import questionIcon from '../../assets/icons/question.svg';

export function Product() {
  const [posts, setPosts] = useState([]);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    const AllProducts = async (page) => {
      const resp = await getAllProducts(page);
      setPosts(resp.data)
    };

    (async function() {
      setLevel(userLevel());
    })();

    AllProducts(0);
  }, []);
  console.log(level);

  const handleColor = (allergy) => {
    const alergias = allergy ? allergy.split(',') : '';
    if (alergias[0] === 'ovo') return '#DAC50A';
    if (alergias[0] === 'trigo') return '#D3B273';
    if (alergias[0] === 'amendoim') return '#C87C53';
    if (alergias[0] === 'mostarda') return '#F59E1D';
    if (alergias[0] === 'soja') return '#108a57';
    if (alergias[0] === 'fish') return '#9CDBE7';
    if (alergias[0] === 'crustaceos') return '#F66A69';
    if (alergias[0] === 'lactose') return '#3EBCD3';
    return '#3EBCD3';
  };

  const handleIcon = (allergy) => {
    const alergias = allergy ? allergy.split(',') : '';
    if (alergias?.length > 1) {
      return ellipsis;
    } else {
      if (alergias[0] === 'ovo') return eggIcon;
      if (alergias[0] === 'trigo') return wheatIcon;
      if (alergias[0] === 'amendoim') return peanutIcon;
      if (alergias[0] === 'mostarda') return mustardIcon;
      if (alergias[0] === 'soja') return sojaIcon;
      if (alergias[0] === 'fish') return fishIcon;
      if (alergias[0] === 'crustaceos') return seafoodIcon;
      if (alergias[0] === 'lactose') return milkIcon;
    }
    return questionIcon;
  };

  return (
    <>
      {level?.nivel === "ADMINISTRADOR" ? <NavbarAdm /> : <NavbarProducts />}
      <FilterButton />
      <CardsContainer>
        <AddProductCard />
        {posts?.map((product) => {
          return (
            <ProductCard
              nome={product.nome || 'Nome não informado'}
              imagem={product.imagem ? product.imagem : cardDefault}
              color={handleColor(product.alergia)}
              descricao={product.descricao || "Sem descrição"}
              usuario={product.usuario_produto_id_usuarioTousuario.nome}
              dataPostagem={product.data_postagem}
              icon={handleIcon(product.alergia)}
            />
          )
        })}
      </CardsContainer>
      <Footer />
    </>
  )
}

export default Product;
