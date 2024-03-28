import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EmployeeService from '../services/EmployeeService';

const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    

export default class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state={

            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''

        }
    }

    componentDidMount(){

        if(this.state.id ==='_add'){
            return
        }
        else{
            EmployeeService.getEmployeeById(this.state.id)
            .then(res=>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }

    }

    onChangeValue=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }

    saveOrsubmit =(event)=>{

        event.preventDefault();

       let {firstName, lastName, emailId}= this.state;

       let employee={ firstName, lastName, emailId};

       if(this.state.id === '_add'){

       EmployeeService.createEmployee(employee)
       .then(res=>{
           this.props.history.push("/employees")
           
       })
    }
    else{
         EmployeeService.updateEmployee(employee, this.state.id)
         .then((res)=>{
             this.props.history.push('/employees')
         })
    }
        


    }

    getTitle=()=>{
        if(this.state.id === '_add'){

           return <h2 style={headerStyle}>Sign Up</h2>


        }
        else{

          return  <h2 style={headerStyle}>Update</h2>

        }
    }
    render() {
        return (
            <div style={{marginTop:30, marginBottom:50}}>
                 <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                   {

                       this.getTitle()
                   }
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                <TextField fullWidth label='First Name' value={this.state.firstName} name='firstName' onChange={this.onChangeValue} placeholder="Enter your name"  />
                    <TextField fullWidth label='Last Name' value={this.state.lastName} name='lastName' onChange={this.onChangeValue} placeholder="Enter your Last Name" />
                    
                    <TextField fullWidth label='Email' value={this.state.emailId} name='emailId' onChange={this.onChangeValue} placeholder="Enter your email" />
                    {/* <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' onClick={this.saveOrsubmit} variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
                
            </div>
        )
    }
}
