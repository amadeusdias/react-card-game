import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      nameFilter: '',
      // onInputChange: '',
      // onSaveButtonClick: '',
      deck: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      }, this.buttonValidation,
    );
  }

  resetForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    });
  }

 killkCard = ({ target }) => {
   // const { hasTrunfo } = this.state;
   const { deck } = this.state;
   const { name } = target;
   // const { hastrunfo } = target;
   const getDeck = deck.filter((card) => card.cardName !== name);
   const getTrunfo = deck.some((card) => card.cardTrunfo);
   if (getTrunfo === true) {
     this.setState({
       deck: getDeck,
       hasTrunfo: false,
     });
   } else {
     this.setState({
       deck: getDeck,
     });
   }
 }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    this.setState((cartas) => ({
      deck:
      [...cartas.deck, {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardTrunfo,
      }],
    }), this.resetForm);
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  buttonValidation = () => {
    const maxValue = 210;
    const unitValue = 90;
    const minValue = 0;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const sum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && sum <= maxValue
      && parseInt(cardAttr1, 10) >= minValue && parseInt(cardAttr1, 10) <= unitValue
      && parseInt(cardAttr2, 10) >= minValue && parseInt(cardAttr2, 10) <= unitValue
      && parseInt(cardAttr3, 10) >= minValue && parseInt(cardAttr3, 10) <= unitValue
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  }

  deckFilter = ({ target }) => {
    const { value } = target;
    const { deck } = this.state;
    const filtro = deck.filter((carta) => carta.cardName.includes(value));
    this.setState({
      deck: filtro,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      deck,
      // nameFilter,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          hasTrunfo={ hasTrunfo }
        />

        <input
          type="text"
          name="nameFilter"
          data-testid="name-filter"
          onChange={ this.deckFilter }
          // value={ nameFilter }
          placeholder="Pesquisar por nome"
        />

        <ul>
          { deck.length === 0
            ? <p>Nenhuma carta foi feita ainda!</p>
            : (

              deck
                // .filter((cartas) => this.deckFilter(cartas))
                .map((carta) => (
                  <div key={ carta.cardName }>
                    <Card
                      cardName={ carta.cardName }
                      cardDescription={ carta.cardDescription }
                      cardAttr1={ carta.cardAttr1 }
                      cardAttr2={ carta.cardAttr2 }
                      cardAttr3={ carta.cardAttr3 }
                      cardImage={ carta.cardImage }
                      cardRare={ carta.cardRare }
                      cardTrunfo={ carta.cardTrunfo }
                    />
                    <button
                      data-testid="delete-button"
                      type="button"
                      onClick={ this.killkCard }
                      name={ carta.cardName }
                    >
                      Excluir Carta
                    </button>
                  </div>
                )))}
        </ul>
      </div>
    );
  }
}

export default App;
