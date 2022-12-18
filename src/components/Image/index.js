// Dùng forwardRef đề lấy ref cho img vì Tippy yêu cầu phải có ref
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

// fallback dc truyền vào để xử lý khi ảnh chính bị lỗi, thì nó sẽ hiện thị ra
// Đoạn fallback: customFallback là để đổi tên khỏi bị trùng với fallback của useState.
// NÓ dùng cứ pháp ES6: Khi ko có fallback truyền vào thì nó lấy mặc định là images.noImage.
// Còn khi có fallback thì nó sẽ lấy fallback dc truyền vào
// Cú pháp ES6 đổi tên từ fallback thành customFallback là fallback: customFallback

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
