import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';
import * as data from './quotesData.json';

var currentQuote = '',
  currentAuthor = '';

function getRandomQuote() {
  return data[Math.floor(Math.random() * data.length)];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.top_quote;
  currentAuthor = randomQuote.author_name;
}

class QuoteDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.quote = { quote: currentQuote };
    this.author = { author: currentAuthor };
  }

  render() {
    return <div>{this.quote}</div>;
  }
}
ReactDOM.render(<QuoteDisplay />, document.getElementById('root'));
