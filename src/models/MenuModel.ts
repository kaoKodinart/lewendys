import { VariationModel } from "./VariationsModel";

export interface MenuModel {
    image: string,
    prix: number,
    nomMenu: string,
    categorie: string,
    description: string,
    variations: Array<VariationModel>,
    id: number,
}