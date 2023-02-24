import Sliders from 'react-slick'
import { useTopPackages } from '../../../Hooks';
import PackageCard from '../../Containers/PackageCardComponent';
export default function PackagesSliders({ title, subTitle }) {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,

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
  const Packages = useTopPackages();
  if (!Packages.isLoading) return (
    <section className="popular-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>{title}</span>{subTitle}</h2>
            </div>
            <Sliders {...settings} className="popular-lists">
              {Packages.data.data.map((item, index) => <PackageCard key={index} data={item} />)}
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}