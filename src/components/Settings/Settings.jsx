import { Link, Route, Routes } from 'react-router-dom';
import WorkProgress from '../WIP/WorkProgress';
import Account from './Account/Account';
import MainSettings from './MainSettings/MainSettings';
import './settings.css';

function Settings(props) {

    return (
        <>
            <nav>
                <Link to="/" className='breadcrumb-item'>Home</Link>
                &#8250;
                <Link to="/settings" className='breadcrumb-item' >Settings</Link>
                <Routes>
                    <Route exact path='/account' element={<>&#8250; <Link to="/settings/account" className='breadcrumb-item' >Account</Link></>} />
                </Routes>
            </nav>

            <section className='settings'>
                <Routes>
                    <Route exact path='/' element={<MainSettings {...props} />} />
                    <Route exact path='/account' element={<Account {...props} />} />
                    <Route exact path='/anonymity' element={<WorkProgress />} />
                    <Route exact path='/language' element={<WorkProgress />} />
                    <Route exact path='/theme' element={<WorkProgress />} />
                    <Route exact path='/text' element={<WorkProgress />} />
                    <Route exact path='/help' element={<WorkProgress />} />
                </Routes>
            </section>
        </>

    );
};

export default Settings;