import * as z from "zod";

export const schema = z.object({
  firstName: z.string().min(1, "First name can't be empty"),
  lastName: z.string().min(1, "Last name can't be empty"),
  email: z.string().min(3, "error message here"),
  mobileNumber: z.coerce
    .number()
    .int()
    .gte(400000000, "mobile number is 04xx xxx xxx format")
    .lte(499999999, "mobile number is 04xx xxx xxx format"),
  address: z.string().min(3, "error message here"),
  startDate: z.string().min(5, "error message here"),
  endDate: z.string().min(5, "error message here"),
  employmentType: z.coerce.number().int().gte(1),
  currentlyEmployed: z.boolean(),
});
