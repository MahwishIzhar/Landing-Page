import { Api } from "../../API"

const Actions = {

signup : ( data ) => {
    Api.post( data, '/signup')
},

}

export default Actions