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
import Dialog from '../../components/Dialog';

import {
  getAllProducts,
  postProductPerAllergy,
  postProductNotPerAllergy,
  searchProduct,
} from "../../services/useProducts";
import useAuth from "../../services/useAuth";

import cardDefault from "../../assets/images/Card-default.png";
import seafoodIcon from "../../assets/icons/seafood.png";
import milkIcon from "../../assets/icons/milk.png";
import fishIcon from "../../assets/icons/fish.png";
import mustardIcon from "../../assets/icons/mustard.png";
import peanutIcon from "../../assets/icons/peanut.png";
import eggIcon from "../../assets/icons/egg.png";
import glutenIcon from "../../assets/icons/gluten.png";
import cerealIcon from '../../assets/icons/wheat.png';
import sojaIcon from "../../assets/icons/soja.png";
import otherIcon from "../../assets/icons/others.png";
import noImage from '../../assets/icons/noimage.png';
import ProductPagination from "../../components/ProductPagination";
import ProductRegister from "../../components/ProductRegister";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { ListProducts, ListProductsCards } from "./styles";

export function Product() {
  const {userLevel, open, setOpen, logout} = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [level, setLevel] = useState(null);
  const [page, setPage] = useState(0);
  const [allergy, setAllergy] = useState([]);
  const [notAllergy, setNotAllergy] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (allergy.length === 0 && notAllergy.length === 0) {
      (async function () {
        const resp = await searchProduct(search, page);
        setPosts(resp.data);
      })();
    } else if (allergy.length > 0) {
      (async function () {
        await postProductPerAllergy(allergy.join(","), page).then((resp) =>
          setPosts(resp.data)
        );
      })();
    } else if (notAllergy.length > 0) {
      (async function () {
        await postProductNotPerAllergy(notAllergy.join(","), page).then((resp) =>
          setPosts(resp.data)
        );
      })();
    }
  }, [page, allergy, notAllergy]);

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
        if (values === "cereais") total.push("#dac297");
        if (values === "amendoim") total.push("#C87C53");
        if (values === "mostarda") total.push("#F59E1D");
        if (values === "soja") total.push("#108a57");
        if (values === "peixe") total.push("#9CDBE7");
        if (values === "lactose") total.push("#3EBCD3");
        if (values === "mariscos") total.push("#F66A69");
        if (values === "gluten") total.push("#a39479");
        if (values === "outros") total.push("#9CDD6E");
      }
      return total;
    }
    return "#bdbdbd";
  };

  const handleIcon = (allergy) => {
    const alergias = allergy ? allergy.split(",") : "";
    const total = [];
    if (Array.isArray(alergias) && alergias.length > 0) {
      for (let values of alergias) {
        if (values === "ovo") total.push(eggIcon);
        if (values === "cereais") total.push(cerealIcon);
        if (values === "amendoim") total.push(peanutIcon);
        if (values === "mostarda") total.push(mustardIcon);
        if (values === "soja") total.push(sojaIcon);
        if (values === "peixe") total.push(fishIcon);
        if (values === "lactose") total.push(milkIcon);
        if (values === "mariscos") total.push(seafoodIcon);
        if (values === "gluten") total.push(glutenIcon);
        if (values === "outros") total.push(otherIcon);
      }
      return total;
    }
    return noImage;
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

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  }

  const handleLogoutModal = () => {
    setOpen(true);
  }

  const handleLogout = () => {
    logout();
  };

  const handleLogoutClose = () => {
    setOpen(false);
  }

  return (
    <ListProducts>
      {open ? ( <Dialog color="#3EBCD3" close={handleLogoutClose} logout={handleLogout} />) : (<></>)}
      <ProductRegister openModal={openModal} setOpenModal={closeModal} />
      <ProductDetails
        loading={loading}
        setClose={closeProductDetails}
        open={openDetailsModal}
        id={id}
        image={image}
      />
      {level?.nivel === "ADMINISTRADOR" || level?.nivel === "administrador" ? <NavbarAdm logoff={handleLogoutModal} /> : <NavbarProducts logoff={handleLogoutModal}/>}
      <ListProductsCards>
        <Search
          handleSubmit={handleSubmitForm}
          handleChange={handleChangeInput}
          name={search}
        />
        <FilterButton
          left="603px"
          title="Filtrar sem ingredientes"
          hidden={allergy.length > 0}
          alergias={notAllergy}
          setAlergias={setNotAllergy}
          fish={fishIcon}
          egg={eggIcon}
          milk={milkIcon}
          mustard={mustardIcon}
          seafood={seafoodIcon}
          peanut={peanutIcon}
          wheat={cerealIcon}
          soja={sojaIcon}
          gluten={glutenIcon}
        />
        <FilterButton
          title="Filtrar com ingredientes"
          hidden={notAllergy.length > 0}
          alergias={allergy}
          setAlergias={setAllergy}
          fish={fishIcon}
          egg={eggIcon}
          milk={milkIcon}
          mustard={mustardIcon}
          seafood={seafoodIcon}
          peanut={peanutIcon}
          wheat={cerealIcon}
          soja={sojaIcon}
          gluten={glutenIcon}
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
