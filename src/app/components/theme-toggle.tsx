"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu"
import { Moon, Sun, Monitor} from "lucide-react"
import {  useTheme } from "next-themes"

type Theme = "light" | "dark" | "system"

export default function UserMenu() {
  const { setTheme } = useTheme()

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src="/placeholder-user.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            className="DropdownMenuSubTrigger"
            style={{ cursor: "pointer" }}
          >
            Theme
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              style={{ marginRight: "8px", width: "120px", height: "125px" }}
              className="DropdownMenuSubContent"
              sideOffset={2}
              alignOffset={-5}
            >
              <DropdownMenuItem
                className="DropdownMenuItem"
                onClick={() => handleThemeChange("light")}
                style={{ cursor: "pointer", display:'flex', alignItems:'center' }}
              >
                <Sun style={{marginRight:'8px'}}size={'18px'}/>
                Light
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="DropdownMenuItem"
                onClick={() => handleThemeChange("dark")}
                style={{ cursor: "pointer", display:'flex', alignItems:'center' }}
              >
                <Moon style={{marginRight:'8px'}}size={'18px'}/>
                Dark
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="DropdownMenuItem"
                onClick={() => handleThemeChange("system")}
                style={{ cursor: "pointer",display:'flex',alignItems:'center' }}
              >
                <Monitor style={{marginRight:'8px'}}size={'18px'}/>
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
