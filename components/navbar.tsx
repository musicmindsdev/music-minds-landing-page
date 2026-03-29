"use client";

// import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
// import Info from "@/public/info-circle.svg";
// import Infoh from "@/public/info-circleh.svg";
// import People from "@/public/people.svg";
// import Peopleh from "@/public/peopleh.svg";
// import Case from "@/public/briefcase.svg";
// import Caseh from "@/public/briefcaseh.svg";
// import Text from "@/public/text-block.svg";
// import Texth from "@/public/text-blockh.svg";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { DownloadAppButton } from "./download-app-button";

export default function NavBar() {
  const t = useTranslations();

  // const [isOpen, setIsOpen] = useState(false);
  // const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  // const [hoverStates, setHoverStates] = useState({
  //   aboutUs: false,
  //   career: false,
  //   culture: false,
  //   press: false,
  // });

  // const handleOpenChange = (open: boolean) => {
  //   setIsOpen(open);
  //   if (!open) setExpandedMenu(null);
  // };
  //
  // const handleMouseEnter = (item: keyof typeof hoverStates) => {
  //   setHoverStates((prev) => ({ ...prev, [item]: true }));
  // };
  //
  // const handleMouseLeave = (item: keyof typeof hoverStates) => {
  //   setHoverStates((prev) => ({ ...prev, [item]: false }));
  // };

  // const toggleMenu = (menu: string) => {
  //   setExpandedMenu(expandedMenu === menu ? null : menu);
  // };

  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50]">
      <div className="flex justify-between w-[100%] relative backdrop-filter backdrop-blur-lg bg-card border-white border-opacity-20 rounded-xl p-2 shadow-lg">
     <div className="min-[825px]:hidden">
      <LanguageSwitcher />
      </div>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:w-10 max-[825px]:h-10">
            <Link href="/" className="pl-2">
              <Image src={Logo} className="w-15 h-15" alt="" />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Image src={Logo} alt="" className="w-15 h-15" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex-col justify-between">
              <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                {/*<Button*/}
                {/*  variant="ghost"*/}
                {/*  className="w-full flex items-start justify-start"*/}
                {/*  onClick={() => toggleMenu("company")}*/}
                {/*>*/}
                {/*  <div className="flex items-center space-x-2">*/}
                {/*    <span>{t("navbar.company")}</span>*/}
                {/*  </div>*/}
                {/*  {expandedMenu === "company" ? (*/}
                {/*    <MdKeyboardArrowUp className="h-5 w-5 text-gray-500" />*/}
                {/*  ) : (*/}
                {/*    <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />*/}
                {/*  )}*/}
                {/*</Button>*/}
                {/*{expandedMenu === "company" && (*/}
                {/*  <div className="pl-2 space-y-2">*/}
                {/*    <Link href="/about">*/}
                {/*      <Button*/}
                {/*        variant="ghost"*/}
                {/*        className="w-full flex items-start justify-start space-x-2"*/}
                {/*      >*/}
                {/*        <Image src={Infoh} alt="" className="h-6 w-6" width={24} height={24} />*/}
                {/*        <span>{t("navbar.about_us")}</span>*/}
                {/*      </Button>*/}
                {/*    </Link>*/}
                {/*    /!*<Link href="/career">*!/*/}
                {/*    /!*  <Button*!/*/}
                {/*    /!*    variant="ghost"*!/*/}
                {/*    /!*    className="w-full flex items-start justify-start space-x-2"*!/*/}
                {/*    /!*  >*!/*/}
                {/*    /!*    <Image src={Caseh} alt="" className="h-6 w-6" width={24} height={24} />*!/*/}
                {/*    /!*    <span>{t("navbar.career")}</span>*!/*/}
                {/*    /!*  </Button>*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*    <Link href="/culture">*/}
                {/*      <Button*/}
                {/*        variant="ghost"*/}
                {/*        className="w-full flex items-start justify-start space-x-2"*/}
                {/*      >*/}
                {/*        <Image src={Peopleh} alt="" className="h-6 w-6" width={24} height={24} />*/}
                {/*        <span>{t("navbar.culture")}</span>*/}
                {/*      </Button>*/}
                {/*    </Link>*/}
                {/*    <Link href="/press">*/}
                {/*      <Button*/}
                {/*        variant="ghost"*/}
                {/*        className="w-full flex items-start justify-start space-x-2"*/}
                {/*      >*/}
                {/*        <Image src={Texth} alt="" className="h-6 w-6" width={24} height={24} />*/}
                {/*        <span>{t("navbar.press")}</span>*/}
                {/*      </Button>*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*)}*/}
                {/*<DialogClose asChild>*/}
                {/*  <Link href="/features">*/}
                {/*    <Button*/}
                {/*      variant="ghost"*/}
                {/*      className="w-full flex items-center justify-start space-x-2"*/}
                {/*    >*/}
                {/*      <span>{t("navbar.features")}</span>*/}
                {/*    </Button>*/}
                {/*  </Link>*/}
                {/*</DialogClose>*/}
                <DialogClose asChild>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start space-x-2"
                    >
                      <span>{t("navbar.home")}</span>
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href="/about">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start space-x-2"
                    >
                      <span>{t("navbar.about_us")}</span>
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href="/contact">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start space-x-2"
                    >
                      <span>{t("navbar.contact")}</span>
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href="/culture">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start space-x-2"
                    >
                      <span>{t("navbar.culture")}</span>
                    </Button>
                  </Link>
                </DialogClose>
                <DialogClose asChild>
                  <Link href="/press">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-start space-x-2"
                    >
                      <span>{t("navbar.press")}</span>
                    </Button>
                  </Link>
                </DialogClose>
                {/*<DialogClose asChild>*/}
                {/*  <Link href="/how-it-works">*/}
                {/*    <Button*/}
                {/*      variant="ghost"*/}
                {/*      className="w-full flex items-center justify-start space-x-2"*/}
                {/*    >*/}
                {/*      <span>{t("navbar.how_it_works")}</span>*/}
                {/*    </Button>*/}
                {/*  </Link>*/}
                {/*</DialogClose>*/}
              </div>
              <div className="bg-[#F2F1FF] absolute bottom-0 left-0 w-full flex justify-center items-center p-4">
                <DialogClose asChild>
                  <div className="w-full">
                    <DownloadAppButton />
                  </div>
                </DialogClose>
              </div>
            </div>
          </SheetContent>
        </Dialog>

        <div className="flex items-center gap-2 max-[825px]:hidden">
          {/*<DropdownMenu onOpenChange={handleOpenChange}>*/}
          {/*  <DropdownMenuTrigger>*/}
          {/*    <Button variant="ghost">*/}
          {/*      {t("navbar.company")}{" "}*/}
          {/*      {isOpen ? (*/}
          {/*        <MdKeyboardArrowUp className="h-5 w-5 text-gray-500" />*/}
          {/*      ) : (*/}
          {/*        <MdKeyboardArrowDown className="h-5 w-5 text-gray-500" />*/}
          {/*      )}*/}
          {/*    </Button>*/}
          {/*  </DropdownMenuTrigger>*/}
          {/*  <DropdownMenuContent className="p-5 border-8 border-[#EEEDFF] rounded-lg">*/}
          {/*    <DropdownMenuItem*/}
          {/*      onMouseEnter={() => handleMouseEnter("aboutUs")}*/}
          {/*      onMouseLeave={() => handleMouseLeave("aboutUs")}*/}
          {/*    >*/}
          {/*      <Link href="/about" className="flex gap-2">*/}
          {/*        <Image src={hoverStates.aboutUs ? Infoh : Info} alt="" className="pr-1" />*/}
          {/*        <div className="flex-col items-center">*/}
          {/*          <h4 className="font-bold">{t("navbar.about_us")}</h4>*/}
          {/*          <p>{t("navbar.about_us_description")}</p>*/}
          {/*        </div>*/}
          {/*      </Link>*/}
          {/*    </DropdownMenuItem>*/}
          {/*    /!*<DropdownMenuItem*!/*/}
          {/*    /!*  onMouseEnter={() => handleMouseEnter("career")}*!/*/}
          {/*    /!*  onMouseLeave={() => handleMouseLeave("career")}*!/*/}
          {/*    /!*>*!/*/}
          {/*    /!*  <Link href="/career" className="flex gap-2">*!/*/}
          {/*    /!*    <Image src={hoverStates.career ? Caseh : Case} alt="" className="pr-1" />*!/*/}
          {/*    /!*    <div className="flex-col items-center">*!/*/}
          {/*    /!*      <h4 className="font-bold">{t("navbar.career")}</h4>*!/*/}
          {/*    /!*      <p>{t("navbar.career_description")}</p>*!/*/}
          {/*    /!*    </div>*!/*/}
          {/*    /!*  </Link>*!/*/}
          {/*    /!*</DropdownMenuItem>*!/*/}
          {/*    <DropdownMenuItem*/}
          {/*      onMouseEnter={() => handleMouseEnter("culture")}*/}
          {/*      onMouseLeave={() => handleMouseLeave("culture")}*/}
          {/*    >*/}
          {/*      <Link href="/culture" className="flex gap-2">*/}
          {/*        <Image src={hoverStates.culture ? Peopleh : People} alt="" className="pr-1" />*/}
          {/*        <div className="flex-col items-center">*/}
          {/*          <h4 className="font-bold">{t("navbar.culture")}</h4>*/}
          {/*          <p>{t("navbar.culture_description")}</p>*/}
          {/*        </div>*/}
          {/*      </Link>*/}
          {/*    </DropdownMenuItem>*/}
          {/*    <DropdownMenuItem*/}
          {/*      onMouseEnter={() => handleMouseEnter("press")}*/}
          {/*      onMouseLeave={() => handleMouseLeave("press")}*/}
          {/*    >*/}
          {/*      <Link href="/" className="flex gap-2">*/}
          {/*        <Image src={hoverStates.press ? Texth : Text} alt="" className="pr-1" />*/}
          {/*        <div className="flex-col items-center">*/}
          {/*          <h4 className="font-bold">{t("navbar.press")}</h4>*/}
          {/*          <p>{t("navbar.press_description")}</p>*/}
          {/*        </div>*/}
          {/*      </Link>*/}
          {/*    </DropdownMenuItem>*/}
          {/*  </DropdownMenuContent>*/}
          {/*</DropdownMenu>*/}
          <Link href="/">
            <Button variant="ghost">{t("navbar.home")}</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">{t("navbar.about_us")}</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">{t("navbar.contact")}</Button>
          </Link>
          <Link href="/culture">
            <Button variant="ghost">{t("navbar.culture")}</Button>
          </Link>
          <Link href="/press">
            <Button variant="ghost">{t("navbar.press")}</Button>
          </Link>
          {/*<Link href="/">*/}
          {/*  <Button variant="ghost">{t("navbar.how_it_works")}</Button>*/}
          {/*</Link>*/}
          <DownloadAppButton
            className="w-auto"
            buttonClassName="h-9 min-h-0 w-auto shrink-0 px-3 text-white flex items-center justify-center gap-1.5 whitespace-nowrap"
            iconClassName="text-sm"
          />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
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
  );
});
ListItem.displayName = "ListItem";