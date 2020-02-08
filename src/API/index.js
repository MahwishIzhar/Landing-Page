import { URL } from "./config"



export const Api = {
    post: ( data, endPoint, success, error ) => {
        fetch(`${URL}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then( response => response.json())
        .then( result => { 
            return success( result )
        })
        .catch( err => {
            return error( err ) 
            
        })
    }
}
