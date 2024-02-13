import { useEffect, useState } from "react"
import Modal from "../../components/pokememo/Modal";
import { useSelector } from "react-redux";
import Cardmemo from "../../components/pokememo/Cardmemo";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const Pokememo = () =>{
    const allPokemons = useSelector(state=>state.allPokemons)
    const imgsArray = allPokemons.map(({ id, image }) => ({ id, image }));
    const imgs = imgsArray.slice(0,10)

    const [cards, setCards] = useState([])
    const [flippedCards, setFlippedCards] = useState([])
    const [moves, setMoves] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    useEffect(() => {
        createBoard()
    }, [])
    const createBoard = () => {
        const duplicatedCards = imgs.flatMap((img, i) => {
            const duplicate = {
                ...img,
                id: img.id + imgs.length
            }
            return [img, duplicate]
        })
        const newCards = shuffleArray(duplicatedCards)
        const ncards = newCards.map((card) => {
            return {
                ...card,
                flipped: false,
                matched: false
            }
        })
        setCards(ncards)
    }

    const handleCardClick = (id) => {
        if (isDisabled) return;

        const [currentCard] = cards.filter(card => card.id === id)
        if (!currentCard.flipped && !currentCard.matched) {
            currentCard.flipped = true
            const newFlippedCard = [...flippedCards, currentCard]
            setFlippedCards(newFlippedCard)

            if (newFlippedCard.length === 2) {
                setIsDisabled(true)
                const [firstCard, secondCard] = newFlippedCard

                if (firstCard.image === secondCard.image) {
                    firstCard.matched = true
                    secondCard.matched = true
                    setIsDisabled(false)
                }
                else {
                    setTimeout(() => {
                        firstCard.flipped = false
                        secondCard.flipped = false
                        setCards(cards)
                        setIsDisabled(false)
                    }, 1000)
                }
                setFlippedCards([])
                setMoves(moves + 1)
            }
            setCards(cards)
        }
        if (cards.every(card => card.matched)) {
            setGameOver(true);
            setIsDisabled(true)
        }
    };

    const handleNewgame = () => {
        setCards([])
        createBoard()
        setMoves(0)
        setGameOver(false)
        setIsDisabled(false)
    }
    return (
        <>
        {
            gameOver && (<div className="fixed inset-0 bg-black opacity-50 z-10"></div>)
        }
            
            <div className="relative h-screen flex items-center justify-center">
                <div className="mx-auto flex flex-col justify-center items-center bg-slate-900/50 p-2 rounded-xl">
                    <h1 className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">PokeMemo</h1>
                    <div className="grid grid-cols-4 gap-3 justify-center items-center px-3 py-5 my-3">
                        {cards.map((card) => (
                            <Cardmemo key={card.id} card={card} handleCardClick={handleCardClick} />
                        ))}
                    </div>
                    <button className="bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-yellow-500 hover:text-black transition-all mb-3" onClick={handleNewgame}>New Game</button>
                    <Link to='/home'>
                            <button className="bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-yellow-500 hover:text-black transition-all mb-3">
                                Back
                            </button>
                    </Link>
                </div>
                <Modal 
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    moves={moves}
                    handleNewgame={handleNewgame}
                />
            </div>
        </>
    )
}

export default Pokememo