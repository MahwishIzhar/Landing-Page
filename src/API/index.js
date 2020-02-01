import { URL } from "./config"



export const Api = {
    post: ( data, endPoint ) => {
        fetch(URL+endPoint,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then( response => response.json())
        .then( result => {
            console.log(result)
        })
        .catch( error => {
            console.log(error);
            
        })
    }
}
