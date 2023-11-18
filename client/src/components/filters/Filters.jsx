import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { filterOrigin, filterType, orderBy } from "../../redux/actions/actions";

import style from './types.module.css'

const TypesFilter = ({ allTypes, handleRadioChange, selectedRadio }) => {
  const dispatch = useDispatch()

  const [showRadios, setShowRadios] = useState(false);
  // const [selectedRadio, setSelectedRadio] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState('null')
  const [selectedOrigin, setSelectedOrigin] = useState('all')

  /* Funciones manejadoras de eventos */
  const handleButtonClick = () => {
    setShowRadios(!showRadios);
  };

  // const handleRadioChange = (radioName) => {
  //   setSelectedRadio(radioName);
  //   dispatch(filterType(radioName))
  // };

  const handleOrder = (selectValue) => {
    setSelectedOrder(selectValue)
    dispatch(orderBy(selectValue))
  }

  const handleOrigin = (originValue) =>{
    setSelectedOrigin(originValue)
    dispatch(filterOrigin(originValue))
  }

  return (
    <>
      <div className={style.filterContainer} >
        <button onClick={handleButtonClick} className={style.buttonFilter}>
          {showRadios ? "Cerrar" : "Filtrar"}
        </button>
        <select id="orderSelect" name="orderSelect" value={selectedOrder} onChange={(e) => handleOrder(e.target.value)}>
          <option value='null'>Order By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="ATQ-ASC">ATQ ⬆</option>
          <option value="ATQ-DESC">ATQ ⬇</option>
        </select>
        <select id="originSelect" name="originSelect" value={selectedOrigin} onChange={(e)=>{handleOrigin(e.target.value)}}>
          <option value="all">All Pokemons</option>
          <option value="db">Created</option>
          <option value="api">Originals</option>
        </select>
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