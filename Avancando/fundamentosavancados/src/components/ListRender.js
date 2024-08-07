import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "João", "Carlos", "Maria", "Gabriel"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pierry", age: 21},
        {id: 3, name: "Gabriel", age: 20},
        {id: 4, name: "Rafael", age: 22}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {            
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete User</button>
        </div>
    );
};

export default ListRender;