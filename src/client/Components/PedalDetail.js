import { h, render, Component } from "preact";
import Heading from "Components/Heading";
import BackLink from "Components/BackLink";
import PedalImage from "Components/PedalImage";
import { toggleFavorite, isFavorite } from "Utils";

export default class PedalDetail extends Component {
  constructor(props) {
    super(props);

    if ("pedalData" in this.props) {
      const { id, manufacturer, model, type, youtube, copy } = this.props.pedalData;

      this.state = {
        id: Number(id).toString(),
        manufacturer,
        model,
        type,
        youtube,
        copy
      };
    } else {
      this.state = {
        id: null,
        manufacturer: "",
        model: "",
        type: "",
        youtube: "",
        copy: ""
      };
    }

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  componentDidMount() {
    if ("pedalData" in this.props === false) {
      fetch(`/api/pedal/${this.props.id}`).then(response => response.json()).then(data => {
        const { id, manufacturer, model, type, youtube, copy } = data;

        this.setState({
          id: Number(id).toString(),
          manufacturer,
          model,
          type,
          youtube,
          copy
        });
      });
    }

    this.setState({
      isFavorite: isFavorite(this.state.id)
    });
  }

  handleToggleFavorite() {
    const { id, manufacturer, model, type } = this.state;

    toggleFavorite(id, manufacturer, model, type);

    this.setState({
      isFavorite: isFavorite(id)
    });
  }

  render() {
    const { id, manufacturer, model, isFavorite, type, copy, youtube } = this.state;

    return (
      <section>
        <Heading>
          <BackLink href="/">←</BackLink>
          <h1>{manufacturer} {model}</h1>
        </Heading>
        <section className="pedal__info">
          <div className="pedal__image-container">
            <button className="pedal__toggle-favorite" onClick={this.handleToggleFavorite}>{isFavorite === true ? "-" : "+"}</button>
            {id !== null ? <PedalImage id={id} manufacturer={manufacturer} model={model} /> : ""}
          </div>
          <h2>Type</h2>
          <p>{type}</p>
          <h2>Description</h2>
          <p>{copy}</p>
          <h2>Demo Video</h2>
          {id !== null ? <iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${youtube}`} frameborder="0"></iframe> : ""}
        </section>
      </section>
    );
  }
}
