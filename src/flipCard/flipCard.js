import React from "react";
// import { CSSTransition } from 'react-transition-group';
import "./flipCard.css";
import { Link } from "react-router-dom";

export default class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      flip: false,
    };
  }

  flip(e) {
    const isMouseEnter = e.type === "mouseenter";

    this.setState({ flip: isMouseEnter }, () => console.log(this.state.flip));
  }

  render() {
    return (
      <>
        {this.props?.cardDetails && (
          <div
            onMouseEnter={($event) => this.flip($event)}
            onMouseLeave={($event) => this.flip($event)}
            className="poster-container"
          >
            <div className={this.state.flip ? "poster flipped" : "poster"}>
              <div
                className="pic p-8"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${this.props?.cardDetails?.bgImage})`,
                }}
              >
                <h4>{this.props?.cardDetails?.cardTitle}</h4>
                <h2>{this.props?.cardDetails?.cardTitle2}</h2>
                {this.props.cardDetails.buttonTitle != "" && (
                  <Link to={this.props?.cardDetails?.url}>
                    <button
                      className="px-8 py-4  rounded-md text-sm flipLearnMore"
                      onMouseEnter={($event) => this.flip($event)}
                      onMouseLeave={($event) => this.flip($event)}
                    >
                      {this.props.cardDetails.buttonTitle}
                    </button>
                  </Link>
                )}
              </div>
              <div
                className="pic back p-4 content-center"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${this.props?.cardDetails?.bgImage})`,
                }}
              >
                {this.props?.cardDetails?.backText}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
// function Flipcard() {
//     const [isFlipped, setIsFlipped] = useState(true);

//     const toggleFlip = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div onMouseEnter={toggleFlip} >
//             <CSSTransition in={isFlipped} timeout={300} classNames="flip">
//                 <div className="flip-container">
//                     <div className="flip-item front">Front</div>
//                     <div className="flip-item back">Back</div>
//                 </div>
//             </CSSTransition>
//         </div>
//     );
// }

// export default Flipcard;
