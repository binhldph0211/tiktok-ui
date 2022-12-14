**\*\***\*\*\*\***\*\*** CÁC BƯỚC THỰC HIỆN CHI TIẾT & GHI CHÚ **\*\***\***\*\***

1. Tạo dự án tiktok

-   chạy lệnh: npx create-react-app tiktok-ui

-   Đổi port (nếu muốn):
    . Trong dự án tiktok-ui --> tạo file '.env.local'
    // .env.local
    PORT=5000
    --> sau đó chạy lệnh: npm start --> nó sẽ hiện: http://localhost:5000

2. Tạo repo github để đẩy code lên:

-   B1: Vào github
-   B2: chọn New --> Repository Name: tiktok-ui --> Create repository
-   B3: . Mở dự án của bạn: cd Reactjs_F8\Bai9_DungBaseDuAnTiktok\tiktok-ui
    --> rồi chạy lệnh: (để nó add remote repository mình vừa tạo ở trên github về dự án của mình)
    git remote add origin https://github.com/binhldph0211/tiktok-ui.git

    . Sau đó Chạy lệnh: git branch -M main
    . Sau đó chạy lệnh: git push -u origin main

3. Cài đặt thư viện customize-cra

-   customize-cra:
    . Để ghì đè, tùy chỉnh cấu hình 'webpack' mà không cần eject.
    . Thư viện create-react-app đã cấu hình sẵn 'webpack' và 'babel' cho chúng ta rồi nhưng nó lại ko để lộ ra ngoài cho chúng ta thấy.
    --> Vậy chúng ta muốn cấu hình webpack thì làm thế nào? --> đó là dùng thư viện: customize-cra
    (Override create-react-app webpack configs without ejecting)

-   Gõ google: customize-cra github
    https://github.com/arackaf/customize-cra

-   Cài đặt:
    . chạy lệnh: npm install customize-cra react-app-rewired -D

-   Vào đọc docs của thằng này: 'react-app-rewired' vì để dùng dc 'customize-cra' thì phải có nó
    https://github.com/timarney/react-app-rewired/

    . Cách kiểm tra version của webpack mà ta đã cài thông qua creact-react-app:
    Vào package-lock.json --> Crtl + F --> gõ: webpack --> tìm

    . Tạo một file 'config-overrides.js' trong thư mục gốc

          // config-overrides.js
          module.exports = function override(config, env) {
          //do stuff with the webpack config...
          return config;
          }

    . 'Lật' các cuộc gọi hiện có react-scripts trong npm tập lệnh để bắt đầu, xây dựng và kiểm tra (có nghĩa là thay thế 'react-scripts' thành 'react-app-rewired')
    /_ package.json _/ -->

          "scripts": {
          -   "start": "react-scripts start",
          +   "start": "react-app-rewired start",
          -   "build": "react-scripts build",
          +   "build": "react-app-rewired build",
          -   "test": "react-scripts test",
          +   "test": "react-app-rewired test",
              "eject": "react-scripts eject"
          }
          Lưu ý: KHÔNG lật cuộc gọi cho eject tập lệnh. Điều đó chỉ được chạy một lần cho một dự án, sau đó bạn được toàn quyền kiểm soát cấu hình webpack khiến react-app-rewired không còn cần thiết nữa. Không có tùy chọn cấu hình nào để tua lại tập eject lệnh.

    . Vào dự án --> Ctrl + c để thoát ra --> chạy lại dự án để kiểm tra xem có bị lỗi gì ko:
    npm start --> f12 --> console để xem có bị lỗi gì ko

4. Cài đặt thư viện babel-plugin-module-resolver

-   Gõ google: github babel-plugin-module-resolver
    https://github.com/tleunen/babel-plugin-module-resolver

-   Thư viện này giúp mình:
    Đơn giản hóa các đường dẫn yêu cầu/nhập trong dự án của bạn. Ví dụ: thay vì sử dụng các đường dẫn tương đối phức tạp như ../../../../utils/my-utils, bạn có thể viết utils/my-utils. Nó sẽ cho phép bạn làm việc nhanh hơn vì bạn không cần phải tính xem bạn phải đi lên bao nhiêu cấp thư mục trước khi truy cập tệp.

