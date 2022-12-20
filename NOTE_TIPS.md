**\*\***\*\*\***\*\*** Những cái hay tôi học được **\*\***\*\***\*\***

1. Cách CSS để logo quay

.App-logo {
animation: App-logo-spin infinite 20s linear;
}

@keyframes App-logo-spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}

2. Anh SƠn bảo kĩ năng 'đọc hiểu document'. Một số document nó ko viết rõ ràng, đầy đủ cho nên mình đọc phải hiểu.

3. Tôi học dc 1 điều hay: bất cứ thư viện gì mà cài dc bằng npm thì ta có thể search:

-   npm + tên thư viện
-   github + tên thư viện

4. Cách muốn trỏ về bài nào đấy trong github thì làm như sau:
   Chạy lệnh: git checkout + mã SHA

5. Những file ko dùng thì nên xóa bỏ: 'index.css', 'App.css', 'logo.svg'...(A Sơn)

6. Cách viết component ôm một component sao cho nhanh:

-   ban đầu:

function App() {
  return (
      <div className="App"></div>
  );
}

-   Cách làm:
    . bôi đen toàn bộ cái cần ôm ( trong th này là toàn bộ thẻ div )
    . ấn Ctrl + shift + p --> ô 'Command paletter' hiện ra --> gõ 'wrap'
    . Gõ cái bạn cần rồi ấn enter:
    VD: Router

-   kết quả:

function App() {
    return (
      <Router>
        <div className="App"></div>
      </Router>
    );
}

* Ngoài ra còn cách 2 là cài extension trong vscode: htmltagwrap


7. Cách để import đỡ dài:

- Cấu trúc thư mục: 
  . src --> Layout --> DefaultLayout --> index.js
        --> App.js

  . Trong file 'index.js' của DefaulLayout đã có export default DefaultLayout rồi

- Cách viết bình thường:
  // App.js

  import DefaultLayout from './Layout/DefaultLayout';

- Cách viết đỡ dài:
    . Trong foder 'Layout' tạo file 'index.js'
      // index.js (của Layout)

      export { default as DefaultLayout } from './DefaultLayout';
    
    . Cách viết đỡ dài
    // App.js
    import { DefaultLayout } from './Layout';


8. import { Fragment } from 'react';

- Fragment sinh ra để chứa thôi. Nó ko sinh thẻ trong DOM


9. A SƠN bảo là hãy code thuần cho tốt đã, rồi hãy dùng thư viện vì như thế mình mới hiểu dc cái gốc.

10. Một cách cài fontawesome cũng hay:

- Ta copy đoạn mã sau --> cho vào dependencies của file 'package.json'

    "@fortawesome/fontawesome-svg-core": "^1.3.0",
    "@fortawesome/free-brands-svg-icons": "^6.0.0",
    "@fortawesome/free-regular-svg-icons": "^6.0.0",
    "@fortawesome/free-solid-svg-icons": "^6.0.0",
    "@fortawesome/react-fontawesome": "^0.1.17",

- Chạy lệnh: npm install

- Kiểm tra xem OK chưa: vào node_modules --> xem có @fontawesome ko? Nếu có thì OK, nếu ko thì chưa cài dc

- Xài: với Reactjs:

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

  <FontAwesomeIcon icon={faCircleXmark} />


  11. Một kĩ thuật CSS rất hay là: focus vào thằng con 'input' thì thằng cha 'div' hiện border.

  - gõ google: focus within
    https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within
  
  - Cách làm:

    <div className='search'>
        <input />
        <button>
            <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </div>

    .search:focus-within {
      border: 1px solid red;
    } 

--> Giải thích cách hoạt động:
    . focus-within: focus vào bên trong
    . The :focus-within khớp với một phần tử nếu phần tử đó hoặc bất kỳ phần tử con nào của nó được focus


12. thẻ Input khi mình focus vào thì thấy có '|' nhấp nháy ở đầu ô input --> nó dc gọi là 'caret'

- Thay đổi màu sắc cho caret:
   
   input {
    caret-color: red;
   }

13. Một kĩ thuật rất hay: thẻ input có lớp giả :not()

    <div className={cx('search')}>
        <input placeholder="Search acounts and videos"/>
        <button className='search-btn'>
            <i class="fa-light fa-magnifying-glass"></i>
        </button>
    </div>


    input:not(:placeholder-shown) ~ .search-btn {
        color: rgba(22, 24, 35, 0.75);
    }


14. Một kĩ thuật rất hay để xem dc CSS của thằng popper trong devtool (thằng này khi click vào thì nó mới hiện ra - VD: popper lịch sử tìm kiếm)

- B1: Mở devtool

- B2: Console và viết

