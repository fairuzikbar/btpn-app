// import { useState, useEffect } from 'react';
// import ListContact from './listContact';
// import axios from 'axios';

// function Crud() {
//     const url = 'https://contact.herokuapp.com/contact';
//     const [data, setData] = useState([])

//     const getData = async () => {
//         const response = await axios.get(url);
//         setData(response.data.data);
//     };

//     useEffect(() => {
//         getData();
//     }, [])

//     return (
//         <>
//         <ListContact/>
//         {data.map((contact) => (
//             <ListContact
//                 key={contact.id}
//                 fullName={contact.firstName + ' ' + contact.lastName}
//                 age={contact.age}
//                 photo={contact.photo}
//             />
            
//         ))}
//         </>
//     )
// }

// export default Crud
