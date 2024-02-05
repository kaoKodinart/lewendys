import axios from "axios";
import { UserModel } from "../../../models/UserModel";


export const signIn = async (formData: FormData, headers: any) => {
    try {
        console.log(formData);
        const res = await axios.post("http://localhost:8000/api/auth_login", formData, {headers}).then((response) => {
            console.log("login succès");
            console.log(response);
            console.log(res);
        });
    } catch (error) {
        console.error(error); 
        console.log("login echec");
      }
    }

    export const getCurrentUser = async (): Promise<UserModel> => {
        try {
          const response = await axios.get("http://localhost:8000/api/auth_login");
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