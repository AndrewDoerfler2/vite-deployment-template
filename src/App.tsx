import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/Pages/Landing';
import GitBranchingPage from './Components/Pages/GitBranchingPage';
import TopNavigationBar from './Components/Navigation/TopNavigationBar';
import DataIngestFlowPage from './Components/Pages/DataIngestFlowPage';
import IntegrationProcessPage from './Components/Pages/IntegrationProcessPage';
import OrgChartPage from './Components/Pages/OrgChartPage';
import HelpfulLinksPage from './Components/Pages/HelpfulLinks';
import DomainModelPage from './Components/Pages/DomainModel';
import LoggingPage from './Components/Pages/LoggingPage';
import DeveloperGuidelinesPage from './Components/Pages/DeveloperGuidelinesPage';
function App() {
    

    return (
        <div>
        <TopNavigationBar />
            <BrowserRouter basename='vite-deployment-template'>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/git-branching" element={<GitBranchingPage />} />
                    <Route path="/data-ingest-flow" element={<DataIngestFlowPage />} />
                    <Route path="/integration-process" element={<IntegrationProcessPage />} />"
                    <Route path="/org-chart" element={<OrgChartPage />} />
                    <Route path="/helpful-links" element={<HelpfulLinksPage />} />"
                    <Route path="/domain-model" element={<DomainModelPage />} />
                    <Route path="/logging-best-practices" element={<LoggingPage />} />"
                    <Route path="developer-syntax-guidelines" element={<DeveloperGuidelinesPage />} />"
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;