import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;