'use client'
import { api } from "@/lib/api";
import { ApiError } from "@/lib/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Habit } from '../../../../packages/types/habit'
import { toActivityCalendarData } from '../../../../packages/functions/toActivityData'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group"
import { ActivityCalendar } from 'react-activity-calendar'

import { Plus, Trash2 } from "lucide-react";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"


import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card"


export default function Home() {
  const [isCreationFormOpen, setIsCreationFormOpen] = useState(false)

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [habitName, setHabitName] = useState('')
  const [habitDescription, setHabitDescription] = useState('')

  const [habits, setHabits] = useState<Habit[]>()  

  const router = useRouter()

  const handleCreateHabit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await api('/habits/create', {
        method: 'POST',
        body: { habitName, habitDescription }
      })
      setIsCreationFormOpen(false)
      setHabitDescription('')
      setHabitName('')
      await fetchHabits()
    } catch (err) {
        if (err instanceof ApiError) {
        setError(err.message);
        } else {
        setError('Connection was not possible');
        }
    } finally {
      setIsLoading(false)
    }
  }

  const deleteHabit = async (id: string) => {
    setError('')

    try {
      await api('/habits/delete', {
        method: 'DELETE',
        body: { id }
      })
      await fetchHabits()
    } catch (err) {
        if (err instanceof ApiError) {
        setError(err.message);
        } else {
        setError('Connection was not possible');
        }  
    }
  }

  const fetchHabits = async () => {
    setError('')
    setIsLoading(true)

    try {
      const { data } = await api<Habit[]>('/habits/fetch', {
        method: 'GET'
      })

      setHabits(data)
    } catch (err) {
        if (err instanceof ApiError) {
        setError(err.message);
        } else {
        setError('Connection was not possible');
        }  
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex flex-row justify-between items-center px-20 py-6 bg-zinc-900">
        <h1 className="font-bold text-4xl text-white">Habit Tracker</h1>

        <div className="flex items-center gap-3">
          <Button className="cursor-pointer" onClick={() => setIsCreationFormOpen(!isCreationFormOpen)}>
            <Plus className="w-4 h-4 mr-2" /> Start a new habit
          </Button>
          <ButtonGroup>
            <Button variant={"destructive"} className="cursor-pointer">Delete account</Button>
            <Button variant={"secondary"} className="cursor-pointer">Log out</Button>
          </ButtonGroup>
        </div>
      </header>

      <main className="grid gird-col-1 gap-10">

        <Dialog open={isCreationFormOpen} onOpenChange={setIsCreationFormOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Start a new habit</DialogTitle>
              <DialogDescription>Create a new habit and give it a description if you want</DialogDescription>
            </DialogHeader>

            <form onSubmit={(e) => handleCreateHabit(e)}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Habit name</Label>
                  <Input id="name" required onChange={(e) => setHabitName(e.target.value)} value={habitName} type="text"/>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="desc">Habit description</Label>
                  <Input id="desc" onChange={(e) => setHabitDescription(e.target.value)} value={habitDescription} type="text" max={150}/>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit">Create</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {isLoading && <h1 className="">Loading...</h1>}

        {habits && <h1 className="text-5xl">You have not created any habits! Create one using the button on the header</h1>}

        {habits?.map((habit: Habit) => (
          <Card key={habit.id}>
            <CardHeader>
              <CardTitle>{habit.name}</CardTitle>
              <CardDescription>Criado em: {new Date(habit.createdAt).toLocaleDateString()}</CardDescription>
            </CardHeader>

            <CardContent>
              <ActivityCalendar data={toActivityCalendarData(habit.logs)}/>
            </CardContent>

            <CardFooter className="grid gird-col-1 gap-6">
              <CardDescription>{habit.description}</CardDescription>
              <Button variant={"destructive"} onClick={() => deleteHabit(habit.id)}><Trash2 className="w-4 h-4 mr-2"/> Delete habit</Button>
            </CardFooter>
          </Card>
        ))}
        
      </main>
    </div>
  );
}
