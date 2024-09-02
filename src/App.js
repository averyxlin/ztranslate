import Logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center gap-4">
      <TextArea isTranslate/>
      <TextArea />
    </div>
  );
}

export default App;