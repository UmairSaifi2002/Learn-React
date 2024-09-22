import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className=' bg-gray-700 text-white text-4xl p-5 m-10 '>User : {userid}</div>
    )
}

export default User
