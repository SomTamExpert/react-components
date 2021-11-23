import {Toast, ToastContainer,} from "react-bootstrap";
import outlook from "../assets/microsoft_outlook_icon.png"

export default function ExampleToastsContextualVariations() {

    return (
        [
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
        ].map((variant, idx) => (

            <div className="p-4">
                <ToastContainer>
                    <Toast bg={variant.toLowerCase()} key={idx}>
                        <Toast.Header closeButton={false}>
                                <img
                                src={outlook}
                                width="20px"
                                className="rounded-2"
                                alt="microsoft outlook icon"
                                style={{marginRight: "3px"}}/>
                            <strong className="me-auto"> Outlook</strong>
                            <small>15 min ago</small>
                        </Toast.Header>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            <strong>getAbstractTeam</strong><br></br>
                            getAbstractWebinar: Achtsamkeit im Alltag mit Ralf Braun, melde dich noch heute an unter <a
                            href="https://react-bootstrap.github.io/components/toasts/">getAbstract</a>
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        ))
    )
}
