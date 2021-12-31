import axios from 'axios'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import ms from 'ms'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')
  try {
    console.log(process.env.SPOTIFY_REFRESH_TOKEN)
    const { data } = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      params: {
        grant_type: 'authorization_code',
        code: process.env.SPOTIFY_REFRESH_TOKEN,
        redirect_uri: 'http://localhost:3000/api/authorize',
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    const { data: userPlayData } = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    })
    console.log(userPlayData)
    return res.json(userPlayData)
  } catch (err) {
    console.log(err)
  }
}

export default handler
