package Employee.Creator.config;

import org.modelmapper.Conditions;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import Employee.Creator.employee.Employee;
import Employee.Creator.employee.UpdateEmployeeDTO;

@Configuration
public class ModelMapperConfig {

	@Bean
	public ModelMapper modelMapper() {
	    ModelMapper mapper = new ModelMapper();
	    mapper.getConfiguration().setSkipNullEnabled(true);
	    mapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
	    mapper.typeMap(String.class, String.class).setConverter(new LowerCaseConverter());
	    
//	    Is this needed? Play around later and see if it can be removed.
	    mapper.typeMap(UpdateEmployeeDTO.class, Employee.class).addMappings(
	            m -> m.using(new StringTrimConverter()).map(UpdateEmployeeDTO::getFirstName, Employee::setFirstName));

	    return mapper;
	}
	
	private class StringTrimConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}
	private class LowerCaseConverter implements Converter<String, String> {
		
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}

}
