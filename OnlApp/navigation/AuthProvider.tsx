import React, { createContext, useState } from 'react'


export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('123')

    return (

        <AuthContext.Provider
            value={{
                user,
                register: (email , password) => {
                    console.log('register');
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
