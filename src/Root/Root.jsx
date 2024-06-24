import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className="mx-auto px-3 md:px-0">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;