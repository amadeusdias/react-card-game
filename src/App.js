import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputDescription: '',
      inputAtrr1: 0,
      inputAtrr2: 0,
      inputAtrr3: 0,
      inputImg: '',
      inputSelectCategory: '',
      inputSuper: false,
      isSaveButtonDisabled: false,
      // deck: [],
    };
  }

  // buttonValidation = () => {
  //   const {
  //     inputName,
  //     inputDescription,
  //     inputImg,
  //     inputSelectCategory,
  //     inputAtrr1,
  //     inputAtrr2,
  //     inputAtrr3,
  //   } = this.state;
  // }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value });
  }

  render() {
    const {
      inputName,
      inputDescription,
      inputAtrr1,
      inputAtrr2,
      inputAtrr3,
      inputImg,
      inputSelectCategory,
      inputSuper,
      isSaveButtonDisabled,
      // deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ inputName }
          cardDescription={ inputDescription }
          cardAttr1={ inputAtrr1 }
          cardAttr2={ inputAtrr2 }
          cardAttr3={ inputAtrr3 }
          cardImage={ inputImg }
          cardRare={ inputSelectCategory }
          cardTrunfo={ inputSuper }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ inputName }
          cardDescription={ inputDescription }
          cardAttr1={ inputAtrr1 }
          cardAttr2={ inputAtrr2 }
          cardAttr3={ inputAtrr3 }
          cardImage={ inputImg }
          cardRare={ inputSelectCategory }
          cardTrunfo={ inputSuper }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
