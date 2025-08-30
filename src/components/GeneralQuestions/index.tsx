import { Box, Typography } from "@mui/material"

interface IProps{
    question:string;
}

const GeneralQuestions = ({question}:IProps)=>{
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
                   
                </Box>
            </Box>
        </>)
} 

export default GeneralQuestions;