import axios from "axios";
import { MenuModel } from "../../../models/MenuModel";

export const getMenuData = async(): Promise<Array<MenuModel>> => {
    return ((await axios.get("http://localhost:8000/api/menus")).data.data
    )
}