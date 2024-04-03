package Employee.Creator.employee;

import java.util.Date;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;



public class UpdateEmployeeDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "First name cannot be empty")
	private String firstName;

	@Pattern(regexp = "^(?=\\S).*$", message = "Last name cannot be empty")
	private String lastName;
	
	@Email
	private String email;
	
	private Long mobileNumber;
	
	private String address;
	
	private Date startDate;
	
	private Date endDate;
	
	private boolean currentlyEmployed;
	
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

	public void setEmploymentType(Long employmentTypeId) {
		this.employmentType = employmentTypeId;
	}
	
	
}
