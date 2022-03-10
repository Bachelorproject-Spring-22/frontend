import Loader from 'react-loader-spinner';

function Loading() {
    return (
        <>
            <Loader type='Circles' color='#fff' height={80} width={80} />
        </>
    );
}

export default Loading;