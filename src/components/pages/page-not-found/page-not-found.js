import styles from './page-not-found.module.scss';
import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Страница не найдена
      </h3>
      <p className="not-found__text">
        Лучше 404 с кнопкой «Назад», чем журавль в небе.
      </p>
      <Link className="button button_type_to-main" to="/CyberHackathon">
        Try Main Page
      </Link>
    </div>
  );
}

export default PageNotFound;
