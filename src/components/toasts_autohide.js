import {useState} from "react";
import {Button, Col, Row, Toast,} from "react-bootstrap";
import outlook from "../assets/microsoft_outlook_icon.png"
import teams from "../assets/microsoft_office_teams_icon.png"

export default function ExampleToastsAutohide() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleA = () => setShowA(!showA);
    const toggleB = () => setShowB(!showB);

    return (
        <div className="p-4">
            <Row>
                <Col md={3}>
                    <Button onClick={toggleA} className="mb-2">
                        Show Toast
                    </Button>
                    <Toast show={showA} onClose={toggleA} delay={3000} autohide bg>
                        <Toast.Header>
                            <img
                                src={outlook}
                                width="20px"
                                className="rounded-2"
                                alt="microsoft outlook icon"
                                style={{marginRight: "3px"}}/>
                            <strong className="me-auto"> Outlook</strong>
                            <small>15 min ago</small>
                        </Toast.Header>
                        <Toast.Body>
                            <strong>getAbstractTeam</strong><br></br>
                            getAbstractWebinar: Achtsamkeit im Alltag mit Ralf Braun, melde dich noch heute an unter <a
                            href="https://react-bootstrap.github.io/components/toasts/">getAbstract</a>
                        </Toast.Body>
                    </Toast>
                </Col>
                <Col md={3}>
                    <Button onClick={toggleB} className="mb-2">
                        Show Toast
                    </Button>
                    <Toast onClose={toggleB} show={showB} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src={teams}
                                width="20px"
                                alt=" microsoft teams icon"
                                style={{marginRight: "3px"}}>
                            </img>
                            <strong className="me-auto">Teams</strong>
                            <small>5 min ago </small>
                        </Toast.Header>
                        <Toast.Body>
                            <strong>Daily Stand Up Meeting Apps Team</strong><br></br>
                            Hofstetter: Guete Morge zäme, ich chan hüt ned teineh well ich grad unterwegs bin, Bin de
                            ganzi
                            Tag an em Teamevent. Guets Schaffe!
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}
