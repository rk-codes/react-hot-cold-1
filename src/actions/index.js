export const ADD_GUESS = 'ADD_GUESS';
export const RESTART_GAME = 'RESTART_GAME';
export const GENERATE_AURAL_UPDATE = "GENERATE_AURAL_UPDATE";

export const addGuess = (guess) => ({
    type: ADD_GUESS,
    guess
})

export const restartGame = () => ({
    type: RESTART_GAME
})

export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
})