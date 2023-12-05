import { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FighterCard from './fighter-card/FighterCard';

import './fighterListStyles.css';

const FighterList = ({fighters}) => {
    useEffect(() => {
		document.title = 'All Fighters';
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
