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