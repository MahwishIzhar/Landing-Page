const INITIAL_STATE = {
    name: 'dwork',
    check: false
}

export const reducer = ( state = INITIAL_STATE, action ) => {

    switch( action.type ){

        case 'SET_NAME': {
            return { ...state, name: action.payload }
        }

        case 'show_dashboard':
            {
                console.log('herere')
return{...state, check: true}
            }
        default:
            return state;
    }
}