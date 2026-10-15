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
import { Send, Loader2, Mail } from "lucide-react";
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
      useModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass =
    "rounded-xl border border-zinc-800 bg-[#202022] px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-zinc-600 focus:bg-[#252528] focus:outline-none focus:ring-1 focus:ring-zinc-600 sm:text-sm";

  return (
    <Dialog open={useModal.isOpen} onOpenChange={useModal.onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-xl border border-zinc-800 bg-[#1a191b] p-5 text-zinc-100 shadow-2xl sm:w-full sm:p-7">
        <DialogHeader className="text-left">
          <div className="flex items-start gap-3.5">
            <div className="rounded-lg border border-zinc-700/50 bg-zinc-800 p-2.5 text-zinc-300">
              <Mail className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <DialogTitle className="text-lg font-semibold text-zinc-100 sm:text-xl">
                Contact Me
              </DialogTitle>
              <DialogDescription className="text-xs text-zinc-400 sm:text-sm">
                Feel free to reach out for collaborations, questions, or opportunities.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-3.5 sm:space-y-4"
          >
            <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-3">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-1.5">
                    <FormLabel className="text-xs font-medium text-zinc-300 sm:text-sm">
                      Fullname
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-1.5">
                    <FormLabel className="text-xs font-medium text-zinc-300 sm:text-sm">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-xs font-medium text-zinc-300 sm:text-sm">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What is this about?"
                      {...field}
                      className={inputClass}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-xs font-medium text-zinc-300 sm:text-sm">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      {...field}
                      rows={4}
                      className="min-h-[100px] resize-none rounded-xl border border-zinc-800 bg-[#202022] p-3.5 text-xs text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-zinc-600 focus:bg-[#252528] focus:outline-none focus:ring-1 focus:ring-zinc-600 sm:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                disabled={isLoading}
                variant="custom"
                size="custom"
                className="flex w-full items-center justify-center gap-x-2 sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-zinc-500 sm:text-left">
                Or email directly:{" "}
                <a
                  href="mailto:alfalakhie@gmail.com"
                  className="text-zinc-300 underline underline-offset-2 transition-colors hover:text-white"
                >
                  alfalakhie@gmail.com
                </a>
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
