import './speaking.scss';

import grammar from '../../assets/img/grammar.svg';
import { grammar as lessons } from '../../assets/data/grammar';
import { Link } from 'react-router-dom';

const Speaking = () => {
  return (
    <div className="speaking">
      <div className="container">
        <div className="left">
          <div className="content">
            <div className="title">
              <img src={grammar} alt="" /> <h1>Grammar</h1>
            </div>
            <h2>Lessons:</h2>
            <div className="lessons">
              {lessons.map((lesson) => {
                return (
                  <div className="lesson" key={lesson.id}>
                    <span></span>
                    <Link
                      to={`/grammar/${lesson.id}`}
                      style={{ color: '#333' }}
                    >
                      <p className="lessonTitle">{lesson.title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="img">
            <img src={grammar} alt="" />
          </div>
          <div className="quote">
            <p className="text">
              “Grammar is to a writer what anatomy is to a sculptor or the
              scales to a musician. You may loathe it, it may bore you, but
              nothing will replace it, and once mastered it will support you
              like a rock.”
            </p>
            <p className="other">B. J. Chute</p>
          </div>

          <div className="quote">
            <p className="text">“Grammar is the analysis of language.”</p>
            <p className="other">Edgar Allan Poe</p>
          </div>
          <div className="quote">
            <p className="text">“Grammar is the grave of letters.” </p>
            <p className="other">Elbert Hubbard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaking;
