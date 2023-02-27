import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Sliders from 'react-slick'
import { useConditions } from '../../../Hooks';

export default function ConditionsSliders() {
  const Navigate = useNavigate()
  const settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,

        }
      },
    ]
  };
  const conditions = useConditions()
  if (!conditions.isLoading) return (
    <section className="condition-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading white">
              <h2><span>Select Your Test According </span> to Your Condition </h2>
            </div>
            <br />
            <Sliders {...settings} className="condition-lsts text-center">
              {
                conditions.data.map((item, i) => (
                  <div key={i} className="tes-cond">
                    <LazyLoadImage src={item.image} width="100px"  effect="blur" className="img-fluid"/>
                    <h4 className='pr-4'>{item.name}</h4>
                    <button onClick={() => Navigate(`/for-patient?HealthCondition=${item.name}`)}><i className="fa fa-plus"></i></button>
                  </div>
                ))
              }
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}
