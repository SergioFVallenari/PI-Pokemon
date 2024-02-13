const Cardmemo = ({card, handleCardClick}) =>{
    return (
        <>  
        <div className={` drop-shadow-md flex items-center justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-xl transition-all duration-1000 ${card.flipped ? '[transform:rotateY(10deg)]' : 'bg-white'}`}
        onClick={()=>handleCardClick(card.id)}
        >
            <div>
                <img src={card?.image} className={`h-16 scale-110 ${!card.flipped ? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000': ''}`}/>
            </div>
        </div>
        </>
    )
}

export default Cardmemo