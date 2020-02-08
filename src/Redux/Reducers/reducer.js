const INITIAL_STATE = {
    loading: false,
    userInfo: null
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'START_LOADING': {
            return { ...state, loading: true }
        }

        case 'STOP_LOADING': {
            return { ...state, loading: false }
        }

        case 'USER_INFO': {
            return { ...state, userInfo: action.payload, loading: false }
        }

        case 'UPDATE_USER_INFO': {
            return { ...state, userInfo: action.payload }
        }

        case 'CLEAR': {
            return { ...state, userInfo: null, loading: false }
        }

        default:
            return state;
    }
}