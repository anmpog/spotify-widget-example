import axios from 'axios'

export default async function getTopArtists() {
  const refreshTokenOptions = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        new Buffer.from(
          process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
        ).toString('base64'),
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token: process.env.REFRESH_TOKEN,
    },
  }

  try {
    const {
      data: { access_token },
    } = await axios.request(refreshTokenOptions)

    const { data } = await axios.get(
      'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=6',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    const formattedArtistsList = data.items.map((artist) => {
      return {
        artistName: artist.name,
        artistImages: artist.images,
        artistLinks: artist.external_urls,
      }
    })

    const successResponse = new Response(
      JSON.stringify({
        success: true,
        data: formattedArtistsList,
      }),
      {
        status: 200,
      }
    )

    return successResponse
  } catch (error) {
    const message = error.message
      ? error.message
      : 'Unknown error in getTopArtists'

    const failureResponse = new Response(
      JSON.stringify({
        success: false,
        message: message,
      }),
      {
        status: 500,
      }
    )

    return failureResponse
  }
}
