import Alert from 'react-bootstrap/Alert';

export default function ErrorAlert({ErrorMessage, onClose}) {
    return (
        <Alert variant="danger" onClose={onClose} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>{ErrorMessage}</p>
        </Alert>
      );
}