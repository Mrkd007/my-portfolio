import { FaLocationArrow } from "react-icons/fa";

const Career = () => {
  return (
    <section className='container career-container'>
			<div className='container__header'>Career</div>
      <div className='career__wrapper'>
        <div className='career__wrapper-group'>
          <div className='career__wrapper-title'>
            <span className='career__wrapper-title-icon'> + </span>
            <h2 className='career__wrapper-title-text'> Education </h2>
          </div>
          <div className='career__wrapper-bubble'>
            <span className='career__wrapper-bubble-icon'>2008 - 2011</span>
            <div className='career__wrapper-bubble-box'>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Devasthaly Vidyapeeth, Ballia</h3>
                <span className='bubble-box__header-subtitle'>(10th - Matriculation)</span>
              </div>
              <p className='bubble-box__details'>
                I have completed my basic education from here.
              </p>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Grade: </span>
                <span className='bubble-box__footer-subtitle'>9.6 CGPA</span>
              </div>
            </div>
            <span className='career__wrapper-bubble-arrow'>
            <FaLocationArrow />
            </span>
          </div>
          <div className='career__wrapper-bubble right-bubble'>
            <span className='career__wrapper-bubble-icon'>2011 - 2013</span>
            <span className='career__wrapper-bubble-arrow'>
              <FaLocationArrow />
            </span>
            <div className='career__wrapper-bubble-box' style={{minHeight: '18rem'}}>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Delhi Public School, Ranchi</h3>
                <span className='bubble-box__header-subtitle'>(10+2 - Intermediate)</span>
              </div>
              <p className='bubble-box__details'>
                I have completed my higher secondary education from DPS ranchi in computer programming.
              </p>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Grade: </span>
                <span className='bubble-box__footer-subtitle'>6.2 CGPA</span>
              </div>
            </div>
          </div>
          <div className='career__wrapper-bubble'>
            <span className='career__wrapper-bubble-icon'>2014 - 2018</span>
            <div className='career__wrapper-bubble-box' style={{minHeight: '18rem'}}>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Gandhi Institute of Engineering and Technology, Gunupur</h3>
                <span className='bubble-box__header-subtitle'>(B.Tech. - Graduation)</span>
              </div>
              <p className='bubble-box__details'>
                I have completed my graduation in Computer Science Engineering from BPUT, Rourkela (Odisha). The college name  is GIET, Gunupur (Odisha).
              </p>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Grade: </span>
                <span className='bubble-box__footer-subtitle'>7.4 CGPA</span>
              </div>
            </div>
            <span className='career__wrapper-bubble-arrow' style={{display: 'none'}}>
              <FaLocationArrow />
            </span>
          </div>
        </div>
        <div className='career__wrapper-group'>
          <div className='career__wrapper-title'>
            <span className='career__wrapper-title-icon'> + </span>
            <h2 className='career__wrapper-title-text'> Job Career </h2>
          </div>
          <div className='career__wrapper-bubble'>
            <span className='career__wrapper-bubble-icon'>Jun 2018 -  Aug 2019</span>
            <div className='career__wrapper-bubble-box'>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Airtory Interavtive Pvt. Ltd.</h3>
                <span className='bubble-box__header-subtitle'>(UI Developer)</span>
              </div>
              <ul className='bubble-box__details'>
                <li>Upgraded UI of existing product pages to Angular2  &gt; Angular4  &gt; Angular 8</li>
                <li>Worked on all different technologies to create interactive ads.</li>
                <li>Worked with HTML Canvas to create basic JS Games as a part of the company's ads product.</li>
              </ul>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Tech: </span>
                <span className='bubble-box__footer-subtitle'>Html, CSS, JS, jQuery, Canvas, AngularJS, Bootstrap</span>
              </div>
            </div>
            <span className='career__wrapper-bubble-arrow'>
            <FaLocationArrow />
            </span>
          </div>
          <div className='career__wrapper-bubble right-bubble'>
            <span className='career__wrapper-bubble-icon'>Sept 2019 -  Jan 2023</span>
            <span className='career__wrapper-bubble-arrow'>
              <FaLocationArrow />
            </span>
            <div className='career__wrapper-bubble-box' style={{minHeight: '32rem', minWidth: '60%'}}>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Ebot AI IT Solutions Pvt. Ltd. (Enterprisebot)</h3>
                <span className='bubble-box__header-subtitle'>(Fornt-end Developer / UI Developer)</span>
              </div>
              <ul className='bubble-box__details'>
                <li>Created a new react project to dynamically define chatbot UI.</li>
                <li>To manage different projects with the same UI elements created a React Ui Library, with all basic definitions and styles.</li>
                <li>Updated webpack from v3-v4 then from v4-v5</li>
                <li>Updated Bootstrap to V5, and jQuery to 3.6.1 from 2.x version</li>
                <li>Worked with the team to add accessibility and lang support on chatbot.</li>
                <li>Created analytics/dashboard UI using chartJS for jquery project and react-chartJS2 for react project.</li>
                <li>Improved the lighthouse score from below 60% to  &gt;90% for chatbots</li>
              </ul>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Tech: </span>
                <span className='bubble-box__footer-subtitle'>Html, CSS, JS, jQuery, Bootstrap, Webpack3, React(Basics), and other related libraries.</span>
              </div>
            </div>
          </div>
          <div className='career__wrapper-bubble'>
            <span className='career__wrapper-bubble-icon'>Feb 2023 - continue...</span>
            <div className='career__wrapper-bubble-box' style={{minHeight: '32rem', minWidth: '60%'}}>
              <div className='bubble-box__header'>
                <h3 className='bubble-box__header-title'>Ebot AI IT Solutions Pvt. Ltd. (Enterprisebot)</h3>
                <span className='bubble-box__header-subtitle'>(Fornt-end Developer / UI Developer)</span>
              </div>
              <ul className='bubble-box__details'>
                <li>Leading a team of junior UI developers</li>
                <li>Distributed main project into micro frontend, and added using module federation of webpack.</li>
                <li>Standardized the elements properties and definitions for the projects, like input and buttons width & height, custom layouts padding and margins.</li>
                <li>Optimized image and assets loading by uploading and reusing them from Minio.</li>
                <li>Successfully added different LLM configuration UI support, with data visualization.oper I am also handling a small group of junior developers under me.</li>
                <li>Optimized analytics project to plug and use with different projects internally. </li>             
              </ul>
              <div className='bubble-box__footer'>
                <span className='bubble-box__footer-title'>Tech: </span>
                <span className='bubble-box__footer-subtitle'>JS, jQuery, Bootstrap5, Webpack4&5, ReactJs, Redux, SCSS, ChartJS, and other related libraries.</span>
              </div>
            </div>
            <span className='career__wrapper-bubble-arrow' style={{display: 'none'}}>
              <FaLocationArrow />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career