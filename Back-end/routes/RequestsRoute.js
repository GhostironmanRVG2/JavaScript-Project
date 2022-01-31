const app = require('../server');
const controllerRequest = require('../controllers/RequestsController');
app.get('/Requests/', controllerRequest.read);
app.get('/Requests/:id_request', controllerRequest.readID);
app.post('/Requests/', controllerRequest.save);
app.put('/Requests/:id_request', controllerRequest.update);
app.delete('/Requests/:id_request', controllerRequest.deleteID);
app.get('/RequestsLocationsGet/:id_request', controllerRequest.getLocationRequest);
app.put('/RequestsLocationsChange/:id_request',controllerRequest.changeLocationRequest);
app.get('/RequestsDenouncersGet/:id_request', controllerRequest.getDenouncerRequest);
app.put('/RequestsDenouncersChange/:id_request',controllerRequest.changeDenouncerRequest);
app.get('/RequestsCrimeNaturesGet/:id_request', controllerRequest.getCrimeNatureRequest);
app.put('/RequestsCrimeNaturesChange/:id_request',controllerRequest.changeCrimeNatureRequest);
app.get('/RequestsNonOccurrencesCount/', controllerRequest.countNonOccurrences);
app.get('/RequestsNonOccurrences/', controllerRequest.readNonOccurrences);
app.put('/RequestsUpdateState/:id_request', controllerRequest.updateState);
app.get('/RequestsUser/:id_user', controllerRequest.readIdUser);
//app.get('/RequestDailyReport/', controllerRequest.readDiariasRelatorio);




