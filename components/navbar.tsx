"use client"
import { cn } from "@/lib/utils"
import { BookOpen, MenuIcon } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
// import ModeToggle from "../mode-toggle"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ModeToggle } from "./mode-toggle"
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";


export function NavBar() {

    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
            <div className="flex justify-between  w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
            <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:w-10 max-[825px]:h-10">
                        <Link href="/" className="pl-2">
                        <img src='/Musicmindlogo.svg' className="w-15 h-15"/>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle><img src='/Musicmindlogo.svg'/></SheetTitle>
                            <SheetDescription>
                                Scale and launch products with expert developers, on-demand, at a flat monthly fee
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Company</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Learn</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Features</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Contact</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">How it works</Button>
                                </Link>
                            </DialogClose>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Dialog>
              
                <div className="flex items-center gap-2 max-[825px]:hidden">
                    <Link href="/">
                        <Button variant="ghost">Company</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost">Learn</Button>
                    </Link>
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