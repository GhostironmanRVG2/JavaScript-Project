const app = require('../server');
const CrimeNature = require('../controllers/CrimesNatureController');
app.get('/CrimesNature/', CrimeNature.read);
app.get('/CrimesNature/:id_crime_nature', CrimeNature.readID);
app.post('/CrimesNature/', CrimeNature.save);
app.put('/CrimesNature/:id_crime_nature', CrimeNature.update);
app.delete('/CrimesNature/:id_crime_nature', CrimeNature.deleteID);