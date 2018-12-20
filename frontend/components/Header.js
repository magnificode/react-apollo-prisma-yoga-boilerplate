import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from "./Nav";

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Header = () => (
  <div>
    <div>
      <Nav />
    </div>
    <div>
      <p>Search</p>
    </div>
  </div>
);

export default Header;