"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useModalStore } from "@/hooks/use-modal-store";
import { sendMessage } from "@/lib/send-message";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  fullname: z.string().min(1, {
    message: "Name field has to be filled.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email field has to be filled.",
    })
    .email("This is not a valid email."),
  subject: z.string().min(1, {
    message: "Subject field has to be filled.",
  }),
  message: z.string().min(1, {
    message: "Message field has to be filled.",
  }),
});

export default function ContactDialog() {
  const useModal = useModalStore();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await sendMessage(values);
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Dialog open={useModal.isOpen} onOpenChange={useModal.onClose}>
      <DialogContent className="h-fit w-full border-[#151415] bg-[#151415] text-[#ffffff]">
        <DialogHeader>
          <DialogTitle className="mb-5 text-base font-bold sm:text-xl">
            Send a message
          </DialogTitle>
          <DialogDescription className="text-[#ffffff]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 sm:space-y-4"
              >
                <div className="flex gap-x-3">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-xs sm:text-sm">
                          Fullname
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your fullname"
                            {...field}
                            className="text-xs text-black focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
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
                      <FormItem className="flex-1">
                        <FormLabel className="text-xs sm:text-sm">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            {...field}
                            className="text-xs text-black focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs sm:text-sm">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your subject"
                          {...field}
                          className="text-xs text-black focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
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
                      <FormLabel className="text-xs sm:text-sm">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="text-xs text-black focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="flex gap-x-2 bg-[#2d2c2d] text-xs hover:bg-[#2d2c2d]/70 sm:text-sm"
                  disabled={isLoading}
                >
                  <Send className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
