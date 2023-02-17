import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';


const App = () => {

  const paths = [
    { path: '/', element: <Home /> },
    { path: '/room/:id', element: <RoomDetails /> },
    { path: '*', element: <PageNotFound /> },
  ]

  const router = createBrowserRouter(paths);


  return (
    <main className='max-w-[1440px] mx-auto bg-white'>

      <Header />

      <RouterProvider router={router} />

      <Footer />

    </main>
  )
}

export default App