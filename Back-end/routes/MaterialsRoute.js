const app = require('../server');
const controllerMaterial = require('../controllers/MaterialsController');
app.get('/Material/', controllerMaterial.read);