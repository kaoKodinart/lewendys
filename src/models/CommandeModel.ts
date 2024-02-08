import { PanierItemModel } from "./PanierItemModel";

export interface CommandeModel {
    user_id: string,
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
    commandeStatut: boolean
} 