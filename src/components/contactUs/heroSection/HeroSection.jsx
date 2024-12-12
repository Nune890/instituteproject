import style from "./HeroSection.module.css"
import line from "../../../assets/homeImg/Line 1.png"

const HeroSection = () => {
  return (
    <div className={style.mainBox}>
    <h1>CONTACT US</h1>
    <img src={line} alt="img" />
    </div>
  )
}

export default HeroSection
