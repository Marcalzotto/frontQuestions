import { Box, Typography } from "@mui/material"
import GeneralQuestions from "../GeneralQuestions"

interface IProps{
    question:string[]
}


const CardGeneralQuestion = ({question}:IProps) => {
     return (<>
       <Box display="flex" flexDirection="column" alignItems="center">
            <Box pt={8} pb={4}>
              <Typography variant="h5">Panel Administracion</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{overflowY:"scroll", maxHeight:"800px"}}>
                 {/* {arrQ.map((q, index) => {
                    return <GeneralQuestions key={index} question={q.text}/>
                })} */}
            </Box>
        </Box>
    </>)
}

export default CardGeneralQuestion;