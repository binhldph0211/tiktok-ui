************* XÂY DỰNG PHẦN HEADER ************

1. Dựng khung Layout mặc định

- Cài đặt thư viện classnames: 

    . Chạy lệnh: npm i classnames

    . Xài:

        // Tại Header --> index.js

            import classNames from 'classnames/bind';
            import styles from './Header.module.scss';

            const cx = classNames.bind(styles);

            function Header() {
                return (
                    <header className={cx('wrapper')}>
                    </header>
                );
            }

            export default Header;
            

        // Tại Header --> tạo file 'Header.module.scss' và viết code vào đó

            .wrapper {
                height: 60px;
                box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
            }



2. Cách đi mò để lấy logo của tiktok

- B1: Chỉ vào logo của tiktok trên trang chủ --> chuột phải --> kiểm tra
và ta lấy được:

    <svg height="42" width="118" alt="TikTok">
        <use xlink:href="#svg-header-logo"></use>
    </svg>

--> phân tích thấy: họ sử dụng một cái link khác để lưu logo: <use xlink:href="#svg-header-logo"></use>
--> việc bây h của chúng ta là đi mò

- B2: tại devtool --> Ctrl + F --> gõ: 'svg-header-logo'

--> ta sẽ tìm dc 1 element có id='svg-header-logo'

<symbol id="svg-header-logo">
    <g clip-path="url(#clip0)"><path d=" 27.8381..." fill="#25F4EE"></path><path d="9 924C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z" fill="#25F4EE"></path><path d="M23.9923..." fill="#25F4EE"></path><path d="M20.4088..." fill="#FE2C55"></path><path d="M8.70642.." fill="#FE2C55"></path><path d="M23.9921.. " fill="#FE2C55"></path><path d="M17.4127..." fill="black"></path><path d="M30.0477..." fill="black"></path><path d="M69.0317..." fill="black"></path><path d="M45.7295..." fill="black"></path><path d="M52.347..." fill="black"></path><path d="M102.49..." fill="black"></path><path d="M48.0929..." fill="black"></path><path d="M83.5445..." fill="#25F4EE"></path><path d="M92.8579..." fill="#FE2C55"></path><path d="M91.5803..." fill="black"></path></g><defs><clipPath id="clip0"><rect width="118" height="42" fill="white"></rect></clipPath></defs>
</symbol>

- B3: Ta bỏ đi phần thẻ 'symbol' và chỉ lấy phần bên trong của nó thôi.

    <g clip-path="url(#clip0)"><path d=" 27.8381..." fill="#25F4EE"></path><path d="9 924C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z" fill="#25F4EE"></path><path d="M23.9923..." fill="#25F4EE"></path><path d="M20.4088..." fill="#FE2C55"></path><path d="M8.70642.." fill="#FE2C55"></path><path d="M23.9921.. " fill="#FE2C55"></path><path d="M17.4127..." fill="black"></path><path d="M30.0477..." fill="black"></path><path d="M69.0317..." fill="black"></path><path d="M45.7295..." fill="black"></path><path d="M52.347..." fill="black"></path><path d="M102.49..." fill="black"></path><path d="M48.0929..." fill="black"></path><path d="M83.5445..." fill="#25F4EE"></path><path d="M92.8579..." fill="#FE2C55"></path><path d="M91.5803..." fill="black"></path></g><defs><clipPath id="clip0"><rect width="118" height="42" fill="white"></rect></clipPath></defs>

- B4: Thay thế phần thẻ 'use' trong 'svg' bằng phần thẻ 'g' ở trên --> kết quả ta dc:

    <svg height="42" width="118" alt="TikTok">
            <g clip-path="url(#clip0)"><path d=" 27.8381..." fill="#25F4EE"></path><path d="9 924C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z" fill="#25F4EE"></path><path d="M23.9923..." fill="#25F4EE"></path><path d="M20.4088..." fill="#FE2C55"></path><path d="M8.70642.." fill="#FE2C55"></path><path d="M23.9921.. " fill="#FE2C55"></path><path d="M17.4127..." fill="black"></path><path d="M30.0477..." fill="black"></path><path d="M69.0317..." fill="black"></path><path d="M45.7295..." fill="black"></path><path d="M52.347..." fill="black"></path><path d="M102.49..." fill="black"></path><path d="M48.0929..." fill="black"></path><path d="M83.5445..." fill="#25F4EE"></path><path d="M92.8579..." fill="#FE2C55"></path><path d="M91.5803..." fill="black"></path></g><defs><clipPath id="clip0"><rect width="118" height="42" fill="white"></rect></clipPath></defs>
    </svg>

- B5: Xài thôi


3. Một kĩ thuật xử lý rất hay khi svg quá dài, làm code xấu

- Tạo thư mục 'images' và trong 'images' tạo 2 file 'index.js' , logo.svg 

    // logo.svg

    <svg xmlns="http://www.w3.org/2000/svg" height="42" width="118" alt="TikTok">
            <g clip-path="url(#clip0)"><path d=" 27.8381..." fill="#25F4EE"></path><path d="9 924C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z" fill="#25F4EE"></path><path d="M23.9923..." fill="#25F4EE"></path><path d="M20.4088..." fill="#FE2C55"></path><path d="M8.70642.." fill="#FE2C55"></path><path d="M23.9921.. " fill="#FE2C55"></path><path d="M17.4127..." fill="black"></path><path d="M30.0477..." fill="black"></path><path d="M69.0317..." fill="black"></path><path d="M45.7295..." fill="black"></path><path d="M52.347..." fill="black"></path><path d="M102.49..." fill="black"></path><path d="M48.0929..." fill="black"></path><path d="M83.5445..." fill="#25F4EE"></path><path d="M92.8579..." fill="#FE2C55"></path><path d="M91.5803..." fill="black"></path></g><defs><clipPath id="clip0"><rect width="118" height="42" fill="white"></rect></clipPath></defs>
    </svg>

    (B: nhớ thêm thuộc tính xmlns="http://www.w3.org/2000/svg" vào thẻ svg thì nó mới hiện lên ảnh dc)

    // index.js

        const images = {
            logo: require('~/assets/images/logo.svg').default,
        };

        export default images;


- B2: Xài

    import images from '~/assets/images';

    <img src={images.logo} alt="tiktok" />


4. Dùng thư viện để làm cho nhanh cái: Khi ấn vào ô search thì nó hiện ra cái 'Drop down' (hay còn gọi là 'Popper) - lịch sử tìm kiếm

- gõ goole: tippyjs github
https://github.com/atomiks/tippyjs

https://github.com/atomiks/tippyjs-react   // chúng ta dùng cái này

- Cài:
    . chạy lệnh: npm i @tippyjs/react

- Xài:
    import Tippy from '@tippyjs/react';
    import 'tippy.js/dist/tippy.css'

    <Tippy content="Tìm kiếm">
        <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </Tippy>

- Vọc những cái hay ho của Tippy:
    https://atomiks.github.io/tippyjs/v5/all-props/

- Dùng 'Headless Tippy': https://github.com/atomiks/tippyjs-react

- Một số cái hay dùng:
    . interactive: để tương tác dc
    . visible: ẩn hay hiện


5. Cách lấy icon của tiktok. --> nằm trong forder 'components/Icons/'


6. Tạo component Image để thay thế thẻ img --> code trong forder 'components/Image

- Ảnh mặc định dc lấy ở đây: 
https://placeholder.imageonline.co/

- Giảm dung lượng của ảnh để người dùng tải về ko bị nặng: Vào
https://tinypng.com/ 

. Đưa ảnh vảo
. download
. Xài 


