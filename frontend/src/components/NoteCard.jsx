import React from 'react'
import {Card,CardHeader,CardContent, IconButton, Typography,Avatar} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { pink,purple,green } from '@mui/material/colors';
import styled from '@emotion/styled';






const AvatarStyle = styled(Avatar)`
  backgroundColor: ${(note) => {
    if (note.category === 'work') {
      return 'pink';
    } else if (note.category === 'remainder' || note.category === 'todos') {
      return 'purple';
    } else {
      return 'green'; // Default background color
    }
  }};
`;







const NoteCard = ({note ,handleDelete}) => {

    
  return (
    <div>
        <Card elevation={2} id={note.id}>
            <CardHeader 
              avatar={<AvatarStyle >{note.category.charAt(0).toUpperCase()}</AvatarStyle>}
               action={
                <IconButton aria-label="settings" onClick={()=>handleDelete(id)}>
                  <DeleteOutlineIcon/>
                </IconButton>
              }
              title={note.title}
              subheader={note.category}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
            
        </Card>
    </div>
  )
}

export default NoteCard
