import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import journal_cards from './data';

const App = () => {
  const cards = journal_cards.map((card_item) => {
    return (
      <Card key={card_item.id} {...card_item} />
    );
  })

  return (
    <div className="app">
      <Header />
      {cards}
    </div>
  );
}

export default App;