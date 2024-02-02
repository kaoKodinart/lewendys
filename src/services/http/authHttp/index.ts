import axios from "axios";


export const signIn = async (formData: FormData, headers: any) => {
    try {
        console.log(formData);
        const res = await axios.post("http://localhost:8000/api/login", formData, {headers}).then((response) => {
            console.log("login succès");
            console.log(response);
            console.log(res);
        });
    } catch (error) {
        console.error(error); 
        console.log("login echec");
      }
    }