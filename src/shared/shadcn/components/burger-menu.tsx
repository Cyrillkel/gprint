import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/shadcn/ui/sheet";

import HeaderMenu from "@/shared/components/menu-nav";

export default function BurgerMenu() {
  return (
    <Sheet>
      <SheetHeader>
        <SheetTitle className="sr-only">Edit profile</SheetTitle>
      </SheetHeader>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col">
          <HeaderMenu isMobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}
