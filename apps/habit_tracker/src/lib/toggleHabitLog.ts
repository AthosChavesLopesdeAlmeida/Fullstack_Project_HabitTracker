import { api } from "@/lib/api";
import { ApiError } from "@/lib/api";

export async function toggleHabitLog(habitId: string, date: string, currentlyCompleted: boolean) {
  const endpoint = currentlyCompleted ? '/habit-logs/mark-undone' : '/habit-logs/mark-done';
  await api(endpoint, { method: 'POST', body: { habitId, date } });
}