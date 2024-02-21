import { useState } from "react";
import { useForm } from "react-hook-form"

function Home() {
    const { register, handleSubmit, } = useForm();

    // const [newdata, setNewData] = useState('');
    const [todolist, setTodoList] = useState([]);
    const [isStriked, setIsStriked] = useState([]);

    function sendingData(data) {
        if (data) {
            console.log(data.name)
            setTodoList([...todolist, data.name]);
            // setIsStriked([...isStriked, false]);
        }
    }
    // function setTodoValue(e) {
    //     setNewData(e.target.value);
    //     console.log(newdata);
    // }
    function remove(index) {
        let newlist = todolist.filter((item, i) => { return (i !== index) });
        setTodoList(newlist);
    }
    function jojo(index) {

        console.log("working");
        console.log('its working2');
        let newStriked = [...isStriked];
        newStriked[index] = !newStriked[index];
        setIsStriked(newStriked);
    }


    return (
        <> <h1 >enter</h1><form onSubmit={handleSubmit(sendingData)}>
            <input type="text" id="textvalues"{...register("name")} />
            <button type="submit">add</button></form>


            <ul>
                {todolist.map((totodo, index) => {
                    return (
                        <li key={index} style={{ textDecoration: isStriked[index] ? "line-through" : "" }}>
                            <input type="checkbox" id="boxing" onClick={() => jojo(index)}></input>
                            {totodo}
                            <button onClick={() => { remove(index) }}>remove</button>
                        </li>
                    );
                })}
            </ul>

        </>
    )


}
export default Home;
