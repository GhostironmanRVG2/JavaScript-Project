const app = require('../server');
const controllerLocation = require('../controllers/LocationsController');
app.get('/Locations/', controllerLocation.read);
app.get('/Locations/:id_location', controllerLocation.readID);
app.post('/Locations/', controllerLocation.save);
app.put('/Locations/:id_location', controllerLocation.update);
app.delete('/Locations/:id_location', controllerLocation.deleteID);
app.get('/LocationsRegisted/', controllerLocation.readRegisted);
app.get('/LocationsCountRegisted/', controllerLocation.countLocationRegisted);
app.get('/LocationsNif/:nif_Location', controllerLocation.readNif);
app.get('/LocationsAddress/:address_Location', controllerLocation.readAddress)

