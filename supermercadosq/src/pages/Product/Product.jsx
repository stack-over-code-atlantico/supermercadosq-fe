import React, { useEffect, useState } from "react";

import { NavbarProducts } from "../../components/NavbarProducts";
import { Footer } from "../../components/Footer";
import { NavbarAdm } from "../../components/NavbarProductsAdm";
import { CardsContainer } from "../../components/CardsContainer";
import { FilterButton } from "../../components/FilterButton";
import { AddProductCard } from "../../components/AddProductCard";
import { ProductCard } from "../../components/ProductCard";
import { AddProductCardRegister } from "../../components/AddProductCardRegister";
import { Search } from "../../components/Search";

import {
  getAllProducts,
  postProductPerAllergy,
  searchProduct,
} from "../../services/useProducts";
import { userLevel } from "../../services/useAuth";

import cardDefault from "../../assets/images/Card-default.png";
import ellipsis from "../../assets/icons/ellipsis.png";
import seafoodIcon from "../../assets/icons/seafood.png";
import milkIcon from "../../assets/icons/milk.png";
import fishIcon from "../../assets/icons/fish.png";
import mustardIcon from "../../assets/icons/mustard.png";
import peanutIcon from "../../assets/icons/peanut.png";
import eggIcon from "../../assets/icons/egg.png";
import wheatIcon from "../../assets/icons/wheat.png";
import sojaIcon from "../../assets/icons/soja.png";
import questionIcon from "../../assets/icons/question.svg";
import ProductPagination from "../../components/ProductPagination";
import ProductRegister from "../../components/ProductRegister";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { ListProducts, ListProductsCards } from "./styles";

export function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [level, setLevel] = useState(null);
  const [page, setPage] = useState(0);
  const [allergy, setAllergy] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (allergy.length === 0) {
      (async function () {
        const resp = await searchProduct(search, page);
        setPosts(resp.data);
      })();
    } else {
      (async function () {
        await postProductPerAllergy(allergy.join(","), page).then((resp) =>
          setPosts(resp.data)
        );
      })();
    }
  }, [page, allergy]);

  useEffect(() => {
    (async function () {
      setLevel(userLevel());
      const resp = await getAllProducts();
      setTotalPages(Math.ceil((resp.data.length - 8) / 9));
    })();
  }, []);

  const handlePage = (e) => {
    setPage(e.target.value - 1);
  };

  const handlePrevPage = () => {
    setPage(page > 0 ? parseInt(page) - 1 : 0);
  };

  const handleNextPage = () => {
    setPage(page < totalPages ? parseInt(page) + 1 : totalPages);
  };

  const handleRegisterProduct = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleProductDetails = async (id, url) => {
    setLoading(true);
    setImage(url);
    setTimeout(async () => {
      setOpenDetailsModal(true);
      setId(id);

      setLoading(false);
    }, 1000);
  };

  const closeProductDetails = () => {
    setOpenDetailsModal(false);
  };

  const handleColor = (allergy) => {
    const alergias = allergy ? allergy.split(",") : "";
    const total = [];
    if (Array.isArray(alergias) && alergias.length > 0) {
      for (let values of alergias) {
        if (values === "ovo") total.push("#DAC50A");
        if (values === "gluten") total.push("#D3B273");
        if (values === "amendoim") total.push("#C87C53");
        if (values === "mostarda") total.push("#F59E1D");
        if (values === "soja") total.push("#108a57");
        if (values === "peixe") total.push("#9CDBE7");
        if (values === "crustaceos") total.push("#F66A69");
        if (values === "lactose") total.push("#3EBCD3");
      }
      return total;
    }
    return "#BABABA";
  };

  const handleIcon = (allergy) => {
    const alergias = allergy ? allergy.split(",") : "";
    const total = [];
    if (Array.isArray(alergias) && alergias.length > 0) {
      for (let values of alergias) {
        if (values === "ovo") total.push(eggIcon);
        if (values === "gluten") total.push(wheatIcon);
        if (values === "amendoim") total.push(peanutIcon);
        if (values === "mostarda") total.push(mustardIcon);
        if (values === "soja") total.push(sojaIcon);
        if (values === "peixe") total.push(fishIcon);
        if (values === "crustaceos") total.push(seafoodIcon);
        if (values === "lactose") total.push(milkIcon);
      }
      return total;
    }
    return questionIcon;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (search) {
      const products = await searchProduct(search, page).then((resp) => setPosts(resp.data));
      return products;
    } else {
      setPage(0);
      const products = await searchProduct(search, page).then((resp) => setPosts(resp.data));
      return products;
    }

  };
  console.log(page);

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  }

  return (
    <ListProducts>
      <ProductRegister openModal={openModal} setOpenModal={closeModal} />
      <ProductDetails
        loading={loading}
        setClose={closeProductDetails}
        open={openDetailsModal}
        id={id}
        image={image}
      />
      {level?.nivel === "ADMINISTRADOR" ? <NavbarAdm /> : <NavbarProducts />}
      <ListProductsCards>
        <Search
          handleSubmit={handleSubmitForm}
          handleChange={handleChangeInput}
          name={search}
        />
        <FilterButton
          alergias={allergy}
          setAlergias={setAllergy}
          fish={fishIcon}
          egg={eggIcon}
          milk={milkIcon}
          mustard={mustardIcon}
          seafood={seafoodIcon}
          peanut={peanutIcon}
          wheat={wheatIcon}
          soja={sojaIcon}
        />
        <CardsContainer>
          {page === 0 && userLevel() ? (
            <AddProductCard onClick={handleRegisterProduct} />
          ) : page > 0 ? (
            <></>
          ) : (
            <AddProductCardRegister />
          )}
          {posts?.map((product) => (
            <ProductCard
              setOpenModal={(e) =>
                handleProductDetails(product.id_produto, product.imagem)
              }
              onClick={(e) => setId(product.id_produto)}
              key={product.id_produto}
              nome={product.nome || "Nome não informado"}
              imagem={product.imagem ? product.imagem : cardDefault}
              color={handleColor(product.alergia)}
              descricao={product.descricao || "Sem descrição"}
              usuario={product.usuario_produto_id_usuarioTousuario.nome}
              dataPostagem={product.data_postagem}
              icon={handleIcon(product.alergia)}
            />
          ))}
        </CardsContainer>
      </ListProductsCards>
      <ProductPagination
        changePage={handlePage}
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
      />
      <Footer />
    </ListProducts>
  );
}

export default Product;
