import { ScatterBoxLoader } from "react-awesome-loaders";

const Loader = ()=>{
  return (
    <div className="loader center">

    <ScatterBoxLoader 
        className={"loader"}
        boltColor={"#6366F1"}
        backgroundBlurColor={"#E0E7FF"}
    />
    </div>

  )
}

export default Loader