import { usersReducer } from "./users-reducer"

export default (state,action)=>{
    
    return {
        users:usersReducer(state.users,action),
    }
}