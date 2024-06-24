import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className="mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;