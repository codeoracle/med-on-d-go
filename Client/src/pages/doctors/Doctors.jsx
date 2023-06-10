import './doctor.scss'
import Navbar from '../../components/navbar/Navbar'


const Doctors = () => {
  return (
    <>
    <Navbar/>
    <div className="featureWrap">
        <div className='featured'>
      <div className="top">
        <h1 className="title">Status</h1>
        <span className="status active">Active</span>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <p className="title">Hasan Kasper</p>
        <p className="amount">Cardiologists</p>
        <div className="summary">
          {/* <div className="item">
            <div className="itemResult negative">
            </div>
          </div> */}
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">20 Min</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className='featured'>
      <div className="top">
        <h1 className="title">Status</h1>
        <span className="status">Active</span>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <p className="title">Roxana Lieberman</p>
        <p className="amount">Dentist</p>
        <div className="summary">
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">20 Min</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className='featured'>
      <div className="top">
        <h1 className="title">Status</h1>
        <span className="status active">Active</span>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <p className="title">Keshon Jeter</p>
        <p className="amount">Psychiatrist</p>
        <div className="summary">
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">20 Min</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className='featured'>
      <div className="top">
        <h1 className="title">Status</h1>
        <span className="status">Active</span>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        <p className="title">Norman Burnside</p>
        <p className="amount">
Neurologist</p>
        <div className="summary">
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">20 Min</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult positive">
              <div className="resultAmount">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Doctors