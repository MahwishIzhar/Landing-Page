
const Actions = {

set_name : (newName) => {
    return {
        type: 'SET_NAME',
        payload: newName
    }
},

show_dashboard: () =>
{

    return {
        type: 'show_dashboard',

    }
}

}

export default Actions