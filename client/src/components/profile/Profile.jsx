import { useContext, useEffect, useState } from 'react';
import * as fighterService from '../../services/fighterService';
import AuthContext from '../../contexts/authContext';
import FighterList from '../fighter-list/FighterList';

export default function Profile() {
    const [myFighters, setMyFighters] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
		document.title = 'My Fighters';
	}, []);

    useEffect(() => {
        fighterService
            .getAllByOwner(userId)
            .then((result) => setMyFighters(result));
    }, [userId]);

    return <FighterList fighters={myFighters} />;
}
