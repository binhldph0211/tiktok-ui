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
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Setting from '~/pages/Setting';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';
import { SidebarOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.setting, component: Setting, layout: SidebarOnly },
];

// Cần đăng nhập mới xem dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
