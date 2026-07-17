import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, BookOpen } from "lucide-react";
import { initTheme, toggleTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    initTheme();
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>BUNSY Academy</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/courses"
            className="rounded-md px-3 py-1.5 hover:bg-accent"
            activeProps={{ className: "rounded-md px-3 py-1.5 bg-accent font-medium" }}
          >
            บทเรียน
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-1.5 hover:bg-accent"
            activeProps={{ className: "rounded-md px-3 py-1.5 bg-accent font-medium" }}
          >
            เกี่ยวกับ
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => {
              toggleTheme();
              setDark(document.documentElement.classList.contains("dark"));
            }}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} BUNSY Academy · เสริมสร้างศักยภาพทางการเงินเพื่อการตัดสินใจทางธุรกิจ</p>
    </footer>
  );
}
