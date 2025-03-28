import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import TaskCalendar from './Calendar';

export default function Dashboard() {
    const {http} = AuthUser();
    const [userdetail, setUserdetail] = useState('');

    useEffect(() => {
        let isMounted = true;

        const fetchUserDetail = async () => {
            try {
                const res = await http.post('/me');
                if (isMounted) {
                    setUserdetail(res.data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails utilisateur:', error);
            }
        };

        fetchUserDetail();

        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [http]);

    return (
        <div>
            <TaskCalendar />
        </div>
    );
}