const initial_State ={
    currentUser : null
}
 export const userReducer =(state=initial_State,action)=>{
    switch(action.type){
        case "set-current-user" :
            return{
                ...state,
                currentUser: action.payload
            };
        default :
            return state;   

    }
}
