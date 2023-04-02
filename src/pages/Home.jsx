import { BookForm, HeroSlider, Rooms } from '../components';
import { LogoDark } from '../assets';


const Home = () => {
  return (
    <div className=''>
      {/* <LogoDark /> */}

      <HeroSlider />

      <div className='container mx-auto relative'>

        <div className='bg-accent/20 mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:-top-12 lg:z-30 lg:shadow-xl'>
          <BookForm />
        </div>

      </div>

      <Rooms />
    </div>
  );
};

export default Home;
