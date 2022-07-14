import React from "react";
import { DivCards } from "./styles";


export function CardsContainer ({children}){
    return(
        <DivCards>
          {children}
        </DivCards>
    );
};
