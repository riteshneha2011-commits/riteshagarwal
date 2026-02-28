import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { z } from "zod";
import { Linkedin, Youtube, Instagram, Facebook, Send, Loader2 } from "lucide-react";
import { useContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

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
import { Button } from "@/components/ui/button";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export function Contact() {
  const { mutate, isPending } = useContact();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error sending message",
          description: error.message,
        });
      }
    });
  }

  const socials = [
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/riteshagarwal-iitian/", color: "hover:text-blue-500 hover:bg-blue-50" },
    { name: "YouTube", icon: <Youtube className="w-6 h-6" />, url: "https://www.youtube.com/@PhysicsByRitesh", color: "hover:text-red-500 hover:bg-red-50" },
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/ritesh.bhopal/", color: "hover:text-pink-600 hover:bg-pink-50" },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, url: "https://www.facebook.com/ritesh.agarwal2", color: "hover:text-blue-600 hover:bg-blue-50" },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Let's Connect</h2>
            <p className="text-zinc-600 mb-10 text-lg">
              Whether you're a student seeking guidance, an educator looking to collaborate, or interested in AI education tools—I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-zinc-900 mb-4">Find me on social media</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 text-zinc-600 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-sm text-zinc-500">Based in</p>
              <p className="font-medium text-zinc-900">Bhopal, Madhya Pradesh, India</p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl shadow-zinc-200/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-zinc-50/50 border-zinc-200 h-12" {...field} />
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
                          <Input placeholder="john@example.com" type="email" className="bg-zinc-50/50 border-zinc-200 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help you?" 
                          className="min-h-[160px] bg-zinc-50/50 border-zinc-200 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-base rounded-xl"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
