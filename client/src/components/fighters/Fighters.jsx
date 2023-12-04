import { useEffect, useState } from 'react';
import FighterList from '../fighter-list/FighterList';

import * as fighterService from '../../services/fighterService';

export default function Fighters() {
    const [fighters, setFighters] = useState([]);

    useEffect(() => {
        fighterService.getAll().then((result) => setFighters(result));
    }, []);

    return <FighterList fighters={fighters} />;
}
