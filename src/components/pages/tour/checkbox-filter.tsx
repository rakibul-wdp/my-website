"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { P } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FC } from "react";

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type Item = {
  id: string;
  label: string;
  data: number;
};

type IFilter = {
  heading: string;
  items: Item[];
};

export const CheckboxFilter: FC<IFilter> = ({ heading, items }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:bg-[#EBEEF266] lg:border lg:border-[#E5E5E5] lg:rounded lg:pt-[29px] lg:pr-5 lg:pb-10 lg:pl-[18px] w-full"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-2 lg:mb-[14px]">
                <FormLabel>
                  <P variant="P1" className="font-bold">
                    {heading}
                  </P>
                </FormLabel>
              </div>

              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {items.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/1">
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="w-full flex flex-row items-start lg:items-center lg:space-x-[11px] space-y-0"
                            >
                              <FormControl className="hidden lg:block">
                                <Checkbox
                                  className="border-2 border-secondary/30"
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <div
                                className={`flex items-center justify-start lg:justify-between w-full border rounded-[14px] py-[7px] px-3 cursor-pointer ${
                                  field.value?.includes(item.id)
                                    ? "bg-accent/80 border-primary/30"
                                    : "bg-transparent border-secondary/30"
                                }`}
                                onClick={() => {
                                  const isSelected = field.value?.includes(
                                    item.id
                                  );
                                  field.onChange(
                                    isSelected
                                      ? field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      : [...field.value, item.id]
                                  );
                                }}
                              >
                                <P variant="P1">{item.label}</P>
                                <P variant="P1">({item.data})</P>
                              </div>
                            </FormItem>
                          );
                        }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="hidden lg:block">
                <div className="w-fit lg:w-full flex lg:flex-col items-start justify-center gap-[9px]">
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="w-full flex flex-row items-start lg:items-center lg:space-x-[11px] space-y-0"
                          >
                            <FormControl className="hidden lg:block">
                              <Checkbox
                                className="border-2 border-secondary/30"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="flex items-center justify-start lg:justify-between w-full bg-accent/80 lg:bg-transparent border lg:border-none border-primary/30 rounded-[14px] lg:rounded-none py-[7px] lg:py-0 px-3 lg:px-0">
                              <FormLabel className="font-normal">
                                <P variant="P1">{item.label}</P>
                              </FormLabel>
                              <P variant="P1">({item.data})</P>
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <P variant="P1" className="text-primary mt-[15px] hidden lg:block">
          Show more
        </P>
      </form>
    </Form>
  );
};
