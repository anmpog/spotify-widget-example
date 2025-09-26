function GetTopArtists() {
  async function handleFetch() {
    try {
      const res = await fetch('/api/getTopArtists')
      const json = await res.json()

      if (json.success) {
        console.log(json.data)
      } else {
        console.log('Something weird happened')
      }
    } catch (error) {
      throw new Error('There was an error fetching your data')
    }
  }
  return (
    <>
      <button onClick={handleFetch}>Fetch Data</button>
    </>
  )
}

export default GetTopArtists
