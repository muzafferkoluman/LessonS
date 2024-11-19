// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import FirstPage from 'src/FirstPage';
import SecondPage from 'src/SecondPage';

export function App() {
  return (
    <div>
      <h1>Welcome to my awesome website</h1>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/second' element={<SecondPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
