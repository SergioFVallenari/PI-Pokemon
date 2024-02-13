const Modal = ({ gameOver, setGameOver, moves, handleNewgame }) => {
    return (
        <>
            <div className={`${gameOver ? "flex" : "hidden"} flex-col justify-center items-center gap-7 bg-black absolute md:w-[350px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-12 h-12 bg-red-500 rounded-full p-2 animate-bounce" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
                <button className="text-white font-bold absolute right-0 top-0 mr-3 hover:text-red-600 text-2xl" onClick={()=>setGameOver(false)}>&times;</button>
                <h1 className="text-white uppercase text-3xl font-bold tracking-wider">¡WINNER!</h1>
                <div className="flex justify-between gap-10">
                    <p className="text-white">Moves:</p>
                    <p className="text-white">{moves}</p>
                </div>
                <button className="bg-red-600 font-semibold text-black rounded-md px-5 py-1 hover:opacity-90 hover:text-white transition-all mb-3" onClick={handleNewgame}>New Game</button>
            </div>
        </>
    )
}

export default Modal