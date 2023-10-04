import { MenuModel } from "./MenuModel";
import { OptionModel } from "./OptionModel";

export interface PanierItemModel {
    selectedMenu: Partial<MenuModel>
    quantity: number,
    variation: OptionModel[],
    prixFinal: number,
}