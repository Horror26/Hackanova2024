import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Dropdown from "./Dropdown";
import {
  career,
  defaultValues,
  gender,
  married,
  relationship,
} from "@/constants";
import DatePicker from "react-datepicker";
import Image from "next/image";
import { formSchema } from "@/lib/validator";
import { createUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

export default function DetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await createUser(values);
      if (res) {
        form.reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Username"
                  className="input-field"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add other FormFields here for each input */}
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={form.formState.isSubmitting}
        className="button col-span-2 w-full"
      >
        {form.formState.isSubmitting ? "Submitting..." : "Register"}
      </Button>
    </Form>
  );
}
