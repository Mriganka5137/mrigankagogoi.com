"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactSchema } from "@/schemas";
import { Input } from "./ui/input";
import { contactMe } from "@/lib/actions/contact.action";
import { toast } from "sonner";

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    try {
      const response = await contactMe(data);
      form.reset();
      toast.success("Message sent successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-6 w-1/2 max-laptop:w-full mx-auto text-secondary-foreground"
      >
        <div className=" space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    {...field}
                    type="text"
                    placeholder="Your name"
                    className="  p-5 text-xl w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    {...field}
                    type="email"
                    placeholder="Your email"
                    className="p-5 text-xl w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="">Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={form.formState.isSubmitting}
                    placeholder="Your Message to me"
                    {...field}
                    className="mt-5 min-h-52 h-52 p-5 text-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={form.formState.isSubmitting}
          variant="default"
          className="w-full text-lg  bg-customGreen hover:bg-green-700"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
