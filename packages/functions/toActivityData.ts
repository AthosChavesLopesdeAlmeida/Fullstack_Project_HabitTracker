// packages/functions/toActivityData.ts
import { Log } from '../types/log'; // ajusta o import conforme sua estrutura

export function toActivityCalendarData(logs: Log[] = [], days: number = 365) {
  const logsByDate = new Map<string, Log>(
    logs.map((log) => [log.date.split('T')[0], log])
  );
  const result = [];

  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const current = new Date(today);
    current.setDate(current.getDate() - i);
    const dateStr = current.toISOString().split('T')[0];

    const log = logsByDate.get(dateStr);

    result.push({
      date: dateStr,
      count: log?.completed ? 1 : 0,
      level: log?.completed ? 4 : 0,
    });
  }

  return result;
}