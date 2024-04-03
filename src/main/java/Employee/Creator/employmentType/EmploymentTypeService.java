package Employee.Creator.employmentType;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import Employee.Creator.exceptions.ServiceValidationException;
import Employee.Creator.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class EmploymentTypeService {

	@Autowired EmploymentTypeRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	
	public EmploymentType createEmploymentType(CreateEmploymentTypeDTO data) throws ServiceValidationException {
		
		ValidationErrors errors = new ValidationErrors();
		
		EmploymentType newEmploymentType = mapper.map(data, EmploymentType.class);
		
		if(errors.hasErrors()) {
			throw new ServiceValidationException(errors);
			}
		
		return this.repo.save(newEmploymentType);
	}
	
	public List<EmploymentType> getAll() {
		return this.repo.findAll();
	}

	public Optional<EmploymentType> findById(Long id) {
		return this.repo.findById(id);
	}

	public Optional<EmploymentType> updateEmploymentTypeById(@Valid UpdateEmploymentTypeDTO data, Long id) throws ServiceValidationException {
		Optional<EmploymentType> maybeEmploymentType = this.findById(id);
			if(maybeEmploymentType.isEmpty()) {
				return maybeEmploymentType;
			}
			
			EmploymentType foundEmploymentType = maybeEmploymentType.get();
			ValidationErrors errors = new ValidationErrors();
			mapper.map(data, foundEmploymentType);
			
			if(errors.hasErrors()) {
				throw new ServiceValidationException(errors);
			}
			
		EmploymentType updated = this.repo.save(foundEmploymentType);
		return Optional.of(updated);
	}

	public boolean deleteEmploymentTypeById(Long id) {
		Optional<EmploymentType> maybeEmploymentType = this.repo.findById(id);
		if(maybeEmploymentType.isEmpty()) {
			return false;
		}
		this.repo.delete(maybeEmploymentType.get());
		return true;
	}
	
}
