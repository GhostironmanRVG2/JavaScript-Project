const app = require('../server');
const controllerCandidate = require('../controllers/CandidatesController');
app.get('/Candidates/', controllerCandidate.read);
app.get('/Candidates/:id_candidate', controllerCandidate.readID);
app.post('/Operationals/', controllerCandidate.save);
app.get('/CandidatesNotOperationals/', controllerCandidate.readCandidates);