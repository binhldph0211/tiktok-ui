**************** CÁC BƯỚC THỰC HIỆN CHI TIẾT & GHI CHÚ *************

1. Tạo dự án tiktok

- chạy lệnh: npx create-react-app tiktok-ui

- Đổi port (nếu muốn): 
    . Trong dự án tiktok-ui --> tạo file '.env.local'
        // .env.local
            PORT=5000
    
    --> sau đó chạy lệnh: npm start  --> nó sẽ hiện: http://localhost:5000

2. Tạo repo github để đẩy code lên:

- B1: Vào github
- B2: chọn New --> Repository Name: tiktok-ui  --> Create repository
- B3: . Mở dự án của bạn: cd Reactjs_F8\Bai9_DungBaseDuAnTiktok\tiktok-ui
   --> rồi chạy lệnh: (để nó add remote repository mình vừa tạo ở trên github về dự án của mình)
        git remote add origin https://github.com/binhldph0211/tiktok-ui.git

    . Sau đó Chạy lệnh: git branch -M main 
    . Sau đó chạy lệnh: git push -u origin main

3. Cài đặt thư viện customize-cra

- customize-cra:
    . Để ghì đè, tùy chỉnh cấu hình 'webpack' mà không cần eject.
    . Thư viện create-react-app đã cấu hình sẵn 'webpack' và 'babel' cho chúng ta rồi nhưng nó lại ko để lộ ra ngoài cho chúng ta thấy.
     --> Vậy chúng ta muốn cấu hình webpack thì làm thế nào? --> đó là dùng thư viện: customize-cra
        (Override create-react-app webpack configs without ejecting)

- Gõ google: customize-cra github
    https://github.com/arackaf/customize-cra

- Cài đặt:
    . chạy lệnh: npm install customize-cra react-app-rewired -D

- Vào đọc docs của thằng này: 'react-app-rewired' vì để dùng dc 'customize-cra' thì phải có nó
    https://github.com/timarney/react-app-rewired/

    . Cách kiểm tra version của webpack mà ta đã cài thông qua creact-react-app:
        Vào package-lock.json  --> Crtl + F --> gõ: webpack --> tìm

    . Tạo một file 'config-overrides.js' trong thư mục gốc

        // config-overrides.js
        module.exports = function override(config, env) {
        //do stuff with the webpack config...
        return config;
        }

    . 'Lật' các cuộc gọi hiện có react-scripts trong npm tập lệnh để bắt đầu, xây dựng và kiểm tra (có nghĩa là thay thế 'react-scripts' thành  'react-app-rewired')
        /* package.json */ -->

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

- Gõ google: github babel-plugin-module-resolver
    https://github.com/tleunen/babel-plugin-module-resolver

- Thư viện này giúp mình: 
    Đơn giản hóa các đường dẫn yêu cầu/nhập trong dự án của bạn. Ví dụ: thay vì sử dụng các đường dẫn tương đối phức tạp như ../../../../utils/my-utils, bạn có thể viết utils/my-utils. Nó sẽ cho phép bạn làm việc nhanh hơn vì bạn không cần phải tính xem bạn phải đi lên bao nhiêu cấp thư mục trước khi truy cập tệp.

- Cài đặt
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

    . Thoát khỏi dự án và chạy lại: npm start  --> để xem có lỗi gì ko.
    

- Test thử: vào file 'index.js'

    Từ: import App from './App';
    thành: import App from '~/App';

    --> save rồi  mở devtool xem có lỗi gì ko