import { getter } from '../../api/apiCalls';

function TestComponent(props) {
    const onSubmit = async () => {
        await getter();
    }
    return (
        <>
            <nav>
                <a  href="/" className='breadcrumbItem'>Home</a>
                &#8250;
                <a href="/login" className='breadcrumbItem' >Test Component</a>
            </nav>
            
            <h1>The Kahoot!-League</h1>
            <p className='subtitle'>Dette er en subtitle</p>
            <button onClick={onSubmit}>Get</button>

            <h2>Dette er en h2</h2>
            <h3>Dette er en h3</h3>
            <h4>Dette er en h4</h4>
            <h5>Dette er en h5</h5>
        </>
    );
}

export default TestComponent;