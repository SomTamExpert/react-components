import Alert from 'react-bootstrap/Alert';
import {useState} from "react";
import {Button} from "react-bootstrap";

export default function MyAlert() {
    const [show, setShow] = useState(true);
    return (

        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant, idx) => (
                <Alert key={idx} variant={variant} show={show}>
                    <Alert.Heading className="mt-0">Hey, nice to see you</Alert.Heading>
                    <p>
                        <Alert.Link href="http://localhost:3000/">Are you brave enough to click me?</Alert.Link>. Give it a
                        click and see
                        what is behind it. This is a {variant} alert—check it out!
                    </p>
                    <hr/>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)}>Close me y'all</Button>
                    </div>
                </Alert>

            )
        )
    )
}
