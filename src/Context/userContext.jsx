
import { useState, createContext } from "react";


export const UserContext = createContext()

export default function UserProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}