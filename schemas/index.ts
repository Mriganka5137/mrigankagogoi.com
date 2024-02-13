import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(10, { message: "Atleast 10 characters!" }).max(1000, {
    message: "Message must be at most 1000 characters long",
  }),
});
