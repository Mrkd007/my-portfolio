import Image from "../../utils/images"

const Projects = () => {
  return (
    <section id='projectSection' className='container projects-container'>
			<div className='container__header'>Projects</div>
      <div className="projects-wrapper">
        <div className="projects-wrapper__content">
          <div className="projects-wrapper__block">
            <div className="projects-wrapper__block-showcase">
              <img src={Image.ProductImg1} alt="projectImg" width={100}/>
              {/* <div className="projects-wrapper__block-showcase-overlay">
                <button>View Details</button>
              </div> */}
            </div>
            <div className="projects-wrapper__block-details">
              <h1 className="block-details__title">Project 1</h1>
              <p className="block-details__desc">This project is all about showcase and brief intro section to the project</p>
              <div className="block-details__other">
                <h3 className="block-details__other-subHeader">Key points</h3>
                <ul className="block-details__other-list">
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                </ul>
              </div>
              <div className="block-details__footer">
                <button>Github code</button>
                {/* <button>Open in Modal</button> */}
                <button>Live demo</button>
              </div>
            </div>
          </div>
          <div className="projects-wrapper__block right-aligned">
            <div className="projects-wrapper__block-showcase">
              <img src={Image.ProductImg2} alt="projectImg" width={100}/>
            </div>
            <div className="projects-wrapper__block-details">
              <h1 className="block-details__title">Project 2</h1>
              <p className="block-details__desc">This project is all about showcase and brief intro section to the project</p>
              <div className="block-details__other">
                <h3 className="block-details__other-subHeader">Key points</h3>
                <ul className="block-details__other-list">
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                </ul>
              </div>
              <div className="block-details__footer">
                <button>Github code</button>
                {/* <button>Open in Modal</button> */}
                <button>Live demo</button>
              </div>
            </div>
          </div>
          <div className="projects-wrapper__block">
            <div className="projects-wrapper__block-showcase">
              <img src={Image.ProductImg3} alt="projectImg" width={100}/>
            </div>
            <div className="projects-wrapper__block-details">
              <h1 className="block-details__title">Project 3</h1>
              <p className="block-details__desc">This project is all about showcase and brief intro section to the project</p>
              <div className="block-details__other">
                <h3 className="block-details__other-subHeader">Key points</h3>
                <ul className="block-details__other-list">
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                  <li>This is a featured project</li>
                </ul>
              </div>
              <div className="block-details__footer">
                <button>Github code</button>
                {/* <button>Open in Modal</button> */}
                <button>Live demo</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects-wrapper__footer">
          &lt;
          .
          .
          .
          &gt;
        </div>
      </div>
    </section>
  )
}

export default Projects