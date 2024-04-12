import React, { useState } from 'react'

const Admin = () => {
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        imgurl: ""
    })



    const handleChange = (e) => {
        const { value, name, files } = e.target
        setCreateUser((prev))=> ({
            ...prev,
            [nam]: value === "imgUrl" ? URL.createObjectURL(files[0])

        })
    }

const handlesubmit = (e) => {
    e.preventDefault()
    console.log(createUser);
}

return (
    <div>
        <form onSubmit={handlesubmit}>
            {imgUrl && <img src={imgUrl} alt='images' />}
            <input type="email" name="" placeholder='Email' id="" value={email} onChange={handleChange} />
            <input type="text" name="" id="" value={username} onChange={handleChange} />
            <input type="file" name="" id="" />
            <button type="submit">Creat user</button>
        </form>
    </div>
)
}

export default Admin
