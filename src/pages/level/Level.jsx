import './level.scss';

import { Link } from 'react-router-dom';

const Level = () => {
  return (
    <div className="level">
      <div className="container">
        <div className="cards">
          <Link to="/underCons">
            <div className="card card-1">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="text">1ST Year.</h2>
                  <p className="text">
                    This section contains lessons and activities for 1st year
                    middle school learners.
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>1 MS</h2>
              </div>
            </div>
          </Link>
          <Link to="/underCons">
            <div className="card card-2">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="text">2nd Year.</h2>
                  <p className="text">
                    This section contains lessons and activities for 2nd year
                    middle school learners.
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>2 MS</h2>
              </div>
            </div>
          </Link>
          <Link to="/underCons">
            <div className="card card-3">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="text">3rd Year.</h2>
                  <p className="text">
                    This section contains lessons and activities for 3rd year
                    middle school learners.
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>3 MS</h2>
              </div>
            </div>
          </Link>
          <Link to="/category">
            <div className="card card-4">
              <div className="face face1">
                <div className="content">
                  <span className="stars"></span>
                  <h2 className="text">4th Year.</h2>
                  <p className="text">
                    This section contains lessons and activities for 4th year
                    middle school learners.
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>4 MS</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Level;
