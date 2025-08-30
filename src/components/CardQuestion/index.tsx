import { Box, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import "./styles.css";

interface ICardProps{
    question:string;
    send: Function;
    remove: Function; 
    id:string;
}

const CardQuestion = ({ question, send, remove, id }: ICardProps) =>{
return  (<>
            <Box pt={0} pb={0} mb={4} sx={{ width: "90%" }} className="container">
                <Box
                  className="divBox"
                  display="flex"
                  flexDirection="column"
                  sx={{ p: 0, minHeight: 30, maxHeight:150 }}
                >
                {/* Texto arriba */}
                    <Typography variant="subtitle1" pl={1} pr={1} pt={1}>
                     {question}
                    </Typography>

                    {/* Íconos abajo a la derecha */}
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                      mt="auto"   // 🔑 Esto empuja el bloque hacia el fondo
                      gap={1}
                      mr={1}
                      mb={1}     // separación entre iconos
                    >
                      <span onClick={()=> send(id)}> <CheckIcon color="success" sx={{fontSize:30}} /></span>
                      <span onClick={()=> remove(id)}><ClearIcon color="error" sx={{fontSize:30}}/></span>
                    </Box>
                </Box>
            </Box>
        </>)
} 

export default CardQuestion;