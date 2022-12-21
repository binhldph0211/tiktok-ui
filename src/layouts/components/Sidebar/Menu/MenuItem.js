import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; // NavLink hỗ trợ được cả: link và active. Còn Link chỉ hỗ trợ mỗi: link thôi
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
    return (
        // NavLink có sẵn isActive
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
};

export default MenuItem;
