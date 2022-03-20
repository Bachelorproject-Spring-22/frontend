import './settings.css';
import Account from './Account/Account';
import MainSettings from './MainSettings/MainSettings';
import WorkProgress from '../WIP/WorkProgress';
import { Link, Route, Routes } from 'react-router-dom';

function Settings(props) {

    return (
        <>
            <nav>
                <Routes>
                    <Route exact path='/' element={null} />
                    <Route exact path='/account' element={<><Link to="/settings" className='breadcrumb-item' >Settings</Link> &#8250; <Link to="/settings/account" className='breadcrumb-item' >Account</Link></>} />
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