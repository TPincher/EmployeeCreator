package Employee.Creator.employmentType;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import Employee.Creator.employee.Employee;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "employmentTypes")
public class EmploymentType {
	
	public EmploymentType() {
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String name;
	
	@OneToMany(mappedBy = "employmentType")
	@JsonIgnoreProperties("employmentType")
	private List<Employee> employees;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String employmentTypeName) {
		this.name = employmentTypeName;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

}
