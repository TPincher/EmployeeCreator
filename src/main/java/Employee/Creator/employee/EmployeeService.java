package Employee.Creator.employee;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Employee.Creator.employmentType.EmploymentType;
import Employee.Creator.employmentType.EmploymentTypeService;
import Employee.Creator.exceptions.ServiceValidationException;
import Employee.Creator.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;



@Service
@Transactional
public class EmployeeService {
	
	@Autowired 
	EmployeeRepository repo;
	
	@Autowired
	private EmploymentTypeService employmentTypeService;
	
	@Autowired
	private ModelMapper mapper;
	
	public Employee createEmployee(CreateEmployeeDTO data) throws ServiceValidationException {
		
		ValidationErrors errors = new ValidationErrors();
		Employee newEmployee = mapper.map(data, Employee.class);
		Long employmentTypeId = data.getEmploymentType();
		
		Optional<EmploymentType> maybeEmploymentType = this.employmentTypeService.findById(employmentTypeId);
		if(maybeEmploymentType.isEmpty() ) {
			errors.addError("employmentType", String.format("Employment type with id %s does not exist", employmentTypeId));
		} else {
			newEmployee.setEmploymentType(maybeEmploymentType.get());
		}
		
		if(errors.hasErrors()) {
			throw new ServiceValidationException(errors);
			}
		
		return this.repo.save(newEmployee);
	}
	
	public List<Employee> getAll() {
			return this.repo.findAll();
	}
		
	public Optional<Employee> findById(Long id) {
		return this.repo.findById(id);
	}

	public Optional<Employee> updateById(@Valid UpdateEmployeeDTO data, Long id) throws ServiceValidationException {
		Optional<Employee> maybeEmployee = this.findById(id);
			if(maybeEmployee.isEmpty()) {
				return maybeEmployee;
			}
			
			Employee foundEmployee = maybeEmployee.get();
			Long employmentTypeId = data.getEmploymentType();
			ValidationErrors errors = new ValidationErrors();
			mapper.map(data, foundEmployee);
	
			if (data.getMobileNumber() != null) {
				foundEmployee.setMobileNumber(data.getMobileNumber());
			}
			
			Optional<EmploymentType> maybeEmploymentType = this.employmentTypeService.findById(employmentTypeId);
			if(maybeEmploymentType.isEmpty() ) {
				errors.addError("employmentType", String.format("Employment type with id %s does not exist", employmentTypeId));
			} else {
				foundEmployee.setEmploymentType(maybeEmploymentType.get());
			}
			
			if(errors.hasErrors()) {
				throw new ServiceValidationException(errors);
			}
			
		Employee updated = this.repo.save(foundEmployee);
		return Optional.of(updated);
	}

	public boolean deleteEmployeeById(Long id) {
		Optional<Employee> maybeEmployee = this.repo.findById(id);
		if(maybeEmployee.isEmpty()) {
			return false;
		}
		this.repo.delete(maybeEmployee.get());
		return true;
	}


}