-   Cài đặt
    . chạy lệnh: npm install --save-dev babel-plugin-module-resolver
    . Tại thư mục gốc --> tạo file '.babelrc' (đứng ngang hàng với 'src')
    // .babelrc

              {
                  "plugins": [
                      ["module-resolver", {
                      "root": ["./src"],
                      "alias": {
                          "test": "./test",
                          "underscore": "lodash"
                      }
                      }]
                  ]
              }

    --> rồi sửa đổi cho phù hợp với nhu câu của mình:

              {
                  "plugins": [
                  ["module-resolver", {
                      "alias": {
                      "~": "./src"
                      }
                  }]
                  ]
              }

    --> lý do sửa đổi vì ko muốn lúc mình import nó giống như thư viện:

              bình thường khi chưa cài, chúng ta hay làm thế này:
              import MyUtilFn from './utils'

              Còn nếu để nguyên cấu hình khi cài mặc định ban đầu thì sẽ như thế này:
              import MyUtilFn from 'utils'

              thành ra nó rất giống khi import thư viện:
              import react from 'react'

              Còn sau khi sửa đổi cấu hình theo ý ta thì sẽ import như thế này:
              import App from '~/App'

    . Editors autocompletion: Tại thư mục gốc --> Tạo file 'jsconfig.json'
    // jsconfig.json

              {
              "compilerOptions": {
                  "baseUrl": ".",
                  "paths": {
                  "*": ["src/*"],
                  "test/*": ["test/*"],
                  "underscore": ["lodash"]
                  }
              }
              }

          --> sau đó sửa đổi thành:
                  {
                  "compilerOptions": {
                      "baseUrl": ".",
                      "paths": {
                      "~/*": ["src/*"]
                      }
                  }
                  }

    . Nạp file '.babelrc' vào webpack (vì webpack ko tự động nạp file '.babelrc')
    --> vào: https://github.com/arackaf/customize-cra
    --> tìm đến phần: With webpack --> copy toàn bộ phần: 'For example' --> vào file 'config-overrides.js' và xóa toàn bộ code trong đó --> sau đó paste code kia vào

          --> sau đó sửa đổi thành:
              const { override } = require("customize-cra");
              module.exports = override();

          (--> Giải thích: khi npm start --> react-app-rewired start --> sau đó 'react-app-rewired' sẽ đọc file 'config-overrides.js'
          --> 'react-app-rewired' khi đọc file 'config-overrides.js' nó kì vọng sẽ nhận dc một cấu hình override webpack.
              Và {override} này dc module.export trả về đúng cấu hình của webpack khi cài dự án 'react' thông qua 'create-react-app' --> NÓ lấy nguyên cấu hình webpack đấy và chạy dự án của chúng ta.
              Bây h chúng ta muốn thay đổi một phần nào đó cấu hình webpack thì chúng ta viết trong override đó.
              Và bây h chúng ta muốn cấu hình: webpack thêm .babelrc vào wepack --> bước tiếp theo ở dưới
          )

    . Gõ goole: customize-cra babel github
    https://github.com/arackaf/customize-cra/blob/master/api.md

          --> đến phần: api docs --> click vào useBabelRc
          --> muốn '.babelrc' dc nạp vào thì ta dùng 'useBabelRc'
          --> Vào file 'config-overrides.js' sửa thành:

              const { override, useBabelRc } = require("customize-cra");
              module.exports = override(
                  useBabelRc()
              );

    . Thoát khỏi dự án và chạy lại: npm start --> để xem có lỗi gì ko.

-   Test thử: vào file 'index.js'

    Từ: import App from './App';
    thành: import App from '~/App';

    --> save rồi mở devtool xem có lỗi gì ko

5. Cài đặt và cấu hình Prettier

-   Prettier: giúp format code --> code nhìn gọn gàng, ngăn nắp, nhìn đẹp hơn, và dễ đọc hơn.

-   Gõ google: prettier github
    https://github.com/prettier/prettier-vscode
    https://prettier.io/docs/en/configuration.html

-   Cài đặt: (theo cách đơn giản nhất của VS code)
    . Mở VS code
    . Vào extension --> search: Prettier --> click vào: Prettier - Code formatter --> install

