import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {makeGuess, restartGame, generateAuralUpdate} from '../actions';
import { connect } from 'react-redux';

export  class Game extends React.Component {

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.props.restartGame()}
          onGenerateAuralUpdate={() => this.props.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.props.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses,
  auralStatus: ''
});

const mapDispatchToProps = (dispatch) => ({ 
    makeGuess: (guess) => dispatch(makeGuess(guess)) ,
    restartGame: () => dispatch(restartGame()),
    generateAuralUpdate: () => dispatch(generateAuralUpdate())
})

export default connect(mapStateToProps,mapDispatchToProps)(Game);