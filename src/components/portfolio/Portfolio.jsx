import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const portfolio = () => {
  return (
    <section id="portfolio">
    <h2>My Recent Work</h2>

    <div className='container portfolio_container'>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG1} alt="" />
      </div>
      <h2> Ant Smash Bug Mania Game</h2>
      <div className='portfololi_item-cta'>
      <a href="https://github.com/ruptaker/Andro-d-Bug-Game-" target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
      <a href="https://github.com/ruptaker/Andro-d-Bug-Game-" target="_blank" rel="noopener noreferrer"  className='btn btn-primary'>Project Report</a>

      </div>


      
     </article>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG2} alt="" />
      </div>
      <h2> Data Vizualization of Nepal Earthquakes</h2>
      <div className='portfololi_item-cta'>
      <a href="https://github.com/ruptaker/Data-Visualisation-of-Nepal-Earthquake-Dataset" rel="noopener noreferrer" target="_blank" className='btn'>GitHub</a>
      <a href="https://github.com/ruptaker/Data-Visualisation-of-Nepal-Earthquake-Dataset/blob/main/REPORT.docx" rel="noopener noreferrer" target="_blank" className='btn btn-primary'>Project Report</a>
      </div>


      
     </article>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG3} alt="" />
      </div>
      <h2>Go Chat Server</h2>
      <div className='portfololi_item-cta'>
      <a href="https://github.com/ruptaker/Dinning-philosopher-Probelm-on-GO-on-multiple-server-" rel="noopener noreferrer" target="_blank" className='btn'>GitHub</a>
      <a href="https://github.com/ruptaker/Dinning-philosopher-Probelm-on-GO-on-multiple-server-/blob/main/report%20read%20me%20file.docx" rel="noopener noreferrer" target="_blank" className='btn btn-primary'>Project Report</a>
      </div>


      
     </article>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG4} alt="" />
      </div>
      <h2> Flight Price Prediction</h2>
      <div className='portfololi_item-cta'>
      <a href="https://github.com/ruptaker/flightprice" target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
      <a href="https://www.youtube.com/watch?v=rEic5c-Y1gY&t=21s&ab_channel=Ruptaker" rel="noopener noreferrer" target="_blank" className='btn btn-primary'>Project Report</a>
      </div>


      
     </article>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG5} alt="" />
      </div>
      <h2> Portfolio using React</h2>
      <div className='portfololi_item-cta'>

      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Project Report</a>
      </div>


      
     </article>
     <article className='portfolio_item'>
      <div className="portfolio_item-image">

      <img src={IMG6} alt="" />
      </div>
      <h2> Economization of Airport using Computer Science</h2>
      <div className='portfololi_item-cta'>

      <a href="http://siga.uubf.itu.edu.tr/uubftez/upload/itu/uubf/ucak/Rupesh_SHRESTHA-ucak-20200804.pdf" target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
      <a href="http://siga.uubf.itu.edu.tr/uubftez/upload/itu/uubf/ucak/Rupesh_SHRESTHA-ucak-20200804.pdf" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Project Report</a>
      </div>


      
     </article>




    </div>
    <h2> Portfolio</h2>






    </section>
  )
}

export default portfolio
