import React, { useEffect, useState } from 'react';

import * as fighterService from '../../services/fighterService';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FighterCard from './fighter-card/FighterCard';

import './fighterListStyles.css';

const FighterList = () => {
    const [fighters, setFighters] = useState([]);

    useEffect(() => {
        fighterService.getAll().then((result) => setFighters(result));
    }, []);

    return (
        <Container>
            <Row>
                {fighters.map((fighterData) => (
                    <FighterCard key={fighterData._id} {...fighterData} />
                ))}
            </Row>
        </Container>
    );
};

export default FighterList;
