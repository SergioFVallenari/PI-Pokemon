

import style from './types.module.css'

const TypesFilter = ({ allTypes, handleRadioChange, selectedRadio, handleOrder, selectedOrder, handleOrigin, selectedOrigin, handleButtonClick, showRadios }) => {
  // const dispatch = useDispatch()

  // const [showRadios, setShowRadios] = useState(false);
  // const [selectedRadio, setSelectedRadio] = useState('all');
  // const [selectedOrder, setSelectedOrder] = useState('null')
  // const [selectedOrigin, setSelectedOrigin] = useState('')

  /* Funciones manejadoras de eventos */
  // const handleButtonClick = () => {
  //   setShowRadios(!showRadios);
  //   if (showRadios) {
  //     handleRadioChange('all')
  //     setSelectedOrigin('')
  //     setSelectedOrder('null')
  //   }
  // };

  // const handleRadioChange = (radioName) => {
  //   setSelectedRadio(radioName);
  //   dispatch(filterType(radioName))
  // };

  // const handleOrder = (selectValue) => {
  //   setSelectedOrder(selectValue)
  //   dispatch(orderBy(selectValue))
  // }

  // const handleOrigin = (originValue) =>{
  //   setSelectedOrigin(originValue)
  //   dispatch(filterOrigin(originValue))
  // }

  return (
    <>
      <div className={style.filterContainer} >
        <button onClick={handleButtonClick} className={style.buttonFilter}>
          {showRadios ? "Reset" : "Filter"}
        </button>
        <select id="orderSelect" name="orderSelect" value={selectedOrder} onChange={(e) => handleOrder(e.target.value)}>
          <option value='null' disabled>Order By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="ATQ-ASC">ATQ ⬆</option>
          <option value="ATQ-DESC">ATQ ⬇</option>
        </select>
        <select id="originSelect" name="originSelect" value={selectedOrigin} onChange={(e) => { handleOrigin(e.target.value) }}>
          <option value="" disabled>Origin</option>
          <option value="all">All Pokemons</option>
          <option value="db">Created</option>
          <option value="api">Api</option>
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