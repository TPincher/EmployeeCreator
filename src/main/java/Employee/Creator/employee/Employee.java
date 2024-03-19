package Employee.Creator.employee;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "employees")
public class Employee {
	
	public Employee() {
		
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column (unique = true)
	private String email;
	
	@Column (unique = true)
	private String mobileNumber;
	
	@Column (unique = true)
	private String address;
	
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date startdate;
	
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	
	@Column
	private Boolean currentlyEmployed;
	
	@Column
	private int employmentType;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getStartdate() {
		return startdate;
	}

	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Boolean getCurrentlyEmployed() {
		return currentlyEmployed;
	}

	public void setCurrentlyEmployed(Boolean currentlyEmployed) {
		this.currentlyEmployed = currentlyEmployed;
	}

	public int getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(int employmentType) {
		this.employmentType = employmentType;
	}

}
