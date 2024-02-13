"use server";

import { ContactSchema } from "@/schemas";
import * as z from "zod";
import { sendMail } from "./mail.action";
export const contactMe = async (values: z.infer<typeof ContactSchema>) => {
  const validation = ContactSchema.safeParse(values);
  if (!validation.success) {
    return { error: "Invalid data" };
  }
  const { email, message, name } = validation.data;
  await sendMail({
    to: email,
    name: name,
    subject: "Contact Form Submission",
    body: message,
  });

  return { success: true };
};
