import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { data, title, author_name, post_image, link, top_quote } from 'https://github.com/marlamalone/marlamalone.github.io/blob/1d585914ee6febaed505cc3cea065a4281896b96/quotes-data-alltime-clean.json';

let randomQuote = data => data[Math.floor(Math.random() * data.length)];

interface AppProps { }
interface AppState {
  title: string,
  author: string,
  imglink: string,
  title: string,
  quote: string;
}

const quoteBox = document.getElementById("quote-box");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

quoteText.textContent = 'test';

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      title: { randomQuote.title },
      author: { randomQuote.author_name },
      imglink: {randomQuote.post_image },
      link: { randomQuote.link },
      quote: { randomQuote.top_quote }
    };
  
render(<App />, document.getElementById('root'));
