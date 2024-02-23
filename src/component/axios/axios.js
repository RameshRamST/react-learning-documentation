import { useState } from 'react'
import axios from 'axios';

export default function PersonAdd() {
const [name, setName] = useState();

  const handleChange = event => {
    setName({ name: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();


    axios.post(`https://jsonplaceholder.typicode.com/users`, { name: name })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }