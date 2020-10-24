import './App.scss';
import ChatsContainer from './components/structure/Left/ChatsContainer';
import ConversationContainer from './components/structure/Right/ConversationContainer';

function App() {
  return (
    <div className="App">
        <ChatsContainer />
        <ConversationContainer />
    </div>
  );
}

export default App;
