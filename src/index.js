import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const person =[
	{'badge-title master': 'Учитель', 'badge-subtitle': "Constcode school", name: 'Алексей Данчин' },
	{'badge-title': 'IT- ученик','badge-subtitle': "Constcode school", name: 'Куранков Сергей' },
	{'badge-title': 'HELLO','badge-subtitle': "MY NAME IS", name: 'Сергей Воронин' },
	{'badge-title': 'HI','badge-subtitle': "MY NAME IS", name: 'Тимофей Мяги' },
]

ReactDOM.render(
  <React.StrictMode>
    <App person={person} />

  </React.StrictMode>,
  document.getElementById('root')
);
