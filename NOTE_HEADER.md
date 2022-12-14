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

