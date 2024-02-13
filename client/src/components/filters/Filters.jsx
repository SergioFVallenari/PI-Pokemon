import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";

const TypesFilter = ({ allTypes, handleRadioChange, selectedRadio, handleOrder, selectedOrder, handleOrigin, selectedOrigin, handleButtonClick }) => {

  const [showFilters, setShowFilters] = useState(false)

  const handleShowFilters = () =>{
    setShowFilters(!showFilters)
  }



  return (
    <div>
      <button onClick={handleShowFilters} className={`${!showFilters ? ' rounded-b-xl bg-[#B22222]' : "rounded-none bg-[#CD5C5C]" } min-w-[20vw] flex items-center justify-center mx-auto rounded-none text-2xl text-pokeGold`}>
        {
          showFilters ? (<><h3 className="text-sm px-4 dark:text-white">Filtrar</h3><MdFilterListOff /></>) : (<><h3 className="text-sm px-4 dark:text-white">Filters</h3><MdFilterList /></>)
        } 
      </button>
      {
        showFilters ? <>
      
      <div className="flex md:flex-row flex-col md:items-center md:justify-center bg-[#CD5C5C] tablet:w-[60vw] lg:w-[50vw] mx-auto rounded-lg">
          <select
            value={selectedRadio}
            onChange={(e) => handleRadioChange(e.target.value)} className="m-2 text-sm p-[4px] rounded text-black dark:text-white"
          >
            <option value="all">Types</option>
            {allTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        <select id="orderSelect" name="orderSelect" value={selectedOrder} onChange={(e) => handleOrder(e.target.value)} className="m-2 text-sm p-[4px] rounded text-black dark:text-white">
          <option value='null' disabled>Order By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="ATQ-ASC">ATQ ⬆</option>
          <option value="ATQ-DESC">ATQ ⬇</option>
        </select>
        <select id="originSelect" name="originSelect" value={selectedOrigin} onChange={(e) => { handleOrigin(e.target.value) }} className="m-2 text-sm p-[4px] rounded text-black dark:text-white">
          <option value="" disabled>Origin</option>
          <option value="all">All Pokemons</option>
          <option value="db">Created</option>
          <option value="api">Api</option>
        </select>
        <button onClick={handleButtonClick} className="bg-[#B22222] p-[4px] m-2 hover:bg-[#F08080]">
          Reset
        </button>
      </div>
      </> : ""
      }
    </div>
  );
};


export default TypesFilter