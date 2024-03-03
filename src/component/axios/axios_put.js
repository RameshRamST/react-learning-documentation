import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PersonUpdate() {
  const [id, setId] = useState();
  const [personData, setPersonData] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  // This function is used to handle changes in the input fields
  const handleChange = event => {
    const { name, value } = event.target;
    setPersonData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // This useEffect hook is triggered when the component mounts
  useEffect(() => {
    // Assuming you want to make a PUT request here
    // For example, to update a person's details based on their ID
    const updatePerson = () => {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, personData)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => console.error(error));
    };

    // Call the function if id is set
    if (id) { 
      updatePerson();
    }
  }, [id, personData]); // Dependencies to trigger the effect

  return (
    <div>
      <form>
        <label>
          Person ID:
          <input type="number" name="id" onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        {/* Add other fields as needed */}
      </form>
    </div>
  );
}