-   Cấu hình:
    . Tại thư mục gốc --> tạo file '.prettierrc'
    // .prettierrc
    {
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
    }

    . Tại thư mục gốc --> tạo forder '.vscode' --> trong thư mục '.vscode' tạo file 'settings.json' --> Cài này là cài đặt thuộc VS-code
    // settings.json
    {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

6. Cấu hình sử dụng CSS/SASS

-   Bước 1: Tạo GlobalStyles component (GlobalStyles.scss là để css cho toàn bộ App)
    . Trong foder 'components' tạo forder 'GlobalStyles'
    . Trong foder 'GlobalStyles' tạo 2 file là index.js và GlobalStyles.scss
    // index.js

        import './GlobalStyles.scss';

        function GlobalStyles({ children }) {
            return children;
        }

        export default GlobalStyles;

    . Tại thư mục gốc vào file 'index.js' (anh lớn) và thêm code:

    import GlobalStyles from './components/GlobalStyles';
    ...
    <GlobalStyles>
    <App />
    </GlobalStyles>

-   Bước 2: Cài thư viện SASS: 'npm i -D sass'
    . chạy lệnh: npm i -D sass
    --> -D là dev, vì trong môi trường product nó chỉ dùng CSS thôi. Cho nên scss chỉ cài ở môi trường dev thôi.

    . Những file ko dùng thì xóa bỏ: 'index.css', 'App.css', 'logo.svg'.

-   Bước 3: Reset CSS
    . Gõ google: reset css nomarlize npm
    https://www.npmjs.com/package/normalize.css

    . chạy lệnh: npm install --save normalize.css

    . Xài: vào file 'GlobalStyles.scss'
    @import 'normalize.css';

    . Vào kiểm tra xem ăn chưa:
    mở devtool --> element --> head --> <styl></style> ở trong phần head --> thấy có ':where'

-   Bước 4: Set Default CSS: font-family, font-size, line-height
    . Gõ google: font Roboto goole
    https://fonts.google.com/specimen/Roboto

    . Chọn
    Thin 100
    Light 300
    Regular 400
    Medium 500
    SemiBold 600
    Bold 700

    . copy mã code và đưa vào file 'GlobalStyles.scss'
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

    . copy (ở CSS rules to specify families) đưa vào file 'GlobalStyles.scss'

    font-family: 'Roboto', sans-serif;

7. Cấu hình Router / Layout cho dự án

-   B1: Phân tích tổng quan Layout (bố cục trang web)
    . Làm sao chúng ta biết dc tiktok có bao nhiêu layout? Những layout nào giống nhau, những layout nào khác nhau?
    --> Chúng ta chỉ còn cách là đi click vào các thành phần của website thôi để xem nó hiện ra layout gì.
    VD: click vào video, click vào upload-video, click vào đang follow, click vào Live, setting...
    --> Nếu thấy layout vẫn giữ nguyên chỉ thay đổi phần content thôi ==> đó là layout giống nhau
    --> Còn thấy layout nó chuyển sang layout khác hoặc kích thước lớn hay hoặc nhỏ hơn ==> đó là layout khác nhau.

    . Tìm dc layout chính của website
    Layout chính là khi di chuyển giữa các trang cùng layout thì phần content chỉ thay đổi nội dung mà thôi.
    Layout chính nó thương ở home, ở trang chủ

-   B2: Cài đặt 'react-router-dom': npm i react-router-dom
    . chạy lệnh: npm i react-router-dom

    . Cài extension gợi ý các cú pháp viết tắt code:
    gõ trong extension: react snip
    --> chọn Simple React Snippets

-   B3: Đưa cấu hình router ra ngoài:
    . Tại thư mục gốc (src) --> tạo file 'routes/index.js'

    --> index.js:

        import Home from '~/pages/Home';
        import Following from '~/pages/Following';

        // Ko cần đăng nhập vẫn xem đc
        const publicRoutes = [
            { path: '/', component: Home },
            { path: '/following', component: Following },
        ]; 

        const privateRoutes = []; // Cần đăng nhập mới xem dc

        export { publicRoutes, privateRoutes };

    . Vào file 'App.js':
            import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
            import { publicRoutes } from '~/routes';

            function App() {
                return (
                    <Router>
                        <div className="App">
                            <Routes>
                                {publicRoutes.map((route, index) => {
                                    const Page = route.component;
                                    return <Route key={index} path={route.path} element={<Page />} />;
                                })}
                            </Routes>
                        </div>
                    </Router>
                );
            }

            export default App;


    ( ghi chú: Cách cấu hình Router bình thường: Chỉ cần viết router trong App.js mà thôi
        // App.js

            import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
            import Home from './pages/Home';
            import Following from '~/pages/Following';

            function App() {
                return (
                    <Router>
                        <div className="App">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/following" element={<Following />} />
                            </Routes>
                        </div>
                    </Router>
                );
            }

            export default App;
    )


-   B4: Xây dựng cơ chế tải layout: ( CÁI NÀY RẤT HAY VÀ RẤT QUAN TRỌNG vì hồi đi học tôi bị mắc ở đây )

    . B1: tại 'src' tạo các forder 
        src --> Layout --> index.js   ( ...export { default as DefaultLayout } )
                       --> DefaultLayout --> index.js   (...export default DefaultLayout)
                                         --> Header --> index.js   (...export default Header)
                                         --> Sidebar --> index.js   (...export default Sidebar)

            --> pages --> Home --> index.js   (...export default Home)
                      --> Following --> index.js   (...export default Following)
                      --> Profile --> index.js   (...export default Profile)
                      --> Upload  --> index.js   (...export default Upload)

            --> routes --> index.js

            --> App.js

        
        // index.js (của forder routes)

                import Home from '~/pages/Home';
                import Following from '~/pages/Following';
                import Profile from '~/pages/Profile';
                import Upload from '~/pages/Upload';

                // Ko cần đăng nhập vẫn xem đc
                const publicRoutes = [
                    { path: '/', component: Home },
                    { path: '/following', component: Following },
                    { path: '/profile', component: Profile },
                    { path: '/upload', component: Upload },
                ];

                // Cần đăng nhập mới xem dc
                const privateRoutes = [];

                export { publicRoutes, privateRoutes };


        // App.js

            import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
            import { publicRoutes } from '~/routes';

            function App() {
                return (
                    <Router>
                        <div className="App">
                            <Routes>
                                {publicRoutes.map((route, index) => {
                                    const Page = route.component;
                                    return <Route key={index} path={route.path} element={<Page />} />;
                                })}
                            </Routes>
                        </div>
                    </Router>
                );
            }

            export default App;


    ==> Kết quả tại bước 1 là đang xây dựng những cái cơ bản:
        http://localhost:3000/              --> Home page
        http://localhost:3000/following     --> Following page
        http://localhost:3000/profile       --> Profile page

    --> Vấn đề mà bước 1 còn thiếu, chưa giải quyết dc là:
        > Chưa sử dụng dc Header và Sidebar. Đó là những thành phần DefaultLayout.
        > Chưa kết hợp được Layout và pages lại với nhau:
         VD: Tôi muốn: 
          http://localhost:3000/                --> Header + Sidebar + Home page
          http://localhost:3000/following       --> Header + Following page
          http://localhost:3000/profile         --> Sidebar + Profile page
          http://localhost:3000/upload          --> Upload page

    --> Vậy làm sao để giải quyết vấn đề này: chúng ta sang bước tiếp theo


    . B2: Tại file 'App.js' thêm code:

        // App.js

        ...
         import { DefaultLayout } from './Layout';

                ...
                    { publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return <Route 
                                    ...
                                    element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                    } 
                                />;
                    })}
                ...


        --> Như vậy ở bước 2 này chúng ta có dc kết quả như sau:
            http://localhost:3000/              --> Header + Sidebar + Home page
            http://localhost:3000/following     --> Header + Sidebar + Following page
            http://localhost:3000/profile       --> Header + Sidebar + Profile page

        
        --> Như vậy ở bước 2 này chúng ta đã tiến bộ hơn, nhưng vẫn chưa giải quyết dc vấn đề mà ta mong muốn.


    . B3: 
        > Tại index.js của routes thêm code:
        // index.js (routes)

        ....
        { path: '/upload', component: Upload, layout: null },
        ....

        
        // App.js thêm code

        ...
        import { Fragment } from 'react';

        ...
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}


        --> Kết quả ở bước 3 là:
            http://localhost:3000/              --> Header + Sidebar + Home page
            http://localhost:3000/following     --> Header + Sidebar + Following page
            http://localhost:3000/upload        --> Upload page


        --> Như vậy cũng là gần đạt dc điều chúng ta muốn


    . B4: Bây giờ tôi muốn như ở dưới đây thì làm như thế nào? 
          http://localhost:3000/upload      --> Header + Upload page

          // Cách 1: Chúng ta chỉ cần thêm 'Header' vào Upload mà thôi:

            > index.js (của forder Upload)

                    import Header from '~/Layout/DefaultLayout/Header';

                    function Upload() {
                        return (
                            <div>
                                <Header />
                                <div className="content">
                                    <h2>Upload pages</h2>;
                                </div>
                            </div>
                        );
                    }

                    export default Upload;


        // Cách 2: 

        . Tại forder 'Layout' thêm forder 'HeaderOnly'
            Layout --> ....
                   --> HeaderOnly --> Header --> index.js    (...export default Header)
                                  --> index.js 
            
            // index.js (của HeaderOnly)

                    import Header from './Header';

                    function HeaderOnly({ children }) {
                        return (
                            <div>
                                <Header />
                                <div className="container">
                                    <div className="content">{children}</div>
                                </div>
                            </div>
                        );
                    }

                    export default HeaderOnly;

        . Tại 'index.js' của Layout thêm code

            ...
            export { default as HeaderOnly } from './HeaderOnly';


        . Tại 'index.js' của forder 'routes --> thêm code

            ...
            import { HeaderOnly } from '~/Layout';

            ...
            { path: '/upload', component: Upload, layout: HeaderOnly },


        . Tại App.js sửa đổi và thêm code

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        } 
          

          --> kết quả của Bước 4 là:
                http://localhost:3000/              --> Header + Sidebar + Home page
                http://localhost:3000/following     --> Header + Sidebar + Following page
                http://localhost:3000/upload        --> Header + Upload page


    . B5: Test thêm:
        . Tại forder 'pages' thêm forder 'Search'
            pages --> ...
                  --> Search --> index.js   (...export default Search)

        . Tại 'index.js' của forder 'routes' thêm code

            ...
            import Search from '~/pages/Search';

            ...
            { path: '/search', component: Search, layout: null },

        
        --> http://localhost:3000/search    --> Search page


        ==> OK! Như vậy là chúng ta đã đạt được điều chúng ta muốn
            Đã xây dựng cơ chế tải layout thành công
    
    . B6: Tôi tự thêm 'SidebarOnly' để test thêm

            http://localhost:3000/setting       --> Sidebar + Setting page

    
    . B7: Bị lặp phần Header và Sidebar ở phần Layout nên đã tái cấu trúc lại sao cho nó ko bị lặp nữa.


