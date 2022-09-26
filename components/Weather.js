import { useEffect, useState } from "react"
import weaterData from "../services/openweathermap"

const Weater = () =>{
  const [weater, setWeater] = useState('')

  useEffect(() => {
    weaterData.then(({temp}) => {
      setWeater(temp)
    })
  }, [])

  return (
    <>
      {weater}
    </>
  )
}

export default Weater