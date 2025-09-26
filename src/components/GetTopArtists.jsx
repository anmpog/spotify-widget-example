import { useState } from 'preact/hooks'

function GetTopArtists() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    try {
      setLoading(true)
      const res = await fetch('/api/getTopArtists')
      const json = await res.json()

      if (json.success) {
        setData(json.data)
      } else {
        setError(json.message)
      }
    } catch (error) {
      setError('Client Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '550px' }}>
      <button onClick={handleFetch}>Fetch Data</button>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>There was an error fetching data: {error}</p> : null}
      {data ? (
        <div>
          {data.map((artist) => {
            return (
              <a href={artist.artistLinks.spotify}>
                <h2>{artist.artistName}</h2>
                <img
                  src={artist.artistImages[1].url}
                  alt={`${artist.artistName} image`}
                />
              </a>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default GetTopArtists
