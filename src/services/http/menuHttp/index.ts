import axios from "axios";
import { MenuModel } from "../../../models/MenuModel";

export const getMenuData = async (): Promise<Array<MenuModel>> => {
  try {
    const response = await axios.get("http://localhost:8000/api/menus");
    // VÃ©rifiez si la rÃ©ponse est correcte
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      // GÃ©rez le cas oÃ¹ la rÃ©ponse n'est pas au format attendu
      throw new Error("RÃ©ponse inattendue du serveur");
    }
  } catch (error) {
    // GÃ©rez les erreurs de requÃªte ici
    console.error("Erreur lors de la requÃªte : ", error);
    throw error; // Vous pouvez relancer l'erreur pour qu'elle soit gÃ©rÃ©e plus haut
  }
};