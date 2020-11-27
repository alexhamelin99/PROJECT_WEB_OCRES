// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Anglais',
    value: 'en',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Allemand',
    value: 'nl',
  },
  {
    label: 'Arabe',
    value: 'ar',
  },
  {
    label: 'Basque',
    value: 'eu',
  },
  {
    label: 'Catalan',
    value: 'ca',
  },
  {
    label: 'Chinois',
    value: 'zh-TW',
  },
  {
    label: 'Croate',
    value: 'hr',
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
    label: 'Italien',
    value: 'it',
  },
  {
    label: 'Français',
    value: 'fr',
  },
  {
    label: 'Russe',
    value: 'ru',
  },
   {
      label: 'Xhosa',
      value: 'xh',
    },
 
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
