'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group"

import { Plus } from "lucide-react";

import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex flex-row justify-between items-center px-20 py-6 bg-zinc-900">
        <h1 className="font-bold text-4xl text-white">Habit Tracker</h1>

        <div className="flex items-center gap-3">
          <Button className="cursor-pointer">
            <Plus className="w-4 h-4 mr-2" /> Start a new habit
          </Button>
          <ButtonGroup>
            <Button variant={"destructive"} className="cursor-pointer">Delete account</Button>
            <Button variant={"secondary"} className="cursor-pointer">Log out</Button>
          </ButtonGroup>
        </div>
      </header>

      <main>
        
      </main>
    </div>
  );
}
