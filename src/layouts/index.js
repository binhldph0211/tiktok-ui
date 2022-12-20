// kiểu này có nghĩa là: dùng kiểu 'export default' cũng dc mà kiểu 'export' cũng dc
// VD: import DefaultLayout.... hoặc kiểu này cũng dc: import { DefaultLayout }....
export { default, default as DefaultLayout } from './DefaultLayout';

export { default as HeaderOnly } from './HeaderOnly';
export { default as SidebarOnly } from './SidebarOnly';
