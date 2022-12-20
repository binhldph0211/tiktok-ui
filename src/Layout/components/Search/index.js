import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Để xử lý người dùng nhập vào ô input tìm kiếm --> tránh gọi API liên tục. Khi nào nhập xong thì mới gọi API
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        // if (!searchValue.trim()) {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // Vấn đề là khi người dùng nhập kí tự trùng với các kí tự đặc biệt (&, ?, =) của query parameters thì sẽ gây ra lỗi
        // Giải quyết vấn dề  --> dùng encodeURIComponent để mã hóa các kí tự của người dùng nhập vào, kể cả khi người dùng nhập '&', '?', '='
        // Để người dùng nhập tự do thì chúng ta luôn luôn phải có 'encodeURIComponent'
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)

        // Cách 1.
        //     fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //         .then((res) => res.json())
        //         .then((res) => {
        //             console.log(res.data);
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);
        // }, [searchValue]);

        // Cách 2.
        //     axios
        //         .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         })
        //         .then((res) => {
        //             console.log(res.data.data);
        //             setSearchResult(res.data.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);

        // Cách 3.
        //     request
        //         .get('users/search', {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         })
        //         .then((res) => {
        //             console.log(res.data.data);
        //             setSearchResult(res.data.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);

        // Cách 4.
        // Tối ưu phần res.data.data thành res.data
        //     request
        //         .get('users/search', {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         })
        //         .then((res) => {
        //             console.log(res.data);
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debounced]);

        // Cách 5. Viết theo dạng async
        //     const fetchApi = async () => {
        //         try {
        //             const res = await request.get('users/search', {
        //                 params: {
        //                     q: debounced,
        //                     type: 'less',
        //                 },
        //             });

        //             setSearchResult(res.data);
        //             setLoading(false);
        //         } catch (error) {
        //             setLoading(false);
        //         }
        //     };

        //     fetchApi();
        // }, [debounced]);

        // Cách 6.
        const fetchApi = async () => {
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        // XỬ lý không cho người dùng bắt đầu nhập bằng một dấu cách (space)
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search acounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    {/* onMouseDown  --> Xử lý: Bỏ qua hành vi focus vào ô tìm kiếm khi nhấn nút Search  */}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
