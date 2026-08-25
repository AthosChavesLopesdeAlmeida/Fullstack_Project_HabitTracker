import { Log } from "./log"

export type Habit = {
    name: string,
    description: string,
    id: string,
    createdAt: string,
    logs: Log[]
}