import Card from 'react-bootstrap/Card';
import './Landing.css';

export default function LandingPage() {
    return (
        <div>
            <Card className="landing-page-card">
                <Card.Title>Our Purpose and Mission</Card.Title>
                <Card.Body>
            <ul>
                    <li>Our PURPOSE is to elevate the customer onboarding experience by providing technology solutions to the  Implementation team</li> 
                    <li>Our MISSION is to support revenue growth by delivering technology improvements that allow our systems to scale for growth, reduce manual effort and shorten the sales/implementation cycle. </li>
            </ul>
                </Card.Body>
            </Card>
            <Card className="landing-page-card">
                <Card.Title>Team Norms</Card.Title>
                <Card.Body>
                    <ul>
                        <li>The team will prioritize and deliver work in a 2 -week sprint/deployment cycle</li>
                        <li>Work is tracked on a Kanban board. Unplanned work will go through a PM/EM approval process before being pulled into the sprint</li>
                        <li> The team will participate in Scrum ceremonies - daily stand-ups/refinement/sprint planning/retrospectives</li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    
    );
};