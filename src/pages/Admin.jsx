import React, { useState, useContext } from 'react'
import { formContext } from '../UserContext'

const Admin = () => {

    const { createUser, updateUser } = useContext(formContext);



    const { email, username, imgUrl } = createUser;

    const handleChange = (e) => {
        const { value, name, files } = e.target;
        updateUser((prev) => ({
            ...prev,
            [name]: name === "imgUrl" ? URL.createObjectURL(files[0]) : value

        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({
            username: "",
            email: "",
            imgUrl: ""
        })
        console.log(createUser);
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', marginTop: "30px" }}>
            <form onSubmit={handleSubmit}>
                {imgUrl && <img src={imgUrl} alt='images'
                    style={{ marginBottom: '10px', maxWidth: '90%' }} />}
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
                />

                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
                />
                <input
                    type="file"
                    name="imgUrl"
                    onChange={handleChange}
                    accept='image/*'
                    disabled={false}
                    style={{ width: '90%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 20px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >Creat user</button>
            </form>
        </div>
    )
}

export default Admin
