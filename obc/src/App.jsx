/* eslint-disable react/no-unescaped-entities */

import { Fragment } from "react"
import Card from "./components/Card/index.jsx"
import posterZero from "./assets/poster.jpg"
import posterOne from "./assets/poster-2.jpg"
import posterTwo from "./assets/poster-3.jpg"

export default function App() {

  return (
    <Fragment>
      <Card poster={posterZero} title="Alien I (1979)" paragraph="In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma."/>
      <Card poster={posterOne}  title="Alien II (1986)" paragraph="After floating in space for 57 years, Lt. Ripley's (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony."
      />
      <Card poster={posterTwo} title="Alien III (1992)" paragraph="Ellen Ripley (Sigourney Weaver) is the only survivor when she crash lands on Fiorina 161, a bleak wasteland inhabited by former inmates of the planet's maximum security prison. Once again, Ripley must face skepticism and the alien as it hunts down the prisoners and guards. Without weapons or modern technology of any kind, Ripley leads the men into battle against the terrifying creature."/>
 

    </Fragment>
  )
}