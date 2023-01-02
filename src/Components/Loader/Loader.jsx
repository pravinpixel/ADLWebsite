import './loader.css'
const Loader = () => {
    return <div className='appLoader'>
            <img src={require('../../../src/assets/images/logoberg.png')}  width="200px" />
            <div className='loaderDotContainer'>
                <div class="loaderDot"></div>
                <div class="loaderDot"></div>
                <div class="loaderDot"></div>
                <div class="loaderDot"></div>
                <div class="loaderDot"></div>
            </div>
        </div>
}
export default Loader