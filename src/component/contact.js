import { useForm } from 'react-hook-form';


function Contact() {
    function newForm(data) {
        console.log(data);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <center>
                <h4>React-Hook-Form</h4>
                <form onSubmit={handleSubmit(newForm)} className='hook-form'>
                    <table >


                        <tbody>
                            <tr><td><label>
                                enter name
                            </label></td>
                                <td><input type="text"{...register("name", { required: true })}></input>
                                    {errors.name && <span>name must required</span>}</td></tr>
                            <tr><td><label>
                                Mother name
                            </label></td>
                                <td><input type="text"{...register("mob.number", { required: true })}></input></td></tr>
                            <tr><td><label>
                                Father name
                            </label></td>
                                <td><input type="text"{...register("f.name", { required: true })}></input></td></tr>
                            <tr><td><label>
                                Address
                            </label></td>
                                <td><input type="text area"{...register("mob.number", { required: true })}></input></td></tr>
                            <tr><td><label>
                                Date of Birth
                            </label></td>
                                <td><input type="date"{...register("DOB")}></input></td></tr>
                            <tr><td><label>
                                Mobile number
                            </label></td>
                                <td><input type="number"{...register("M.number")}></input></td></tr>
                            <tr><td><label>
                                Email
                            </label></td>
                                <td><input type="email"{...register("email")}></input></td></tr>

                        </tbody>

                    </table >
                    <button type="submit" >submit</button>
                </form >
            </center>
        </>
    );
}
export default Contact;