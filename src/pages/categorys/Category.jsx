import './category.scss';
import reading from '../../assets/img/reading.svg';
import vocabulary from '../../assets/img/new.svg';
import grammar from '../../assets/img/grammar.svg';
import writing from '../../assets/img/writing.svg';
import listening from '../../assets/img/listening.svg';
import pleasure from '../../assets/img/pleasure.svg';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="cats">
          {/* Reading */}
          <div className="cat">
            <div className="left">
              <h2>Reading</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/reading">
                <button>Learn</button>
              </Link>
            </div>
            <div className="right">
              <img src={reading} alt="" />
            </div>
          </div>

          {/* Writing */}
          <div className="cat">
            <div className="left">
              <h2>Writing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/writing">
                <button>Learn</button>
              </Link>
            </div>
            <div className="right">
              <img src={writing} alt="" />
            </div>
          </div>

          {/* Grammar */}
          <div className="cat">
            <div className="left">
              <h2>Grammar</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/grammar">
                <button>Learn</button>
              </Link>
            </div>
            <div className="right">
              <img src={grammar} alt="" />
            </div>
          </div>

          {/* Listening */}
          <div className="cat">
            <div className="left">
              <h2>Listening</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/listening">
                <button>Learn</button>
              </Link>
            </div>
            <div className="right">
              <img src={listening} alt="" />
            </div>
          </div>

          {/* Vocabulary */}
          <div className="cat">
            <div className="left">
              <h2>Vocabulary</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/vocabulary">
                <button>Learn</button>
              </Link>
            </div>

            <div className="right">
              <img src={vocabulary} alt="" />
            </div>
          </div>

          <div className="cat">
            <div className="left">
              <h2>Reading For Pleasure</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                consectetur adipisicing eli{' '}
              </p>
              <Link to="/pleasure">
                <button>Learn</button>
              </Link>
            </div>

            <div className="right">
              <img src={pleasure} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
