import axios from 'axios';

const EMPLOYEE_API_URL = "http://localhost:9090/api/employee";

const EMPLOYEE_API_ADD= "http://localhost:9090/api/employee/add";

class EmployeeService{

    getEmployee(){
         return axios.get(EMPLOYEE_API_URL);
    }

    createEmployee(employee){

        return axios.post(EMPLOYEE_API_ADD, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_URL+'/'+employeeId);
    }

    updateEmployee(employee, employeeId){
        return  axios.put(EMPLOYEE_API_URL+'/'+employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_URL + '/' + employeeId);
    }


}

export default new EmployeeService()