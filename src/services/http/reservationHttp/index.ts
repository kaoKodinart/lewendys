import axios from "axios";


export const sendReservationData = async (formData: FormData, headers: any) => {
    try {
        console.log(formData);
        const res = await axios.post("http://localhost:8000/api/reservations", formData, {headers}).then((response) => {
            console.log("enregistrement réussi");
            console.log(response);
            console.log(res);
        });
    } catch (error) {
        console.error(error); 
       
      }
    }