import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

export const SignUpContainer = () => {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        const query = new URLSearchParams(location.hash);
        if (query.get('id_token')) {
            console.log(query.get('id_token'));
            history.replace({
                pathname: '/sign-up',
                search: location.search,
            });
        }
        if (!queryParams.has('type')) {
            history.replace({
                pathname: location.pathname,
                search: '?type=learner'
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeTab = (type) => {
        history.replace({
            pathname: location.pathname,
            search: `?type=${type}`
        })
    } 

    return <>
    { queryParams.get('type') === 'learner' ? 'Learner' : 'Schools' }
        <button onClick={() => changeTab('learner')}>Learner</button>
        <button onClick={() => changeTab('school')}>Schools</button>
            <GoogleLogin
                clientId="242067304791-4e0ri4c8irvkanhhuv27cf0n8p84f2nu.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(res) => console.log('success', res)}
                onFailure={(res) => console.log('error', res)}
                cookiePolicy={'single_host_origin'}
                render={(props) => {
                    console.log(props);
                    return <button onClick={props.onClick} disabled={props.disabled}>
                        Sign In
                    </button>
                }}
                prompt='consent'
                uxMode='redirect'
                autoLoad={false}
                redirectUri={`https://462b-46-70-32-32.ngrok.io/sign-up?type=${queryParams.get('type')}`}
            />
    </>;
}