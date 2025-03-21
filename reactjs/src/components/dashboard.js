import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import TaskCalendar from './Calendar';

export default function Dashboard() {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    return(
        <div>
            <TaskCalendar />
        </div>
    )
}