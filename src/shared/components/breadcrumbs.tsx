import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400">
      <Link
        href={items[0]?.href || "/"}
        className="flex items-center hover:text-cyan-400 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-600" />
          {index === items.length - 1 ? (
            <span className="text-cyan-400 font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-cyan-400 transition-colors text-gray-300"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
