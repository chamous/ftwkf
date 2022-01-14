export const initialState = {
    user : window.localStorage.getItem('user'),
    isSidebarOpen : false,
}

const reducer = (state,action) =>{
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
        case 'TOGGLE_SIDEBAR' : 
            return {
                ...state,
                isSidebarOpen : !state.isSidebarOpen,
            }
        default :
            return state;
    }
}

export default reducer;
