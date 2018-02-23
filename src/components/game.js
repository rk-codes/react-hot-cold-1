import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {addGuess, restartGame, generateAuralUpdate} from '../actions';
import { connect } from 'react-redux';

export  class Game extends React.Component {

  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    this.props.dispatch(addGuess(guess));
  }

  generateAuralUpdate() {
   this.props.dispatch(generateAuralUpdate());
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
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
export default connect(mapStateToProps)(Game);