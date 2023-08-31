import {Container,Button,TextField,RadioGroup,Radio,
    FormControl,FormControlLabel,FormLabel} from '@mui/material'
    import React,{useState} from 'react'
    import { Send } from '@mui/icons-material';
    import styled from '@emotion/styled';
    
    
    // const ButtonStyle= styled('Button')({
    //   color: 'white',
    //   backgroundColor: 'green',
    //   marginTop:16,
    //   '&:hover':{backgroundColor:'white',color:'black'}
    
    // });
    
    // const ButtonStyle=styled('Button')({
    //   fontSize:20,
    //   color:'violet',
    //   paddingTop:8,
    //   paddingBottom:8,
    //   backgroundColor:'skyblue',
    //   border:'rounded'
    // })
    

    // const ButtonStyle = styled(Button)(({ theme }) => ({
      
    //    paddingTop: theme.spacing(2),
    //    paddingBottom: theme.spacing(2),
    //    fontSize:10,
    //    color:'violet',
    //    border:'rounded',
    //    backgroundColor:'red',
      
      
    // }));




    // const TextFieldStyle=styled(TextField)({
    //   marginTop:20,
    //   marginBottom:20,
    //   display:'block',
    //   width:'100%'
    // })





    const TextFieldStyle = styled(TextField) ({
      width: '100%',
       marginTop:'20px',
       marginBottom: '20px',
       
      
    });
    
    const FormControlStyle=styled(FormControl)({
      display:'block',
      marginTop:20,
      marginBottom:20
    })
    
    
    const Create =()=> {
    const [title,setTitle]=useState('');
    const [detail,setDetail]=useState('')
    const [titleError,setTitleError]=useState(false)
    const [detailError,setDetailError]=useState(false)
    const [category,setCategory]=useState('todos')
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      setTitleError(false)
      setDetailError(false)
    
    
      if(title == ''){
      
        setTitleError(true)
      }
    
      if(detail== ''){
        setDetailError(true)
      }
      if(title && detail){
        console.log(title,detail,category)
      }
    
    
    }
       return(
            <Container>
                
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                 <TextFieldStyle variant='outlined' color='primary' fullWidth label='title'
               error={titleError} onChange={(e)=>setTitle(e.target.value)}/>
    
                 <TextFieldStyle variant='outlined' multiline rows={6} color='primary' fullWidth error={detailError} label='Detail' onChange={(e)=>setDetail(e.target.value)} />
              
            
                <FormControlStyle>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <FormControlLabel value="todos" control={<Radio/>} label="todos"/>
                        <FormControlLabel value="work" control={<Radio/>} label="work"/>
                        <FormControlLabel value="option"control={<Radio/>} label="reminder"/>
                    </RadioGroup>
                </FormControlStyle>
        
                <Button type='submit' endIcon={<Send/>} variant='outlined' color='primary'>Submit</Button> 
             </form>
            </Container>
       )
    }

    export default Create