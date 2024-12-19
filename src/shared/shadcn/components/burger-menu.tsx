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
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col bg-red-700">
          <HeaderMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
