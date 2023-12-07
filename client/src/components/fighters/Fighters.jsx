import { useEffect, useState } from 'react';
import FighterList from '../fighter-list/FighterList';

import * as fighterService from '../../services/fighterService';

export default function Fighters() {
    const [fighters, setFighters] = useState([]);

    useEffect(() => {
        fighterService
            .getAll()
            .then((result) => setFighters(result))
            .catch((error) => {
                console.error('Error fetching fighters:', error);
            });
    }, []);

    return <FighterList fighters={fighters} />;
}
