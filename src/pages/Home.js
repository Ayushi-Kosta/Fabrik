import { Link } from "react-router-dom";
import background from "./space.gif";
const Home = () => {
  return (
    <div className="section">
    <div className="button-div"  style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100%",
					height: "100%",
				}}>
      <div className="heading">3D Models</div>

      <div className="link-tab">
        <Link to="/Model1">
          <button className="btn">
            <span>P1</span>
            </button>
          </Link>
      </div>

      <div className="link-tab">
      <Link to="/Model2">
        <button className="btn">
          <span>P2</span>
        </button>
      </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model3">
          <button className="btn">
            <span>P3</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model4">
          <button className="btn">
            <span>P4</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model6">
          <button className="btn">
            <span>P6</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model7">
          <button className="btn">
            <span>P7</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model8">
          <button className="btn">
            <span>P8</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model9">
          <button className="btn">
            <span>P9</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model12">
          <button className="btn">
            <span>P12</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model13">
          <button className="btn">
            <span>P13</span>
            </button>
          </Link>
      </div>
      <div className="link-tab">
        <Link to="/Model17">
          <button className="btn btn-17">
            <span>P17</span>
            </button>
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
