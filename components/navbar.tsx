"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {  MenuIcon } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ModeToggle } from "./mode-toggle"
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Logo from "@/public/Musicmindlogo.svg"
import Image from "next/image"
import Info from "@/public/info-circle.png"
import People from "@/public/people.png"
import Case from "@/public/briefcase.png"
import Text from "@/public/text-block.png"
import Book from "@/public/book.png"
import Book1 from "@/public/book1.png"
import Youtube from "@/public/youtube.png"
import Message from "@/public/message-question.png"
import { MdKeyboardArrowDown,  MdKeyboardArrowUp } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
    };

    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] ">
            <div className="flex justify-between  w-[100%]  relative backdrop-filter backdrop-blur-lg bg-card border-white border-opacity-20 rounded-xl p-2 shadow-lg ">
            <NavigationMenu >
                    <NavigationMenuList className="max-[825px]:w-10 max-[825px]:h-10">
                        <Link href="/" className="pl-2">
                        <Image src={Logo} className="w-15 h-15" alt={""}/>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle><Image src={Logo} alt={""} className="w-15 h-15"/></SheetTitle>
                            <SheetDescription>
                                Scale and launch products with expert developers, on-demand, at a flat monthly fee
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full">Company</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full">Learn</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full">Features</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full">Contact</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="ghost" className="w-full">How it works</Button>
                                </Link>
                            </DialogClose>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Dialog>
              
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <DropdownMenu onOpenChange={handleOpenChange}>
                        <DropdownMenuTrigger>
                    <Link href="/">
                        <Button variant="ghost">Company   {isOpen ? (
            <MdKeyboardArrowUp className="h-5 w-5 text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />
          )}</Button>
                    </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-5 border-8 border-[#EEEDFF] rounded-lg">
                        <DropdownMenuItem >
                    <Image src={Info} alt="" className="pr-1"/>    <div className="flex-col items-center"> <h4 className="font-bold ">About Us</h4> <p>Learn more about the team</p></div>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem >
                        <Image src={Case} alt="" className="pr-1"/>        <div className="flex-col items-center"> <h4 className="font-bold ">Career</h4> <p>Become one of us</p></div>
                       </DropdownMenuItem>
                        
                        <DropdownMenuItem >
                        <Image src={People} alt="" className="pr-1"/>      <div className="flex-col items-center">  <h4 className="font-bold "> Culture</h4> <p>Learn what makes us who we are</p></div>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem >
                        <Image src={Text} alt="" className="pr-1"/>      <div className="flex-col items-center">  <h4 className="font-bold ">Press</h4> <p>All you need to know</p></div>              
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu onOpenChange={handleOpenChange}>
                    <DropdownMenuTrigger>
      <Link href="/">
        <Button variant="ghost">
          Learn
          {isOpen ? (
            <MdKeyboardArrowUp className="h-5 w-5 text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />
          )}
        </Button>
      </Link>
    </DropdownMenuTrigger>
                   <DropdownMenuContent className="p-5 border-8 border-[#EEEDFF] rounded-lg">
                    <DropdownMenuItem>
                        <Image src={Book} alt="" className="pr-1"/> <div className="flex-col items-center"><h4 className="font-bold">Blog</h4> <p>Articles to help guide you</p></div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Image src={Youtube} alt="" className="pr-1"/> <div className="flex-col items-center"><h4 className="font-bold">YouTube</h4> <p>Tutorials to guide you</p></div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Image src={Book1} alt="" className="pr-1"/> <div className="flex-col items-center"><h4 className="font-bold">Help & Guide Desk</h4> <p>Communicate with support for guidance</p></div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Image src={Message} alt="" className="pr-1"/> <div className="flex-col items-center"><h4 className="font-bold">FAQ&apos;s </h4> <p>Questions to help clarify things</p></div>
                    </DropdownMenuItem>
                   </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <Link href="/">
                        <Button variant="ghost">Features</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost">Contact</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost">How it worksss</Button>
                    </Link>
                    <Link href="/">
                        <Button className="text-white"><FaApple/> | <IoLogoGooglePlaystore/> Download App</Button>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"