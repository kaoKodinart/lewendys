import axios from "axios";
import { UserModel } from "../../../models/UserModel";


export const signIn = async (formData: FormData, headers: any) => {
    try {
        console.log(formData);
        return await axios.post("http://localhost:8000/api/login", formData, {headers}).then((response) => {
            console.log("login succès");
            // console.log(response.data.token);
            console.log("http",response.data);
            return response.data;
            // console.log(res.data);
        });
    } catch (error) {
        console.error(error); 
        console.log("login echec");
      }
    }

    export const getCurrentUser = async (): Promise<UserModel> => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get("http://localhost:8000/api/login", {
            headers: {
              'Authorization': `Bearer ${token}`
          }
          });
          if (response.data) {
            return response.data.user;   
          } else {
            throw new Error("RÃ©ponse inattendue du serveur");
          }
        } catch (error) {
          // GÃ©rez les erreurs de requÃªte ici
          console.error("Erreur lors de la requÃªte : ", error);
          throw error; // Vous pouvez relancer l'erreur pour qu'elle soit gÃ©rÃ©e plus haut
        }
      };