import { ThemeProvider } from "@material-tailwind/react";
import Weater from "../components/Weather"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-green-800">
        <h1 className="text-3xl font-bold underline"> Tulancingo </h1>
        <h2>
          <Weater />
        </h2>
      </div>
    </ThemeProvider>
  )
}
