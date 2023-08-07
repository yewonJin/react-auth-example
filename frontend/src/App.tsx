import { Outlet } from 'react-router-dom';

import TopNav from './TopNav';

function App() {
   return (
      <>
         <TopNav />
         <Outlet />
      </>
   );
}

export default App;
