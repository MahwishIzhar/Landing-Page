import { Api } from "../../API"

const Actions = {

    Signup: (data, completed, failed) => {

        return dispatch => {
            dispatch({ type: 'START_LOADING' })

            let userData = {
                path: 'abc',
                content: data
            }

            Api.post(userData, '/signup', success => {
                dispatch({ type: 'STOP_LOADING' })
                return completed(success)
            }, error => {
                dispatch({ type: 'STOP_LOADING' })
                return failed(error)
            })
        }
    },

    Login: (data, completed, failed) => {

        return dispatch => {
            dispatch({ type: 'START_LOADING' })


            Api.post( data, '/signin', success => {
                dispatch({ type: 'USER_INFO', payload: success.userdata })
                return completed(success)
            }, error => {
                dispatch({ type: 'STOP_LOADING' })
                return failed(error)
            })
        }
    },

    Clear: () => {
        return dispatch => {
            dispatch({ type: 'CLEAR' })


        }
    }

}

export default Actions