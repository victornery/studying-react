import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import menu from '../../json/nav.json'
import styles from './style.css';

class Header extends Component {
  loadMenu() {
    let language;

    if (navigator.language === ('pt-BR' || 'pt')) {
      language = menu[0].pt;
    } else {
      language = menu[0].en;
    }

    const items = language.map((el, i) => {
      return (
        <li key={i}>
          <Link to={`${el.link}`}>
            {el.name}
          </Link>
        </li>
      )
    });

    return items
  }

  render() {
    return (
      <nav>
        <ul className={styles.nav}>
          {this.loadMenu()}
        </ul>
      </nav>
    )
  }
}

export default Header
