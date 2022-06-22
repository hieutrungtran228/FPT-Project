import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('test123')

    return (
        <AuthContext.Provider
            value={{
                user,
                register: async (username, password, email) => {
                    console.log('register OK');
                }
            }}>
            {children}
        </AuthContext.Provider>
    )
}