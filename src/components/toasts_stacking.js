import {useState} from "react";
import {Toast, ToastContainer,} from "react-bootstrap";
import outlook from "../assets/microsoft_outlook_icon.png"
import teams from "../assets/microsoft_office_teams_icon.png"

export default function ExampleToastsStacking() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleA = () => setShowA(!showA);
    const toggleB = () => setShowB(!showB);

    return (
        <ToastContainer>
            <Toast show={showA} onClose={toggleA}>
                <Toast.Header>
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
            <Toast onClose={toggleB} show={showB} animation={false}>
                <Toast.Header>
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
    )
}
