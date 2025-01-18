import { useState } from "react";
import axios from "axios";

const Insert=()=>{
    const [input, setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api="http://localhost:3000/Student";
        axios.post(api,input).then((res)=>{
            alert("Data Save");
        });
    }
    return(

        <>
        <h1>Application Form</h1>
        Enter Roll No. <input type="text" name="rollno" onChange={handleInput} /><br/>
        Enter Roll No. <input type="text" name="stuname" onChange={handleInput} /><br/>
        Enter Roll No. <input type="text" name="city" onChange={handleInput} /><br/>
        Enter Roll No. <input type="text" name="course" onChange={handleInput} /><br/>
        Enter Roll No. <input type="text" name="fees" onChange={handleInput} /><br/>
        <button onClick={handleSubmit}>Data Save</button>
        </>
    )


}

export default Insert;