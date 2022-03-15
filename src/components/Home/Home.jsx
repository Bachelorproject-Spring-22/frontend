import { Link } from 'react-router-dom';
import Button from '../Button/Button';


import Phone1PNG from '../../assets/images/1_iphone13progold_portrait(small).png';
import Phone1WEBP from '../../assets/images/1_iphone13progold_portrait(small).webp';
import Phone1AVIF from '../../assets/images/1_iphone13progold_portrait(small).avif';

import Phone2PNG from '../../assets/images/2_iphone13prographite_portrait(small).png';
import Phone2AVIF from '../../assets/images/2_iphone13prographite_portrait(small).avif';
import Phone2WEBP from '../../assets/images/2_iphone13prographite_portrait(small).webp';

import Phone3PNG from '../../assets/images/3_iphone13prosierrablue_portrait(small).png';
import Phone3WEBP from '../../assets/images/3_iphone13prosierrablue_portrait(small).webp';
import Phone3AVIF from '../../assets/images/3_iphone13prosierrablue_portrait(small).avif';


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

            <Link to='/login'><Button label={"log in"} icon={<Icon iconId={'login'} />} /></Link>
        </div>

        <section className='home-parent'>
            <article id='introduction-1'>


                <picture>
                    <source srcSet={Phone1AVIF} type="image/avif"/>
                    <source srcSet={Phone1WEBP} type="image/webp"/>
                    <img srcSet={Phone1PNG} alt='iPhone displaying The Kahoot! League site with leaderboard' loading='lazy'/>
                </picture>
                <div id="text1">
                    <h2>Introducing The Kahoot! League</h2>
                    <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                </div>

            </article>

            <article id='introduction-2'>

            <picture>
                    <source srcSet={Phone2AVIF} type="image/avif"/>
                    <source srcSet={Phone2WEBP} type="image/webp"/>
                    <source srcSet={Phone2PNG} />
                    <img srcSet={Phone2PNG} alt='iPhone displaying The Kahoot! League site with the results of a quiz' loading='lazy'/>
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
                    <img srcSet={Phone3PNG} alt='iPhone displaying The Kahoot! League site med noe annet' loading='lazy'/>
                </picture>
                <div id="text3">
                    <h2>Introducing The Kahoot! League</h2>
                    <p>The Kahoot! League makes it cooler than ever for students to show off their knowledge. By using The Kahoot! League and collecting points, students climb the leaderboards and establish themselves as class all-stars. Students learn faster, advance further, and keep getting better all semester long.</p>
                </div>

            </article>
        </section>
    </>;
}

export default Home;