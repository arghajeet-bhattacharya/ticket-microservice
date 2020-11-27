import {useEffect} from 'react';
import useRequest from '../../hooks/useRequest';
import Router from 'next/router';

export default () => {
    const {doRequest} = useRequest({
        url: '/api/users/logout',
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
    });

    useEffect(() => {
        doRequest();
    }, []);

    return <div>Logging Out !!!</div>
}