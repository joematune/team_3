import { useRouter } from "next/router"
import React from "react"

const Artist = () => {
  const router = useRouter()
  const { artistId } = router.query
  return <p>Artist: {artistId}</p>
}

export default Artist
