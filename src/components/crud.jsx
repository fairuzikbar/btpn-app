import { useState, useEffect } from 'react';
import ListContact from './listContact';

function Crud() {
    const url = 'https://contact.herokuapp.com/contact';
    const [dataArr, setData] = useState([])
    const [showGreetings, getGreetings] = useState([]);

    const fetchInfo = async () => { 
        const res = await fetch(url);
        const d = await res.json();
        return setData(d.data);
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        // addNote({
        //   title,
        //   body,
        // });
        alert('test button')
        // showSuccessMessage('Note added');
        // navigate('/');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        await setGreeting(name, greets, confirmation);
        // Clear form inputs after submission
        setName('');
        setGreets('');
        setConfirmation('');
      }
    
      async function setGreeting(name, greetings, confirmation) {
        const { data, error } = await supabaseClient
          .from('chatbox')
          .insert([{ name: name, greetings: greetings, confirmation: confirmation, insert_date : new Date() }])
          .select();
      }
        
    useEffect(() => {
        fetchInfo();
    }, [])

    return (
        <>
        <h2>Tambah Kontak</h2>
        <form>
            <div className="mb-3">
            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
            </div>
            <div className="mb-3">
            <input type="number" className="form-control" id="age" placeholder="age"/>
            </div>
            <div className="mb-3">
            <input type="text" className="form-control" id="photo" placeholder="Link Photo"/>
            </div>
            <div className="mb-3">
            <input type="button" id="photo" value="submit" onClick={handleSubmit}/>
            </div>
        </form>
        {dataArr.map((dataObj) => (
            <ListContact
                key={dataObj.id}
                fullName={dataObj.firstName + ' ' + dataObj.lastName}
                age={dataObj.age}
                photo={dataObj.photo}
            />
        ))}
        </>
    )
}

export default Crud
