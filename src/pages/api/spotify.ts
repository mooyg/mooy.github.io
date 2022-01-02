import axios from 'axios'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import ms from 'ms'

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
    const { data: userPlayData } = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    })
    userPlayData.length === 0 ? res.json({ notPlaying: true }) : res.json(userPlayData)
  } catch (err) {
    console.log(err)
  }
}

export default handler