========> TỔNG KẾT Xây dựng tải LAYOUT với những mục quan trọng như sau: <=========

+ Thứ nhất: Cấu trúc thư mục: Tại 'src' có các forder và file như sau

    
        src --> Layout --> index.js   ( ...export { default as DefaultLayout } )
                       
                       --> components    --> Header --> index.js   (...export default Header)
                                         --> Sidebar --> index.js   (...export default Sidebar)

                       --> DefaultLayout --> index.js   (...export default DefaultLayout)
                       --> HeaderOnly --> index.js   (...export default HeaderOnly)
                       --> SidebarOnly --> index.js   (...export default SidebarOnly)


            --> pages --> Home --> index.js   (...export default Home)
                      --> Following --> index.js   (...export default Following)
                      --> Profile --> index.js   (...export default Profile)
                      --> Upload  --> index.js   (...export default Upload)
                      --> Search  --> index.js   (...export default Search)
                      --> Setting  --> index.js   (...export default Setting)

            --> routes --> index.js

            --> App.js


+ Thứ hai: Chi tiết các file quan trọng

// Layout --> index.js 

        export { default as DefaultLayout } from './DefaultLayout';
        export { default as HeaderOnly } from './HeaderOnly';
        export { default as SidebarOnly } from './SidebarOnly';


