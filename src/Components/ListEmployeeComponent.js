import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import EmployeeService from '../services/EmployeeService'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const styles = theme => ({
    table: {
        minWidth: 700,
    },
    button: {
      margin: theme.spacing(1),
    },

    margin: {
      margin: theme.spacing(1)
    }
  
  });
  


class ListEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            employees:[]
         }
    }

    addEmployee =()=>{
      this.props.history.push('/add-employee/_add');
    }

    edit=(id)=>{

      this.props.history.push(`/add-employee/${id}`)

    }

    delete = (id)=>{
      EmployeeService.deleteEmployee(id).then( res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });

    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({employees:res.data})
        })

        console.log(this.state.employeesemployees)
    }

 

    render() { 

        const { classes } = this.props;
        return ( 
          <div>

          <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={this.addEmployee} >Add</Button>

            
           <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell >Employee First Name</StyledTableCell>
            <StyledTableCell >Employee Last Name</StyledTableCell>
            <StyledTableCell >Employee Email Id</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>

          
          {this.state.employees.map(employee => 
            <StyledTableRow key={employee.id}>
              <StyledTableCell  component="th" scope="row">
                {employee.firstName}
              </StyledTableCell>
              <StyledTableCell  >{employee.lastName}</StyledTableCell>
              <StyledTableCell >{employee.emailId}</StyledTableCell>
              

              <StyledTableCell>

              <IconButton aria-label="edit" className={classes.margin} onClick={()=>this.edit(employee.id)}>
          <EditIcon />
        </IconButton>

              <IconButton aria-label="delete" className={classes.margin} onClick={()=>this.delete(employee.id)}>
          <DeleteIcon />
        </IconButton>
              
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
         );
    }
}
 
export default withStyles(styles, { withTheme: true })(ListEmployees);



