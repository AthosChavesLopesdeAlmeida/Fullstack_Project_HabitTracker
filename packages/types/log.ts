type ISODateString = `${number}-${number}-${number}`;

export type Log = {
  date: ISODateString;
  completed: boolean;
};