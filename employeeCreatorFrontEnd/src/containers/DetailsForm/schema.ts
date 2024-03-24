import * as z from "zod";

export const schema = z.object({
  title: z.string().min(3, "error message here"),
  content: z.string().min(5, "error message here"),
  categoryId: z.coerce.number().int().gte(1),
  statusId: z.coerce.number().int().gte(1).lte(4),
});
