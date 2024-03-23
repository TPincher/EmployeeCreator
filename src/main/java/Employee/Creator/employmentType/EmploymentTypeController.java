package Employee.Creator.employmentType;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Employee.Creator.exceptions.NotFoundException;
import Employee.Creator.exceptions.ServiceValidationException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/employmenttype")
public class EmploymentTypeController {

	@Autowired
	private EmploymentTypeService employmentTypeService;
	
	@PostMapping
	public ResponseEntity<EmploymentType> createEmployee(@Valid @RequestBody CreateEmploymentTypeDTO data) throws ServiceValidationException {
		EmploymentType createdEmploymentType = this.employmentTypeService.createEmploymentType(data);
		return new ResponseEntity<>(createdEmploymentType, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<EmploymentType>> getAllEmploymentTypes() {
		List<EmploymentType> allEmploymentTypes = this.employmentTypeService.getAll();
		return new ResponseEntity<>(allEmploymentTypes, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmploymentType> getEmploymentTypeById(@PathVariable Long id) throws NotFoundException {
		Optional<EmploymentType> maybeEmploymentType = this.employmentTypeService.findById(id);
		EmploymentType foundEmploymentType = maybeEmploymentType.orElseThrow(() -> new NotFoundException(EmploymentType.class, id));
		return new ResponseEntity<>(foundEmploymentType, HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<EmploymentType> updateEmploymentTypeById(@Valid @RequestBody UpdateEmploymentTypeDTO data, @PathVariable Long id) throws NotFoundException, ServiceValidationException {
		Optional<EmploymentType> maybeUpdatedEmploymentType = this.employmentTypeService.updateEmploymentTypeById(data, id);
		EmploymentType updatedEmploymentType = maybeUpdatedEmploymentType.orElseThrow(() -> new NotFoundException(EmploymentType.class, id));
		return new ResponseEntity<>(updatedEmploymentType, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<EmploymentType> deleteEmploymentTypeById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.employmentTypeService.deleteEmploymentTypeById(id);
		if(!deleted) {
			throw new NotFoundException(EmploymentType.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
