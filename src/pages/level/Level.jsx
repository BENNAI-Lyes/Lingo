import './level.scss';
import l1 from '../../assets/img/l1.png';
import l2 from '../../assets/img/l2.png';
import l3 from '../../assets/img/l3.png';
import l4 from '../../assets/img/l4.png';

const Level = () => {
  return (
    <div className="level">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={l1} alt="" />
            <h2>1 MS</h2>
            <p>
              This section contains lessons and activities for 1st year middle
              school learners
            </p>
          </div>

          <div className="card">
            <img src={l2} alt="" />
            <h2>2 MS</h2>
            <p>
              This section contains lessons and activities for 2nd year middle
              school learners
            </p>
          </div>

          <div className="card">
            <img src={l3} alt="" />
            <h2>3 MS</h2>
            <p>
              This section contains lessons and activities for 3rd year middle
              school learners
            </p>
          </div>

          <div className="card">
            <img src={l4} alt="" />
            <h2>4 MS</h2>
            <p>
              This section contains lessons and activities for 4th year middle
              school learners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
