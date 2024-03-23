package Employee.Creator.employmentType;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmploymentTypeRepository extends JpaRepository<EmploymentType, Long> {

	Optional<EmploymentType> findById(Integer employmentTypeId);

}