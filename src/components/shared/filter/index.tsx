"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchInputField } from "./search-input-field";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "",
  }),
});

export const SearchForm: FC = () => {
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col lg:flex-row items-center justify-center gap-[39px] lg:gap-[10px] xl:gap-8 lg:py-[23px] lg:px-[10px] xl:px-6 2xl:px-10"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <SearchInputField />
            </FormItem>
          )}
        />
        <Button
          variant="default"
          size="exLg"
          type="submit"
          className="w-full lg:w-fit"
        >
          <Image
            src="/icons/white-search.svg"
            width={24}
            height={24}
            alt="location"
            className=""
          />
          Search
        </Button>
      </form>
    </Form>
  );
};
