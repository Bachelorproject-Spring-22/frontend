import { Link } from 'react-router-dom';
import Button from '../Button/Button';
/* import LoginRoundedIcon from '@mui/icons-material/LoginRounded'; */
import Phone from '../../assets/phone.avif';
import Sky from '../../assets/sky.jpg';
import './Home.css';
import SEO from '../SEO/SEO';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import GppMaybeRoundedIcon from '@mui/icons-material/GppMaybeRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import GroupRemoveRoundedIcon from '@mui/icons-material/GroupRemoveRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

function Home(props) {

    return (
        <>
            <SEO title='Home' />
            <div className='test1'>
                <header>
                    <h1>The Kahoot!-League</h1>
                    <p className='subtitle'>the ultimate league for learning</p>
                </header>
                <AccountCircleRoundedIcon />
                <ArrowRightRoundedIcon />
                <ArrowUpwardRoundedIcon />
                <BuildRoundedIcon />
                <CancelRoundedIcon />
                <DarkModeRoundedIcon />
                <DeleteRoundedIcon />
                <ErrorRoundedIcon />
                <ExpandLessRoundedIcon />
                <ExpandMoreRoundedIcon />
                <FileUploadRoundedIcon />
                <GppMaybeRoundedIcon />
                <GroupAddRoundedIcon />
                <GroupRemoveRoundedIcon />
                <HelpRoundedIcon />
                <HomeRoundedIcon />
                <InfoRoundedIcon />
                <LanguageRoundedIcon />
                <LeaderboardRoundedIcon />
                <LockRoundedIcon />
                <LoginRoundedIcon />
                <LogoutRoundedIcon />
                <RestoreRoundedIcon />
                <SaveRoundedIcon />
                <SearchRoundedIcon />
                <SettingsRoundedIcon />
                <TextFieldsRoundedIcon />
                <VisibilityOffRoundedIcon />
                <VisibilityRoundedIcon />

                <Link to='/login'><Button label={"log in"} icon={<LoginRoundedIcon />} /></Link>
            </div>

            <section className='home-parent'>
                <article id='introduction-1'>

                    <img id="image1" src={Phone} alt="phone" loading="lazy" />
                    <div id="text1">
                        <h2>Introducing The Kahoot! League</h2>
                        <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                    </div>

                </article>

                <article id='introduction-2'>

                    <img id="image2" src={Sky} alt="phone" loading="lazy"/>
                    <div id="text2">
                        <h2>Visualize your quiz scores</h2>
                        <p>We know that taking quizzes in class can feel daunting. Sometimes you rush through a quiz because of time constraints, but other times a tough question can really stress you out. We have created this website to help you visualize your statistics</p>
                    </div>

                </article>

                <article id='introduction-3'>

                    <img id="image3" src={Phone} alt="phone" loading="lazy"/>
                    <div id="text3">
                        <h2>Introducing The Kahoot! League</h2>
                        <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                    </div>

                </article>
            </section>
        </>
    );
}

export default Home;