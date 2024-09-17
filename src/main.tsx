import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import router from './router/index'


document.title = 'STennis'
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <NextUIProvider>
      <main className='light'>
      <RouterProvider router={router} />
      </main>
    </NextUIProvider>
);
} else {
  console.error('Root element not found!');
}


