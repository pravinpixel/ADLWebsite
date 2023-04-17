import blogBg from '../../../assets/images/blog-bg.jpg'
import Sliders from 'react-slick'
import { useNewsQuery } from '../../../services/apiMaster';
export default function LatestBlogs() {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 2,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

        }
      },
    ]
  };
  const { data, isSuccess } = useNewsQuery()
 if(isSuccess) return (
    <section className="media-structure">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Latest</span> Happenings</h2>
            </div>
            <Sliders {...settings} className="lat-hapns">
              {
                data.data.map((item, i) => (
                  <div key={i} className="haapns">
                    <h3>{item.created_at}</h3>
                    <h4>{item.title}</h4>
                    <p> {item.description} </p>
                  </div>
                ))
              }
            </Sliders>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>Blog</span> Knowledge HUB</h2>
            </div>
            <div className="knoledge-hub">
              <img src={blogBg} alt="" className="img-fluid" />
              <div className="know-hub">
                <h4>What is Antibody Testing?</h4>
                <p>The antibody or serology test is done to ascertain a previous viral infection and the body’s immune response towards it.</p>
                <p><a href="https://www.anandlab.com/blog/10-tips-for-maintaining-a-healthy-liver/" target="_blank">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
