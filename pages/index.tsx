import { view } from "@forge/bridge"
import { useEffect } from "react"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  useEffect(() => {
    view.getContext().then((context) => {
      console.log(context)
    })
  } ,[])

  return null
}
