const app = require('../server');
const controllerOccurrence = require('../controllers/OccurrencesController');
app.get('/Occurrences/', controllerOccurrence.read);
app.get('/Occurrences/:id_occurrence', controllerOccurrence.readID);
app.post('/Occurrences/', controllerOccurrence.save);
app.put('/Occurrences/:id_occurrence', controllerOccurrence.update);
app.delete('/Occurrences/:id_occurrence', controllerOccurrence.deleteID);
app.get('/OccurrencesRequestsGet/:id_occurrence', controllerOccurrence.GetRequestOccurrence);
app.put('/OccurrencesRequestsChange/:id_occurrence',controllerOccurrence.ChangeRequestOccurence);
app.get('/OccurrencesTeamsGet/:id_occurrence', controllerOccurrence.GetTeamOccurrence);
app.put('/OccurrencesTeamsChange/:id_occurrence',controllerOccurrence.ChangeTeamOccurrence);
app.get('/OccurrencesCountActive/', controllerOccurrence.CountOccurrencesActive);
app.get('/OccurrencesPercCompleted/', controllerOccurrence.PercOccurrencesCompleted);
app.get('/OccurrencesCountHold/', controllerOccurrence.CountOccurrencesHold);
app.get('/OccurrencesDaily/', controllerOccurrence.readDiario);
app.get('/OccurrencesDailySolved/', controllerOccurrence.readDiarioResolvido);
app.get('/OccurrencesMonth/', controllerOccurrence.readPorMes);
app.get('/OccurrencesFakes/', controllerOccurrence.readfakes);
app.get('/OccurrencesReadDailyCountProcess/', controllerOccurrence.readDailyRegioesCountProcess);
app.get('/OccurrencesReadPerMounthCountProcess/', controllerOccurrence.readPerMounthRegioesCountProcess);
app.get('/OccurrencesActiveHuge/', controllerOccurrence.readAtivosGraves);
app.get('/OccurrencesActiveHugePlus/', controllerOccurrence.readAtivosMuitoGraves);
app.get('/OccurrencesPercActiveHuge/', controllerOccurrence.PercAtivasGraves);
app.get('/OccurrencesPercActiveHugePlus/', controllerOccurrence.PercAtivasMuitoGraves);
app.get('/OccurrencesActiveModerated/', controllerOccurrence.readAtivosModeradas);
app.get('/OccurrencesActive/', controllerOccurrence.CountActiveOccurrences);
app.get('/OccurrencesCountCompletedPreviousMonth/', controllerOccurrence.CountCompletedOccurrences);
app.get('/OccurrencesDailyReport/', controllerOccurrence.readDiariasRelatorio);
app.get('/OccurrencesReadActiveRegioesCountProcess/', controllerOccurrence.readActiveRegioesCountProcess);
app.get('/OccurrencesReadCountProcess/', controllerOccurrence.readCountProcess);









