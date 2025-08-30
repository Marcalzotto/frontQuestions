import { Box, Button, TextField, Typography } from "@mui/material";
import "./Form.module.scss";
import { JSX, useState } from "react";

const Form = () => {

    const [pregunta, setPregunta] = useState("")
    const onChange = (e:any)=>{
        setPregunta(e.target.value);
    }

    const enviarPregunta = () => {
        //enviar pregunta a la url y setear vacio
        console.log("Enviamos la pregunta valid: "+pregunta);
        setPregunta("");

        fetch("https://api-node-i03v.onrender.com/v1/questions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"text":pregunta, "from":"anon"})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            console.log('Success:', data); // Log the parsed JSON data from the server
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors during the fetch operation
        });
    }

    const helperText = ():JSX.Element | string => {
        if(pregunta.length > 150){
            return <Typography variant="subtitle1" color="error">Tu pregunta es muy larga, por favor acortala.</Typography>
        }
        return "";
    } 

    return(
    <>
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box pt={8}><Typography variant="h4">Hace tu pregunta</Typography></Box>
            <Box pt={8}><Typography variant="h5">Descripcion breve</Typography></Box>
            <Box pt={2}>
            <TextField  
                id="outlined-multiline-static"
                name="txtpregunta"
                multiline
                rows={6}
                defaultValue=""
                sx={{
                    borderRadius: '12px',    
                    '& .MuiOutlinedInput-root': {
                    height: 150,
                    width: 250,
                    padding: '0 12px',
                    borderRadius: '12px',
                    },
                }}
                error={pregunta.length > 150}
                value={pregunta}
                onChange={onChange}
                />
            </Box>
            <Box>
                <Typography variant="subtitle1" color="error">{pregunta.length > 150 ? "Tu pregunta es muy larga, por favor acortala.":""}</Typography>
            </Box>
            <Box pt={4}><Button variant="contained" color="primary" style={{minWidth:"250px", borderRadius:"10px"}} disabled={pregunta.length === 0 || pregunta.length > 150} onClick={enviarPregunta}><Typography variant="button">Enviar</Typography></Button></Box>
        </Box>
    </>
    )
}

export default Form;