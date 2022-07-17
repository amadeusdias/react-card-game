import React from 'react';

class Form extends React.Component {
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
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      inputName,
      inputSuper,
      inputDescription,
      inputAtrr1,
      inputAtrr2,
      inputAtrr3,
      inputImg,
      inputSelectCategory,
    } = this.state;

    return (
      <div>
        <h2>Formulario inicial do projeto</h2>
        <form>

          <input
            type="text"
            name="inputName"
            data-testid="name-input"
            value={ inputName }
            onChange={ this.handleChange }
          />

          <textarea
            data-testid="description-input"
            name="inputDescription"
            value={ inputDescription }
            onChange={ this.handleChange }
          />

          <input
            type="number"
            name="inputAtrr1"
            value={ inputAtrr1 }
            onChange={ this.handleChange }
            data-testid="attr1-input"
          />

          <input
            type="number"
            name="inputAtrr2"
            value={ inputAtrr2 }
            onChange={ this.handleChange }
            data-testid="attr2-input"
          />

          <input
            type="number"
            name="inputAtrr3"
            value={ inputAtrr3 }
            onChange={ this.handleChange }
            data-testid="attr3-input"
          />

          <input
            type="text"
            name="inputImg"
            value={ inputImg }
            onChange={ this.handleChange }
            data-testid="image-input"
          />

          <select
            value={ inputSelectCategory }
            name="inputSelectCategory"
            onChange={ this.handleChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

          <input
            type="checkbox"
            name="inputSuper"
            data-testid="trunfo-input"
            value={ inputSuper }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            data-testid="save-button"
            id="saveBtn"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