// DefaultLayout --> index.js

        import Header from '../components/Header';
        import Sidebar from '../components/Sidebar';

        function DefaultLayout({ children }) {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <Sidebar />
                        <div className="content">{children}</div>
                    </div>
                </div>
            );
        }

        export default DefaultLayout;


// HeaderOnly --> index.js

        import Header from '../components/Header';

        function HeaderOnly({ children }) {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="content">{children}</div>
                    </div>
                </div>
            );
        }

        export default HeaderOnly;


// SidebarOnly --> index.js 

        import Sidebar from '../components/Sidebar';

        function SibarOnly({ children }) {
            return (
                <div>
                    <Sidebar />
                    <div className="container">
                        <div className="content">{children}</div>
                    </div>
                </div>
            );
        }

        export default SibarOnly;


// routes --> index.js 

        import Home from '~/pages/Home';
        import Following from '~/pages/Following';
        import Profile from '~/pages/Profile';
        import Upload from '~/pages/Upload';
        import Search from '~/pages/Search';
        import Setting from '~/pages/Setting';
        import { HeaderOnly } from '~/Layout';
        import { SidebarOnly } from '~/Layout';

        const publicRoutes = [
            { path: '/', component: Home },
            { path: '/following', component: Following },
            { path: '/profile', component: Profile },
            { path: '/upload', component: Upload, layout: HeaderOnly },
            { path: '/search', component: Search, layout: null },
            { path: '/setting', component: Setting, layout: SidebarOnly },
        ];

        const privateRoutes = [];

        export { publicRoutes, privateRoutes };


// App.js 

        import { Fragment } from 'react';
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        import { publicRoutes } from '~/routes';
        import { DefaultLayout } from './Layout';

        function App() {
            return (
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            );
        }

        export default App;
