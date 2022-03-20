import { Link } from 'react-router-dom';
import './Home.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Phone1AVIF from '../../assets/images/1_iphone13progold_portrait.avif';
import Phone1PNG from '../../assets/images/1_iphone13progold_portrait.png';
import Phone1WEBP from '../../assets/images/1_iphone13progold_portrait.webp';
import Phone2AVIF from '../../assets/images/2_iphone13prographite_portrait.avif';
import Phone2PNG from '../../assets/images/2_iphone13prographite_portrait.png';
import Phone2WEBP from '../../assets/images/2_iphone13prographite_portrait.webp';
import Phone3AVIF from '../../assets/images/3_iphone13prosierrablue_portrait.avif';
import Phone3PNG from '../../assets/images/3_iphone13prosierrablue_portrait.png';
import Phone3WEBP from '../../assets/images/3_iphone13prosierrablue_portrait.webp';
import SEO from '../SEO/SEO';

function Home(props) {

    return <>
        <SEO title='Home' />
        <div className='landing-page'>
            <header>
                <h1>uniLeague</h1>
                <p className='subtitle'>the ultimate league for learning</p>
            </header>

            <Link to='/login'><Button label={"log in"} icon={<Icon iconId={'login'} />} /></Link>
        </div>

        <section className='home-parent'>
            <article id='introduction-1'>


                <picture>
                    <source srcSet={Phone1AVIF} type="image/avif"/>
                    <source srcSet={Phone1WEBP} type="image/webp"/>
                    <img srcSet={Phone1PNG} alt='iPhone displaying uniLeague site with leaderboard' loading='lazy'/>
                </picture>
                <div id="text1">
                    <h2>Introducing uniLeague</h2>
                    <p>uniLeague makes it cooler than ever for students to show off their knowledge. By using uniLeague and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                </div>

            </article>

            <article id='introduction-2'>

            <picture>
                    <source srcSet={Phone2AVIF} type="image/avif"/>
                    <source srcSet={Phone2WEBP} type="image/webp"/>
                    <source srcSet={Phone2PNG} />
                    <img srcSet={Phone2PNG} alt='iPhone displaying uniLeague site with the results of a quiz' loading='lazy'/>
                </picture>
                <div id="text2">
                    <h2>Visualize your quiz scores</h2>
                    <p>We know that taking quizzes in class can feel daunting. Sometimes you rush through a quiz because of time constraints, but other times a tough question can really stress you out. We have created this website to help you visualize your statistics</p>
                </div>

            </article>

            <article id='introduction-3'>

            <picture>
                    <source srcSet={Phone3AVIF} type="image/avif"/>
                    <source srcSet={Phone3WEBP } type="image/webp" />
                    <img srcSet={Phone3PNG} alt='iPhone displaying uniLeague site med noe annet' loading='lazy'/>
                </picture>
                <div id="text3">
                    <h2>Where champions are made</h2>
                    <p>Are you ready to be the champion in a specific course, a semester, or even an entire study plan? Participate in class and earn points via various activities. Every activity gives you points and helps you rise in the uniLeague leaderboard. Log on now and play to rise high in the uniLeague leaderboard. Be a champion today!</p>
                </div>

            </article>
        </section>
    </>;
}

export default Home;