export interface Anime {
  mal_id: number,
  title: string,
  images: {
    webp:  {
      image_url:  string,
      small_image_url: string,
      large_image_url: string,
    }
  },
  synopsis: string
}

export interface GetAnimeResponse {
  data: Array<Anime>
  pagination: {
    last_visible_page: number,
    has_next_page: boolean
  }
}

export interface GetAnimeDetailResponse {
  data: Anime
}
