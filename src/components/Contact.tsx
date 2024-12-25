"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Title from "./Title";

interface ContactInfo {
  icon: typeof MapPin;
  title: string;
  details: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Address:",
    details: ["Ethiopia", "Adama"],
  },
  {
    icon: Phone,
    title: "Phone:",
    details: ["+2519 0874 8131", "+2519 8477 0356"],
  },
  {
    icon: Mail,
    title: "Email:",
    details: ["Naolkasinet@gmail.com"],
  },
];

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Please fill out this field";
    if (!data.email) newErrors.email = "Please fill out this field";
    if (!data.subject) newErrors.subject = "Please fill out this field";
    if (!data.message) newErrors.message = "Please fill out this field";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Here you would typically send the data to your API
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      event.currentTarget.reset();
      setErrors({});
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section className="py-16 px-4 bg" id="contact">
      <Title title="Contact" />
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-600/10 p-3 h-fit rounded-[10px]">
                    <Icon className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className={`${
                    errors.name ? "border-red-500" : ""
                  } border-white/50 rounded`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className={`${
                    errors.email ? "border-red-500" : ""
                  } border-white/50 rounded`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                className={`${
                  errors.subject ? "border-red-500" : ""
                } border-white/50 rounded`}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Write Your Message*</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                className={`${
                  errors.message ? "border-red-500" : ""
                } border-white/50 rounded`}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-teal-400 hover:bg-teal-400/70 text-black font-medium rounded-[10px]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
