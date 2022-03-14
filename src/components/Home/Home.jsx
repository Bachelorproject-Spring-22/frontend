import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Home.css';
import SEO from '../SEO/SEO';
import Icon from '../Icon/Icon';

function Home(props) {

    return <>
        <SEO title='Home' />
        <div className='test1'>
            <header>
                <h1>The Kahoot!-League</h1>
                <p className='subtitle'>the ultimate league for learning</p>
            </header>
            
            <Link to='/login'><Button label={"log in"} icon={<Icon iconId={'login'}/>} /></Link>
        </div>

        <section className='home-parent'>
            <article id='introduction-1'>

                {/* <img id="image1" src={Phone} alt="phone" loading="lazy" /> */}
                <div id="text1">
                    <h2>Introducing The Kahoot! League</h2>
                    <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                </div>

            </article>

            <article id='introduction-2'>

                {/* <img id="image2" src={Sky} alt="phone" loading="lazy" /> */}
                <div id="text2">
                    <h2>Visualize your quiz scores</h2>
                    <p>We know that taking quizzes in class can feel daunting. Sometimes you rush through a quiz because of time constraints, but other times a tough question can really stress you out. We have created this website to help you visualize your statistics</p>
                </div>

            </article>

            <article id='introduction-3'>

                {/* <img id="image3" src={Phone} alt="phone" loading="lazy" /> */}
                <div id="text3">
                    <h2>Introducing The Kahoot! League</h2>
                    <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                </div>

            </article>
        </section>
    </>;
}

export default Home;