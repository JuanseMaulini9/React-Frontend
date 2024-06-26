export interface IKata {
  _id: string;
  name: string;
  description: string;
  level: string;
  intents: number;
  stars: number;
  creator: string;
  solution: string;
  participants: string[];
}
