import { getter } from '../../api/apiCalls';

function TestComponent(props) {
    const onSubmit = async () => {
        await getter();
    }
    return (
        <>
            <h1>The Kahoot!-League</h1>
            <button onClick={onSubmit}>Get</button>
        </>
    );
}

export default TestComponent;