setTimeout(() => {

    debugger;
}, 5000);


- B3: Trong lúc chờ 5s của setTimeout thì nhanh tay:
  . Ấn vào nơi mà popper sẽ hiện ra
  . Sau đó ngồi chờ setTimeout chạy

- B4: Khi setTimeout đã chạy xong thì ta:
  . Selector (hình con chuột ở devtool) nó hoặc các thành phần của nó và tìm ra cái bạn muốn


15. Thẻ 'a' chuyển link sang một tab một thì ta thêm thuộc tính này vào thẻ a:

target="_blank"


16. Mất hiệu ứng chuột trong CSS:

pointer-events: none;


17. Xem code dễ hơn ở trên github như ở trên VSCode

+ Xem toàn bộ code của dự án

- B1: vào dự án:
VD: https://github.com/binhldph0211/tiktok-ui

- B2: bấm dấu chấm  (.)  

+ Xem code của một commit nào đấy

- B1: Bấm vào commit bạn muốn xem

- B2: Bấm vào button 'Browse files'

- B3: bấm dấu chấm  (.) 

18. Cách lấy font chữ bản quyền của tiktok

- B1: vào tiktok.com

- B2: Mở devtool lên xem nó dùng font gì

- B3: vào Network --> click vào font

- B4: reload lại trang tiktok.com

- B5: thấy font được response ở Network  --> click chuột phải vào file font --> open new tab --> vậy là tải dc nó về

- Xài:
  . Đưa các file đó vào dự án của bạn
  . Nhúng font:
                
              @font-face {
              font-family: ProximaNova;
              src: url('/assets/fonts/Proxima-Nova-Regular.woff2');
              font-weight: 400;
              }

              @font-face {
                  font-family: ProximaNova;
                  src: url('/assets/fonts/ProximaNova-Semibold.woff2');
                  font-weight: 600;
              }

              @font-face {
                  font-family: ProximaNova;
                  src: url('/assets/fonts/Proxima-Nova-Bold.woff');
                  font-weight: 700;
              }

              @font-face {
                  font-family: SofiaPro;
                  src: url('/assets/fonts/sofiapro-semibold.otf');
                  font-weight: 700;
              }

  . Dùng:
        body {
          font-family: 'ProximaNova', sans-serif;
        }

19. url(/)  --> chỉ cần '/' là nó tự hiểu đang ở thư mục 'src'


20. Thẻ img thì khó đổi màu cho ảnh. Còn thẻ svg thì có thuộc tính đổi màu trong đó rồi.
svg dễ đổi  màu ảnh hơn img

21. Trong quá trình làm việc thực tế, đôi khi bạn gặp những lỗi khá bất ngờ, không lường trước được.
Việc đầu tiên là phải xác định được lỗi. Thì làm sao để xác định được --> Dựa vào kinh nghiệm, kĩ năng, và phán đoán của bạn. 
. Phán đoán thằng này có vấn đề gì mà bị lỗi


22. Làm việc với API, ta nên xem phần 'network' của devtool vì ta sẽ xem dc 2 cái:
. Request   (payload là phần chúng ta gửi đi)
. Response


23. Trong query parameters:
{ path: '/@:nickname', component: Profile },

--> ':nickname' chính là pattern, nó không có định, nó thay đổi dc


24. Thuật ngữ 'debounce'
- Nó là một kĩ thuật dành cho: "Khi bạn gặp tình thế một chuỗi hành động xảy ra liên tục thì bạn chỉ muốn thực hiện cái hành động cuối cùng mà thôi."

- Áp dụng cho các trường hợp như: "search --> tránh gọi API liên tục khi nhập vào ô tìm kiếm. Khi nào nhập xong rồi thì mới gọi API"

==> Bản chất của nó là setTimeout.


25. Vấn đề 'hard code' (fix cứng) như link, data,....sẽ gây ra vấn đề khi muốn thay đổi thì phải thay đổi rất nhiều chỗ
--> Mất thời gian, mất công, mất việc.
Vì thế để giải quyết vấn đề này, ta chỉ cần đặt biến  --> Chỉ cần thay đổi 1 chỗ thì thay đổi dc tất cả các chỗ khác.


26. Scrollbar thường nằm ở thẻ body: Làm scrollbar cho toàn trang: Custom scrollbar

body {
  overflow-y: overlay;
}

// SCROLLBAR
html *::-webkit-scrollbar {
    border-radius: 0;
    width: 8px;
}
html *::-webkit-scrollbar {
    border-radius: 0;
    width: 8px;
}
html *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(22, 24, 35, 0.06);
}
html *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(22, 24, 35, 0.06);
}
html *::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0);
}
html *::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0);
}

