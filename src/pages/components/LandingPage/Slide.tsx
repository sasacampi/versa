import "./Slide.css";
import SlideCentro from "../images/LandingPage/50OFF.png";

export function Slide() {
  function redirectProdutos(){
    window.location.href = '/produtos';
  }
  return (
    <div className="caixa_slide">
      <div className="slide_centro">
        <img onClick={redirectProdutos} className="img_slide" src={SlideCentro} alt="Slide do centro" />
      </div>
    </div>
  );
}
