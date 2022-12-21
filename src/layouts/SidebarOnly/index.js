import Sidebar from '../components/Sidebar/Sidebar';

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
