package Employee.Creator.employee;

import java.util.Date;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class CreateEmployeeDTO {

	@NotBlank
	@NotNull
	private String firstName;
	
	@NotBlank
	@NotNull
	private String lastName;
	
	@NotBlank
	@NotNull
	@Email
	private String email;
	
	@NotNull
	@Positive
	private Long mobileNumber;
	
	@NotBlank
	@NotNull
	private String address;
	
	private Date startDate;
	
	private Date endDate;
	
	@NotNull
	private boolean currentlyEmployed;
	
	@NotNull
	private Long employmentType;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public boolean isCurrentlyEmployed() {
		return currentlyEmployed;
	}

	public void setCurrentlyEmployed(boolean currentlyEmployed) {
		this.currentlyEmployed = currentlyEmployed;
	}

	public Long getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(Long employmentType) {
		this.employmentType = employmentType;
	}
	
	
	
	
}
