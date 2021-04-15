import React from 'react'

const UserContext = React.createContext()
// const Score= React.createContext()

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext