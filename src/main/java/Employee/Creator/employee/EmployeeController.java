package Employee.Creator.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping
	public ResponseEntity<Employee> createTask(@Valid @RequestBody CreateEmployeeDTO data) throws ServiceValidationException {
		Employee createdEmployee = this.employeeService.createEmployee(data);
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
}
