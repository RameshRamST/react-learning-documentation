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
//   import { useState } from 'react'
// import axios from 'axios';

// export default function PersonAddput() {
// const [name, setName] = useState();
// const axios = require("axios");

//   const handleChange = event => {
//     setName({ name: event.target.value });
//   }

//   const handleSubmit = event => {
//     event.preventDefault();


    
// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//   userId: 1,
//   id: 1,
//   title: 'New Title',
//   body: 'New Body Text',
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//   }

  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }