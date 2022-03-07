import { getter } from '../../api/apiCalls';
import { Link } from 'react-router-dom';

function TestComponent(props) {
    const onSubmit = async () => {
        await getter();
    }
    return (
        <>
            <nav>
                <a href="/" className='breadcrumbItem'>Home</a>
                &#8250;
                <a href="/login" className='breadcrumbItem' >Test Component</a>
            </nav>
            <Link to="/login" >Login</Link>
            <Link to="/logout">Logout</Link>

            <h1>The Kahoot!-League</h1>
            <p className='subtitle'>Dette er en subtitle</p>
            <button onClick={onSubmit}>Get</button>

            <h2>Dette er en h2</h2>
            <h3>Dette er en h3</h3>
            <h4>Dette er en h4</h4>
            <h5>Dette er en h5</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit condimentum nibh ac vehicula. Mauris id nulla vel eros aliquam mollis. Phasellus a commodo diam. Ut luctus tellus vel lacus aliquet iaculis. Curabitur in lobortis nulla. Suspendisse efficitur arcu eget turpis aliquam, nec facilisis sapien consectetur. Nulla convallis consectetur justo vitae auctor. Morbi id lacus imperdiet, aliquam orci non, fermentum velit. Nullam nibh nibh, gravida et euismod a, semper sed lorem. Aliquam consequat at nibh tristique ornare. Morbi mollis accumsan tortor, tempor rhoncus sapien rutrum et. Cras eleifend suscipit varius. Aliquam ac rhoncus elit. Donec ullamcorper erat nec imperdiet sodales. </p>
        </>
    );
}

export default TestComponent;