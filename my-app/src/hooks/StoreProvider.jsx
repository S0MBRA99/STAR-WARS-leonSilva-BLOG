import { createContext,useContext,useState } from "react";

const StoreContext = createContext()

export function StoreProvider({children}){
    
    const [userName,setUserName] = useState([])

    return(
        <StoreContext.Provider value={{userName,setUserName}}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStore(){
    return useContext(StoreContext)
}