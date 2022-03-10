import { RotatingLines } from 'react-loader-spinner';
import './loading.css';

function Loading() {
    return (
        <div className='loading'>
            <RotatingLines width="50" strokeColor="#BEAFD0" animationDuration='1' />
        </div>
    );
}

export default Loading;