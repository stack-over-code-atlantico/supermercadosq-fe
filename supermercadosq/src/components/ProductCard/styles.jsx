import styled from "styled-components";

export const DivProductCardFace = styled.div`
    width: 240px;
    height: 380px;

    margin-top: 35px;

    perspective: 800px;

    &:hover .front {
        transform: rotateY(180deg);
        z-index: 0;
    }

    &:hover .back {
        transform: rotateY(0);
        z-index: 1;
    }
`;

export const DivProductCardFront = styled.div`
    position: absolute;

    transition: 700ms;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    border: none;
    box-shadow: 2px 5px 10px #ccc;

    background-color: var(--color-white);

    display: flex;
    align-items: center;
    flex-direction: column;

    z-index: 1;

    img{
        display: block;
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        height: 300px;
    }

`;

export const DivProductCardBack = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    transform: rotateY(-180deg);
    backface-visibility: hidden;

    position: absolute;

    width: 100%;
    height: 100%;

    transition: 700ms;

    border-radius: 10px;
    border: none;
    box-shadow: 0px 5px 10px #ccc;

    background-color: #fff;


`;

export const DivIconCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  margin: 0 auto;
  background-color: ${props => props.color ? props.color : 'var(--color-blue-light)' };

  .icon {
    position: absolute;
    left: 6px;
    top: 5.5px;
    height: 28px;
    width: 28px;
    color: #fff;
  }
`;

export const DivRestrictionAndName = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 20px 0px 0px 0px;

    p{
        position: relative;
        bottom: 10px;
        font-size: .7rem;
        text-align: justify;
        text-transform: uppercase;
    }

    img{
        width: 22px;
        height: 22px;
        position: absolute;
        z-index: 2;
    }
`;

export const DivProductCardBackContent = styled.div`
    background-color: ${props => props.color ? props.color : 'var(--color-blue-light)' };

    width: 100%;
    height: 100%;

    border-radius: 0px 0px 10px 10px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: .6rem;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 10px;
        margin-bottom: 10px;

        color: #fff;
    }

    .divLittleBall {
        background-color: var(--color-purple);

        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        height: 20px;
        border-radius: 50%;

        margin-bottom: 100%;
        box-shadow: 0px 2px 10px #ccc;

        position: absolute;
    }
`;

export const DivBackContentInfos = styled.div`
    background-color: ${props => props.color ? props.color : 'var(--color-blue-light)' };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

export const DivProductDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    border-radius: 10px;
    margin: 0px 15px;

    background-color: #fff;

    p {
        font-size: 0.6rem;
        text-align: justify;
        color: var(--color-gray);

        display: block;
        padding: 20px 10px;

    }

    span {
        font-weight: bold;
    }
`;

export const DivPersonDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    padding: 10px 0px 0px 15px;

    .user-image {
        width: 22px;
        height: 22px;
        color: #fff;
        border-radius: 50%;
        margin: 0px 10px 0px -28px;
        padding: 0;
    }
`;

export const DivNameAndPubDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    flex-direction: column;

    p {
        color: var(--color-white);
    }

    .pPersonName {
        font-size: 0.8rem;
    }

    .pPubDate {
        font-size: 0.6rem;
        margin-bottom: 5px;
    }
`;

export const DivComment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .comment-btn {
      background-color: rgba(255, 255, 255, 0.7);
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      margin-bottom: 20px;
      transition: 500ms all ease;
    }

    .comment-btn:hover {
      background-color: #fff;
    }

    .comment-icon {
        width: 22px;
        height: 22px;
        color: #494949;
        margin-top: 6px;

    }
`;
