import { Log } from '../types/log'

export function toActivityCalendarData(logs: Log[]) {
  return logs.map((log) => ({
    date: log.date,
    count: log.completed ? 1 : 0,
    level: log.completed ? 4 : 0, // 4 = cor mais forte, 0 = vazio/sem atividade
  }));
}