import { ICrewMemberResponse } from './i-crew-member-response';
import { IGuestStarResponse } from './i-guest-star-response';

export interface IEpisodeResponse {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  crew: ICrewMemberResponse[];
  guest_stars: IGuestStarResponse[];
  watched?: boolean;
}
