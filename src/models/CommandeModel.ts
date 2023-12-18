import { PanierItemModel } from "./PanierItemModel";

export interface CommandeModel {
    panier: PanierItemModel[],
    panierPrice: number,
    modePaiement: string,
    nomClient: string,
    emailClient: string,
    telephoneClient: string,
    ville: string,
    adresse: string,
    numTable: string,
    dateRetrait: string,
    heureRetrait: string,
    detailsComment: string,
} 