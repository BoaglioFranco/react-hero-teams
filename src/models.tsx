export interface HeroListResponse {
  response: 'success' | 'error';
  "results-for"?: string;
  results?: Hero[] | null;
  error?: string;
}
export interface Hero {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}
export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}
export interface Biography {
  "full-name": string;
  "alter-egos": string;
  aliases?: string[] | null;
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}
export interface Appearance {
  gender: string;
  race: string;
  height?: string[] | null;
  weight?: string[] | null;
  "eye-color": string;
  "hair-color": string;
}
export interface Work {
  occupation: string;
  base: string;
}
export interface Connections {
  "group-affiliation": string;
  relatives: string;
}
export interface Image {
  url: string;
}
