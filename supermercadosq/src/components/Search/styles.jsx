import styled from "styled-components";

export const SearchDiv = styled.div`
position: relative;

.search-box{
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: -30px;
}

.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #f1f1f1;
  padding-right: 40px;
  color:#3EBCD3 ;
}

.input-search::placeholder{
  color: #3EBCD3 ;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}

.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#3EBCD3 ;
  background-color:transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search{
  width: 240px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid #3EBCD3 ;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 240px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid #3EBCD3 ;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.icon-search {
  transition: .2s all ease;
  &:hover {
    font-size: 24px;
  }
}
`;