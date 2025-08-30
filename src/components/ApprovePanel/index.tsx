import { Box, Typography, useScrollTrigger } from "@mui/material";
import CardQuestion from "../CardQuestion";
import { QuestionRemoteI } from "../../models/QuestionRemoteI";
import { useEffect, useState } from "react";

const ApproverPanel = ()=> {

    
        const largeQuestion = "Porque las flacas son malas y vivoras y las gordas son mas buenas, pero gordas? y porque los perros ladran y porque los gatos no ladram? y porque todo";

    // const questionArr : QuestionRemoteI[] = [
    //     {id:1, text: "pregunta 1"},
    //     {id:2, text: "pregunta 2"},
    //     {id:3, text: "pregunta 3"},
    //     {id:4, text: "pregunta 4"},
    //     {id:5, text: "pregunta 5"},
    //     {id:6, text: largeQuestion}
       
    // ]
const [arrQ, setArrQ] = useState<QuestionRemoteI[]>([])
 useEffect(()=>{

     fetch("https://api-node-i03v.onrender.com/v1/questions/pending", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Success:', data); // Log the parsed JSON data from the server
            setArrQ(data);
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors during the fetch operation
        });

 },[])

 const send = (id:string) => {
    const arr = arrQ.filter(q => q.id !== id);
    setArrQ(arr);
    console.log("send: "+id);
    console.log("send: "+arr);
 }

 const remove = (id:string) => {
     const arr = arrQ.filter(q => q.id !== id);
    setArrQ(arr);
    console.log("remove: "+id);
    console.log("remove: "+arr);
 }
    
    console.log("La pregunta esta mide: "+largeQuestion.length);

    return <>
       <Box display="flex" flexDirection="column" alignItems="center">
            <Box pt={8} pb={4}>
              <Typography variant="h5">Panel Administracion</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{overflowY:"scroll", maxHeight:"800px"}}>
                 {arrQ.map((q, index) => {
                    return <CardQuestion key={index} question={q.text} send={send} remove={remove} id={q.id}/>
                })}
            </Box>
        </Box>
    </>
}

export default ApproverPanel;