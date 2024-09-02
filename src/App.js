import Logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="font-sans antialiased h-screen w-screen flex items-center justify-center gap-10 bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="w-1/3">
        <TextArea isTranslate/>
      </div>
      <div className="w-1/3">
        <TextArea/>
      </div>
    </div>
  );
}

export default App;
