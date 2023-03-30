import './App.css';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import {ChatProvider} from './providers/ChatProvider/ChatProvider';

function App() {
  return (
    <div className="App">
      <Header />
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </div>
  );
}

export default App;
