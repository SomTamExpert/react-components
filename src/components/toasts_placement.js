import {useState} from "react";
import {Form, Toast, ToastContainer,} from "react-bootstrap";
import outlook from "../assets/microsoft_outlook_icon.png"
import teams from "../assets/microsoft_office_teams_icon.png"

export default function ExampleToastsStacking() {
    const [position, setPostiion] = useState('top-start');

    return (
        <>
            <div className="mb-3">
                <label htmlFor="selectToastPosition">Toast position</label>
                <Form.Select
                    id="selectToastPosition"
                    className="mt-2"
                    onChange={(event => setPostiion(event.currentTarget.value))}
                >
                    {[
                        'top-start',
                        'top-end',
                        'top-center',
                        'middle-start',
                        'middle-center',
                        'middle-end',
                        'bottom-start',
                        'bottom-center',
                        'bottom-end',
                    ].map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </Form.Select>
            </div>

            <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-dark position-relative"
                style={{ minHeight: '540px' }}
            >
                <ToastContainer className="p-2" position={position}>
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <img
                                src={outlook}
                                width="20px"
                                className="rounded-2"
                                alt="microsoft outlook icon"
                                style={{marginRight:"3px"}}/>
                            <strong className="me-auto"> Outlook</strong>
                            <small>15 min ago</small>
                        </Toast.Header>
                        <Toast.Body>
                            <strong>getAbstractTeam</strong><br></br>
                            getAbstractWebinar: Achtsamkeit im Alltag mit Ralf Braun, melde dich noch heute an unter <a
                            href="https://react-bootstrap.github.io/components/toasts/">getAbstract</a>
                        </Toast.Body>
                    </Toast>
                    <Toast >
                        <Toast.Header closeButton={false}>
                            <img
                                src={teams}
                                width="20px"
                                alt=" microsoft teams icon"
                                style={{marginRight:"3px"}}>
                            </img>
                            <strong className="me-auto">Teams</strong>
                            <small>5 min ago </small>
                        </Toast.Header>
                        <Toast.Body>
                            <strong>Daily Stand Up Meeting Apps Team</strong><br></br>
                            Hofstetter: Guete Morge zäme, ich chan hüt ned teineh well ich grad unterwegs bin, Bin de
                            ganzi Tag an em Teamevent. Guets Schaffe!
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    );
}
