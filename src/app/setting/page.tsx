"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/setting/schema";
import { z } from "zod";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Setting() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      website: "",
      linkedin: "",
      industry: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const employeeCounts = ["1-10", "10-100", "100-500", "1000+"];
  const toggleGroupItemClasses =
    "rounded-full border border-black border-opacity-50 data-[state=on]:bg-black data-[state=on]:text-white m-1 mt-3 text-[14px]";
  return (
    <>
      <div className='flex'>
        <h1 className='scroll-m-20 text-[36px] font-extrabold font-semibold tracking-tight lg:text-5xl'>
          Settings
        </h1>
      </div>

      <div className='mt-10 flex'>
        <Tabs defaultValue='company_info' className='w-full sm:w-[400px]'>
          <TabsList className='w-full sm:w-auto'>
            <TabsTrigger className='w-full sm:w-auto' value='profile'>
              Your Profile
            </TabsTrigger>
            <TabsTrigger className='w-full sm:w-auto' value='company_info'>
              Company Info
            </TabsTrigger>
            <TabsTrigger className='w-full sm:w-auto' value='manange_seats'>
              Manage Seats
            </TabsTrigger>
            <TabsTrigger className='hidden sm:block' value='do_not_contact'>
              Do not Contact
            </TabsTrigger>
            <TabsTrigger className='hidden sm:block' value='integraions'>
              Integrations
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-[50px] flex flex-col-reverse justify-between gap-8 sm:flex-row'>
            <div className='flex items-center justify-around gap-6'>
              <Image
                src='/setting.svg'
                alt='setting'
                className='dark:invert'
                width={100}
                height={100}
                priority
              />

              <div className='flex flex-col justify-between gap-4'>
                <div className='flex gap-4'>
                  <Button variant='secondary'>Remove</Button>
                  <Button variant='outline'>Chagne Photo</Button>
                </div>

                <p className='scroll-m-20 text-[14px] font-extrabold font-medium tracking-tight text-[#17171F] text-opacity-50'>
                  or drag and drop (SVG, PNG, JPG)
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <Button variant='outline' className='w-full sm:w-auto'>
                Cancel
              </Button>
              <Button
                type='submit'
                variant='ghost'
                className='w-full sm:w-auto'
              >
                Save changes
              </Button>
            </div>
          </div>

          <div className='mt-20 grid w-full grid-cols-1 gap-10 sm:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company&apos;s Name</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Sixteen Inc.' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='website'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company&apos;s Website</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      id='website'
                      placeholder='https://sixteen.life/'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='linkedin'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company&apos;s Linkedin</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      id='linkedin'
                      placeholder='https://linkedin.com/sixteenlife'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='industry'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company&apos;s Industry</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      id='industry'
                      placeholder='Digital Wellbeing'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='employee'
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Employee Count</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type='single'
                      className='block'
                      value={value}
                      onValueChange={onChange}
                    >
                      {employeeCounts.map((employeeCount, index) => (
                        <ToggleGroupItem
                          className={toggleGroupItemClasses}
                          value={index.toString()}
                          aria-label={employeeCount}
                          key={index}
                        >
                          {employeeCount}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
}
