// A. BAN ĐẦU

// import Home from '~/pages/Home';
// import Following from '~/pages/Following';
// import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
// import Setting from '~/pages/Setting';
// import { HeaderOnly } from '~/Layout';
// import { SidebarOnly } from '~/Layout';

// // Ko cần đăng nhập vẫn xem đc
// const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/following', component: Following },
//     // { path: '/profile', component: Profile },
//     { path: '/@:nickname', component: Profile },
//     { path: '/upload', component: Upload, layout: HeaderOnly },
//     { path: '/search', component: Search, layout: null },
//     { path: '/setting', component: Setting, layout: SidebarOnly },
// ];

// // Cần đăng nhập mới xem dc
// const privateRoutes = [];

// export { publicRoutes, privateRoutes };

// B. TỐI ƯU
import routesConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Setting from '~/pages/Setting';
import { HeaderOnly } from '~/Layout';
import { SidebarOnly } from '~/Layout';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.setting, component: Setting, layout: SidebarOnly },
];

// Cần đăng nhập mới xem dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
