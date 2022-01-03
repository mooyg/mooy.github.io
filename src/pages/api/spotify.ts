import axios from 'axios'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import ms from 'ms'
import { Spotify, Spotifysong } from '../../interfaces/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')
  const { data } = await axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    },
  })
  try {
    const { data: userPlayData } = await axios.request<Spotify | string>({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    })

    if (typeof userPlayData === 'string') return res.json({ notPlaying: true })
    const { data: songData } = await axios.request<Spotifysong>({
      method: 'GET',
      url: `https://api.spotify.com/v1/tracks/${userPlayData.item.id}`,
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    })

    res.json({
      songURL: userPlayData.item.externalUrls.spotify,
      songName: userPlayData.item.name,
      songArtists: userPlayData.item.artists.map((artist) => ({
        artistName: artist.name,
        artistURL: artist.external_urls.spotify,
      })),
      songImage: songData.album.images[1],
    })
  } catch (err) {
    console.log(err)
  }
}

export default handler
