import Weater from "../components/Weather"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline"> Tulancingo </h1>
      <h2>
        el clima en tulancingo es de <Weater/> grados
      </h2>
    </>

  )
}
