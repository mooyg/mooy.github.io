export interface Spotify {
  timestamp: number
  context: Context
  progressMS: number
  item: Item
  currentlyPlayingType: string
  actions: Actions
  isPlaying: boolean
}

export interface Actions {
  disallows: Disallows
}

export interface Disallows {
  resuming: boolean
}

export interface Context {
  externalUrls: ExternalUrls
  href: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Item {
  album: Album
  artists: Artist[]
  availableMarkets: string[]
  discNumber: number
  durationMS: number
  explicit: boolean
  externalIDS: ExternalIDS
  externalUrls: ExternalUrls
  href: string
  id: string
  isLocal: boolean
  name: string
  popularity: number
  previewURL: string
  trackNumber: number
  type: string
  uri: string
}

export interface Album {
  albumType: string
  artists: Artist[]
  availableMarkets: string[]
  externalUrls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  releaseDate: Date
  releaseDatePrecision: string
  totalTracks: number
  type: string
  uri: string
}

export interface Artist {
  externalUrls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface ExternalIDS {
  isrc: string
}
export interface Spotifysong {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface Album {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface ExternalIDS {
  isrc: string
}
