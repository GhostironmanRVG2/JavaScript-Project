const app = require('../server');
const controllerOperationalManager = require('../controllers/OperationalsManagersController');
app.get('/OperationalsManagers/', controllerOperationalManager.read);
app.get('/OperationalsManagers/:id_Operation_Manager', controllerOperationalManager.readID);
//app.post('/OccurrenceMaterials/', controllerOperationalManager.save);
//app.put('/OccurrenceMaterials/:id_request', controllerOperationalManager.update);
app.delete('/OperationalsManagers/:id_Operation_Manager', controllerOperationalManager.deleteID);