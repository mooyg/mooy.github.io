import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: 'http://localhost:3000/api/authorize',
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => {
    console.log(res.data)
  })
}
