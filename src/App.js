import { Content } from './components/content';
import { Header } from './components/header';
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState('PTBR');

  const selectLanguage = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  }

  return (
    <div className="App">
      <Header language={language} selectLanguage={selectLanguage}/>
      <Content language={language} />
    </div>
  );
}

export default App;