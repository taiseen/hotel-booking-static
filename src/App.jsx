import { Footer, Header, PageNotFound } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, RoomDetails } from './pages';

const App = () => {

  return (
    <main className='max-w-[1440px] mx-auto bg-white'>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<RoomDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />

    </main>
  )
}

export default App