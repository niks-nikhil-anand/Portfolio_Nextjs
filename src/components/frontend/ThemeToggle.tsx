"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        id="theme-mode"
      />
      <Moon className="h-4 w-4" />
      <Label htmlFor="theme-mode" className="sr-only">
        Toggle theme
      </Label>
    </div>
  )
}