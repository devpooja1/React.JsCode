import { useState,useEffect } from "react";
import axios from "axios";


const Display=()=>{
    const [mydata, setMyData]=useState([]);

    const loadData=()=>{
        let api="http://localhost:3000/Student";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMyData(res.data);
        }).catch((res)=>{
            console.log(err);
        });
    }

    useEffect(()=>{
        loadData();
    },[]);
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.stuname}</td>
                <td>{key.city}</td>
                <td>{key.course}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>
        )
    });
    return(

        <>
        
        <h1>Display Page</h1>
        <table width="400" border="1" bgcolor="yellow">
            <tr>

                <th>Roll no.</th>
                <th>Name</th>
                <th>City</th>
                <th>Course</th>
                <th>Fees</th>
            </tr>
            {ans}
            </table> 
        </>
    )
}

export default Display;