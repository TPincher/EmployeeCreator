package Employee.Creator.employmentType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CreateEmploymentTypeDTO {

	@NotBlank
	@NotNull
	@Size(min = 4, message = "Must be at least 4 characters long")
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
