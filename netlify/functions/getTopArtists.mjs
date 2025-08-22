export default function getTopArtists() {
  const data = {
    success: true,
    data: {
      artists: [
        'Faux-sensitive yoga-bro music',
        'Taylor Swift is just OK',
        'Bland-Radio Friendly Popstar',
      ],
    },
  }

  const successResponse = new Response(
    JSON.stringify({ success: true, data: data }),
    { status: 200 }
  )

  return successResponse
}
