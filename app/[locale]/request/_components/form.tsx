"use client";

import { useState, useRef } from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bold, Italic, Underline, Strikethrough, List, ListOrdered, Link} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Section, Container } from "@/components/craft";
import { CiImageOn } from "react-icons/ci";


export default function SubmitRequest() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 5,
  });

  const applyFormatting = (style: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = description.substring(start, end);

    if (!selectedText && style !== "image") return;

    let newText = "";
    switch (style) {
      case "bold":
        newText = `**${selectedText}**`;
        break;
      case "italic":
        newText = `*${selectedText}*`;
        break;
      case "underline":
        newText = `<u>${selectedText}</u>`;
        break;
      case "strikethrough":
        newText = `~~${selectedText}~~`;
        break;
      case "bullet":
        newText = `- ${selectedText}\n`;
        break;
      case "numbered":
        newText = `1. ${selectedText}\n`;
        break;
      case "link":
        const url = prompt("Enter the URL:");
        if (url) {
          newText = `[${selectedText}](${url})`;
        } else {
          return;
        }
        break;
      case "image":
        const imageUrl = prompt("Enter the image URL:");
        if (imageUrl) {
          newText = `![Image](${imageUrl})`;
        } else {
          return;
        }
        break;
      default:
        return;
    }

    const updatedDescription = description.substring(0, start) + newText + description.substring(end);
    setDescription(updatedDescription);

    // Reset cursor position after formatting
    setTimeout(() => {
      textarea.selectionStart = start;
      textarea.selectionEnd = start + newText.length;
    }, 0);
  };

  return (
    <Section className="min-h-screen bg-gray-50 dark:bg-[#1E1B2B]">
      <Container className="p-4 flex flex-col gap-8">
        <p className="text-light text-sm text-gray-500">MusicMinds / Submit Request</p>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Submit a{" "}
          <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
            request
          </span>
        </h3>
        <Card className="w-full border border-gray-200 rounded-xl">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <label htmlFor="email" className="text-lg font-medium text-gray-700">
                Your email address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter here..."
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="subject" className="text-lg font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter here..."
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="enquiry" className="text-lg font-medium text-gray-700">
                Nature of MusicMinds Enquiry <span className="text-red-500">*</span>
              </label>
              <Select value={enquiry} onValueChange={setEnquiry}>
                <SelectTrigger id="enquiry" className="w-full">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label htmlFor="description" className="text-lg font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-1 mb-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("bold")}
                  className="h-7 w-7"
                >
                  <Bold className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("italic")}
                  className="h-7 w-7"
                >
                  <Italic className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("underline")}
                  className="h-7 w-7"
                >
                  <Underline className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("strikethrough")}
                  className="h-7 w-7"
                >
                  <Strikethrough className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("bullet")}
                  className="h-7 w-7"
                >
                  <List className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("numbered")}
                  className="h-7 w-7"
                >
                  <ListOrdered className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("link")}
                  className="h-7 w-7"
                >
                  <Link className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => applyFormatting("image")}
                  className="h-7 w-7"
                >
                  <CiImageOn className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter here..."
                className="w-full min-h-[150px]"
                ref={textareaRef}
              />
            </div>

            <p className="text-base text-gray-500">
              Please enter the details of your request. A member of our support staff will respond as soon as possible.
            </p>

            <div className="space-y-4">
              <label htmlFor="phone" className="text-lg font-medium text-gray-700">
                Phone number (optional)
              </label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter here..."
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="attachments" className="text-lg font-medium text-gray-700">
                Attachments (optional)
              </label>
              <div
                {...getRootProps()}
                className="w-full h-20 border-2 border-dashed border-[#5243FE] bg-purple-50 rounded-lg flex items-center justify-center text-base text-gray-500 hover:bg-purple-100 transition-colors"
              >
                <input {...getInputProps()} />
                {files.length > 0 ? (
                  <p>{files.map((file) => file.name).join(", ")}</p>
                ) : (
                  "Add file or drop files here"
                )}
              </div>
              {files.length > 0 && (
                <ul className="list-disc pl-5">
                  {files.map((file, index) => (
                    <li key={index}>{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
                  ))}
                </ul>
              )}
            </div>

            <Button
              className=" text-white text-lg py-6"
              onClick={() => {
                console.log({ email, subject, enquiry, description, phone, files });
              }}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}