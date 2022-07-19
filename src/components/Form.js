import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h2>Nova carta</h2>
        <form>

          <label htmlFor="name">
            Name
            <input
              type="text"
              name="inputName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Description
            <textarea
              data-testid="description-input"
              name="inputDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="inputAtrr1">
            Atributo 1
            <input
              type="number"
              name="inputAtrr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="atributo2">
            Atributo 2
            <input
              type="number"
              name="inputAtrr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="atributo3">
            Atributo 3
            <input
              type="number"
              name="inputAtrr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>

          <input
            type="text"
            name="inputImg"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />

          <label htmlFor="category">
            <select
              value={ cardRare }
              name="inputSelectCategory"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <input
            type="checkbox"
            name="inputSuper"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />

          <button
            type="button"
            data-testid="save-button"
            id="saveBtn"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
