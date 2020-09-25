const initialState = {
    users: [
        {id: 1 ,name: "Akhil"},
        {id: 2 ,name: "Agam"},
        {id: 3 ,name: "Shubham"}
    ],
    isAuthenticated: false
}

const reducer = (state = initialState , action) => {
    if(action.type === 'LOGIN_USER') {
        return {
            ...state,
            isAuthenticated: true
        }
    }
    return state;
}

export default reducer;

