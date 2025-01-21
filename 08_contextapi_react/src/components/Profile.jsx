import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

export const Profile = () => {
    const {user} = useContext(UserContext)
 if(!user) return <div>please login</div>
 
 return <div>welcome {user.username}</div>
}
 