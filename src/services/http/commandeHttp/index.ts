import axios from "axios";
import { CommandeModel } from "../../../models/CommandeModel";


export const sendCommandeData = async (formData: FormData, headers: any) => {
    try {
        console.log(formData);
        const res = await axios.post("http://localhost:8000/api/commandes", formData, {headers}).then((response) => {
            console.log("enregistrement réussi");
            console.log(response);
            console.log(res);
        });
    } catch (error) {
        console.error(error); 
       
      }
    }

    export const getUserCommandeData = async (id: string): Promise<Array<CommandeModel>> => {
        return  ((await axios.get(`http://localhost:8000/api/commandes/${id}`)).data.data
        )
    }