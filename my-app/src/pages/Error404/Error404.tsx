import {Link} from "react-router-dom";
import './Error404.css';

export default function Error404() {
  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Страница не найдена</h2>
      <p className="not-found__text">
        Запрашиваемый вами ресурс не был найден
      </p>
      <Link to="/" className="not-found__link">На главную</Link>
    </main>
  );
}