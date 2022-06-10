import { useRouter } from "next/router"
import React from "react"

import ThreeTierPricing from "../../components/Tiers"
import SocialProfileSimple from "../../components/ArtistProfile/SingleHero"

import { useGetUserQuery } from "../../src/generated/graphql";

const artistDetails = [
  {
    id: 1,
    handle: "@osees",
    name: "Osees",
    artistImg: "https://media.pitchfork.com/photos/5c92bae8f3672356b4df6e72/4:3/w_524,h_393,c_limit/Oh%20Sees-GettyImages-688811658.jpg",
    description:" Musician, Songwriter and Artist. PM for work inquires or me in your posts"
  }
]

const Artist = () => {
  const router = useRouter()
  const { artistId } = router.query

  const { data } = useGetUserQuery({
    variables: {
      id: localStorage.getItem('userId')
    }
  })
  
  React.useEffect(() => {
    console.log(data)
  }, [data])

  // return <p>Artist: {artistId}</p>

  return (
    <div>
      <SocialProfileSimple 
        id= "1"
        handle =  "@osees"
        name = "Osees"
        artistImg = "https://media.pitchfork.com/photos/5c92bae8f3672356b4df6e72/4:3/w_524,h_393,c_limit/Oh%20Sees-GettyImages-688811658.jpg"
        description = "Musician Songwriter and Artist PM for work inquires or me in your posts"
      />
      <ThreeTierPricing />
    </div>
  )
}

export default Artist
