import React, { Fragment } from 'react';
import { DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Расширяемая коллекция Реакт компонентов.</span></h1>

    <p>Все компоненты написаны с проверкой esLint.</p>
    <p>Любой компонент вы можете свободно переписать под свои задачи, либо расширить его функциональность</p>
    
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Home;
