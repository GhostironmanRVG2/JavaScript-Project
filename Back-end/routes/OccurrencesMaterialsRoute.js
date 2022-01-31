const app = require('../server');
const controllerMaterial = require('../controllers/OccurrenceMaterialsController');
app.get('/OccurrenceMaterials/:id_request', controllerMaterial.readID);
app.post('/OccurrenceMaterials/', controllerMaterial.save);
app.put('/OccurrenceMaterials/:id_request', controllerMaterial.update);
app.delete('/OccurrenceMaterials/:id_request/:id_material', controllerMaterial.deleteID);