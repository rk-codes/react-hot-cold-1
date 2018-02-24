import * as actions from '../actions';

const initialState = {
    guesses : [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {
    if(action.type === actions.MAKE_GUESS) {
        let feedback;
        if (isNaN(action.guess)) {
            feedback = 'Please enter a valid number' ;
            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, action.guess]
            });
          }
      
        const difference = Math.abs(action.guess - state.correctAnswer);
          if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
          } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
          } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
          } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
          } else {
            feedback = 'You got it!';
          }
        document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, action.guess]
        })
    }

    if(action.type === actions.RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        })
    }

    if(action.type === actions.GENERATE_AURAL_UPDATE) {
        const { guesses, feedback } = state;

        // If there's not exactly 1 guess, we want to
        // pluralize the nouns in this aural update.
        const pluralize = guesses.length !== 1;
    
        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    
        if (guesses.length > 0) {
          auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
        }
        
        return Object.assign({}, state, {
          auralStatus: auralStatus
        })
    }
    return state;
}