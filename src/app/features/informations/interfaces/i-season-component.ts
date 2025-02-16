export interface ISeasonsComponent {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string; // URL do poster ou `null` se não houver
  season_number: number;
  watched: boolean;
}
