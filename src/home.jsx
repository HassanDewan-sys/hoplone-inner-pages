import Homemainjs from './components/homemainjs';
import Banner from './components/banner';
import Testimonial from './components/testimonial'
import Clinets from './components/clinets';
import About from './components/about';
import Video from './components/video';
import Portfolio from './components/portfolio';
import Faqs from './components/faqs';
import Blogs from './components/blogs';
import ServicesNew from './components/services-new';
import MainLoadingScreen from '../mainloader';

const Home = () => {
  
  return (
    <>
      <MainLoadingScreen></MainLoadingScreen>
      <Homemainjs></Homemainjs>
      <Banner></Banner>
      <About></About>
      <Video></Video>
      <Portfolio></Portfolio>
      <ServicesNew></ServicesNew>
      <Clinets></Clinets>
      <Testimonial></Testimonial>
      <Faqs></Faqs>
      <Blogs></Blogs>
    </>
  )
}

export default Home