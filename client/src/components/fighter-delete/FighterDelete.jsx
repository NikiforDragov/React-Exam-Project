import { useNavigate} from 'react-router-dom';

import * as fighterService from '../../services/fighterService';
import { Path } from '../../constants/paths';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FighterDelete({
    toggleDeleteModal,
    showDeleteModal,
    fighterName,
    fighterId
}) {
    const navigate = useNavigate();

    const deleteFighterHandler = async () => {
        try {
            await fighterService.del(fighterId);
            navigate(Path.ALL_FIGHTERS);
        } catch (error) {
            console.error('Error deleting fighter:', error);
        }
    };

    return (
        <Modal show={showDeleteModal} onHide={toggleDeleteModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Fighter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete {fighterName}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={toggleDeleteModal}>
                    Close
                </Button>
                <Button variant='danger' onClick={deleteFighterHandler}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
