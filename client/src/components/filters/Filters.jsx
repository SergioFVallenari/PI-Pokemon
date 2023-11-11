import { useState } from "react";
import { useDispatch } from 'react-redux'
import { filterType } from "../../redux/actions/actions";

import style from './types.module.css'

const TypesFilter = ({ allTypes }) => {
  const dispatch = useDispatch()

  const [showRadios, setShowRadios] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);


  /* Funciones manejadoras de eventos */
  const handleButtonClick = () => {
    setShowRadios(!showRadios);
  };

  const handleRadioChange = (radioName) => {
    setSelectedRadio(radioName);
    dispatch(filterType(radioName))
  };


  return (
    <>
      <div>
        <button onClick={handleButtonClick} className={style.buttonFilter}>
          {showRadios ? "Cerrar" : "Filtrar"}
        </button>
      </div>
      {showRadios && (
        <div className={style.checkContainer}>
          <h4>Filter by type</h4>
          <label>
              <input
                type="radio"
                name="typeRadio"
                checked={selectedRadio === 'all'}
                onChange={() => handleRadioChange('all')}
              />
              All
            </label>
          {allTypes.map((type, index) => (
            <label key={index}>
              <input
                type="radio"
                name="typeRadio"
                checked={selectedRadio === type}
                onChange={() => handleRadioChange(type)}
              />
              {type}
            </label>
          ))}
        </div>
      )}
    </>
  );
};


export default TypesFilter