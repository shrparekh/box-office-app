import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />

      <Outlet />
      {/* components is a replacemenet  for children componnets*/}
    </div>
  );
};

export default MainLayout;
