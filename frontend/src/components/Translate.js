import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Anglais',
    value: 'en',
  },
  {
    label: 'Allemand',
    value: 'de',
  },
  {
    label: 'Chinois',
    value: 'zh-TW',
  },
  {
    label: 'Italien',
    value: 'it',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Espagnol',
    value: 'es',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Russe',
    value: 'ru',
  },
  {
    label: 'Zulu',
    value: 'zu',
  },
  
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('Cette section traduit automatiquement tout texte tapé');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Entrer votre texte </label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Sélectionner une langue"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Traduction : </h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
