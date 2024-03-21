package Employee.Creator.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Employee.Creator.exceptions.ServiceValidationException;
import Employee.Creator.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;


@Service
@Transactional
public class EmployeeService {
	
	@Autowired EmployeeRepository repo;

public Employee createEmployee(CreateEmployeeDTO data) throws ServiceValidationException {
	
	ValidationErrors errors = new ValidationErrors();
	Employee newEmployee = new Employee();

	newEmployee.setFirstName(data.getFirstName().trim());
	newEmployee.setLastName(data.getLastName().trim());
	newEmployee.setEmail(data.getEmail());
	newEmployee.setMobileNumber(data.getMobileNumber());
	newEmployee.setAddress(data.getAddress());
	newEmployee.setStartdate(data.getStartDate());
	newEmployee.setEndDate(data.getEndDate());
	newEmployee.setCurrentlyEmployed(data.isCurrentlyEmployed());
	newEmployee.setEmploymentType(data.getEmploymentType());
	
	if(errors.hasErrors()) {
		throw new ServiceValidationException(errors);
		}
	
	return this.repo.save(newEmployee);
	}	
}
	
//	Long categoryId = data.getCategoryId();
//	Long statusId = data.getStatusId();
	
//	Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
//	if(maybeCategory.isEmpty()) {
//		errors.addError("category", String.format("Category with id %s does not exist", categoryId));
//	} else {
//		newTask.setCategory(maybeCategory.get());
//	}
//	
//	Optional<Status> maybeStatus = this.statusService.findById(statusId);
//	if(maybeStatus.isEmpty()) {
//		errors.addError("status", String.format("Status with id %s does not exist", statusId));
//	} else {
//		newTask.setStatus(maybeStatus.get());
//	}
