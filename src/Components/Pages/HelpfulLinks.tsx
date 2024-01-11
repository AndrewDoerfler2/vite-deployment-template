import Card from 'react-bootstrap/Card';
import './HelpfulLinks.css';
interface HelpfulLinksPageProps {
    Url: string;
    Title: string;
}

//create 3 instances of HelpfulLinksPageProps

const FoxenLink1: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/wiki/home",
    Title: "Confluence - Home"
};

const FoxenLink2: HelpfulLinksPageProps = {
    Url: "https://identity.foxen.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPMPBlazor%26redirect_uri%3Dhttps%253A%252F%252Fproperty.foxen.com%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520openid%2520profile%2520email%2520pmp.user%26state%3De0e13bf673d74708ad45b22367c45b4a%26code_challenge%3DOTUYGS7m8oLkUAxzOMNfSXXfzuSC0VlFfEAjzkiLwAo%26code_challenge_method%3DS256%26response_mode%3Dquery",
    Title: "PM Portal"
};

const FoxenLink3: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/servicedesk/customer/portal/3",
    Title: "Service Desk"
};

const FoxenLink4: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/servicedesk/customer/portal/3/topic/f2570c11-8c9e-40b3-a8bc-62b04d0f95ae/article/2686977",
    Title: "Printing"
};


const ImplementationDeliveryLink1: HelpfulLinksPageProps = {
    Url: "https://dev.azure.com/Foxen/",
    Title: "ADO Projects - Home"
};

const ImplementationDeliveryLink2: HelpfulLinksPageProps = {
    Url: "https://portal.azure.com/#@foxen.com/resource/subscriptions/7f11419e-4f2b-4edf-9fd7-321e8928481e/resourceGroups/integration-dev/providers/microsoft.insights/workbooks/c34a058b-0bf9-40d2-9dce-ddd86d34e01f/workbook",
    Title: "Azure Dashboard - Integration Monitor Spikes"
};

const ImplementationDeliveryLink3: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/jira/software/c/projects/ID/boards/23/",
    Title: "Implementation Delivery - Jira Project"
};

const ImplementationDeliveryLink4: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/jira/servicedesk/projects/ENG/queues/custom/239",
    Title: "Prod Support Queue"
};

const ImplementationDeliveryLink5: HelpfulLinksPageProps = {
    Url: "https://dev.azure.com/Foxen/Integration",
    Title: "Integration ADO Project"
};

const ImplementationDeliveryLink6: HelpfulLinksPageProps = {
    Url: "https://grafana-foxen-prod-ftfxg5b8bubkb8bs.eus.grafana.azure.com/?orgId=1",
    Title: "Grafana (Logging)"
};

const ImplementationDeliveryLink7: HelpfulLinksPageProps = {
    Url: "https://foxen.atlassian.net/wiki/spaces/foxenproduct/pages/45285458/Database+Table+Definitions",
    Title: "Database Table Definitions"
};


function HelpfulLinksPage() {
return (
    <>
        <Card className="helpful-links-card">
            <Card.Title>Foxen Links</Card.Title>
            <Card.Text>Links to Foxen resources</Card.Text>
            <Card.Body>
            <ul>
                <li><a href={FoxenLink1.Url}>{FoxenLink1.Title}</a></li>
                <li><a href={FoxenLink2.Url}>{FoxenLink2.Title}</a></li>
                <li><a href={FoxenLink3.Url}>{FoxenLink3.Title}</a></li>
                <li><a href={FoxenLink4.Url}>{FoxenLink4.Title}</a></li>
                </ul>
            </Card.Body>
        </Card>
        <Card className="helpful-links-card">
        <Card.Title>Implementation Delivery Links</Card.Title>
        <Card.Text>Links to Implementation Delivery resources</Card.Text>
        <Card.Body>
            <ul>
                <li><a href={ImplementationDeliveryLink1.Url}>{ImplementationDeliveryLink1.Title}</a></li>
                <li><a href={ImplementationDeliveryLink2.Url}>{ImplementationDeliveryLink2.Title}</a></li>
                <li><a href={ImplementationDeliveryLink3.Url}>{ImplementationDeliveryLink3.Title}</a></li>
                <li><a href={ImplementationDeliveryLink4.Url}>{ImplementationDeliveryLink4.Title}</a></li>
                <li><a href={ImplementationDeliveryLink5.Url}>{ImplementationDeliveryLink5.Title}</a></li>
                <li><a href={ImplementationDeliveryLink6.Url}>{ImplementationDeliveryLink6.Title}</a></li>
            <li><a href={ImplementationDeliveryLink7.Url}>{ImplementationDeliveryLink7.Title}</a></li>
            </ul>
            </Card.Body>
        </Card>
        </>
    );

}

export default HelpfulLinksPage;