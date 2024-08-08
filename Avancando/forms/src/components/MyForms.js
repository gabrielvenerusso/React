import React from 'react';
import { useState } from 'react';
import './MyForms.css';

const MyForms = ({user}) => {
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando form");
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
                </div>
                <label>
                    <span>E-mail: </span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                <label> 
                    <span>Bio: </span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label>
                    <span>Função do sistema:</span>
                    <select name="role" placeholder="Descrição da função" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForms;