import {useEffect} from 'react';

const User = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('stared');
        }, 1000)
        return ()=>{
            clearInterval(timer);
        }
    }, [])
    return(
        <div className='user-card'>
            <h2>Name: Devansh</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: devansh.chawlaa</h4>
        </div>
    )
}

export default User;