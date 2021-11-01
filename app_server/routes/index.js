const express = require("express");
const router = express.Router();

//const ctrlMain = require("../controllers/main");
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET homepage. */
//router.get("/", ctrlMain.index);

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);
router.get('/location4', ctrlLocations.locationInfo4);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/location/review/new2', ctrlLocations.addReview2);
router.get('/location/review/new3', ctrlLocations.addReview3);
router.get('/location/review/new4', ctrlLocations.addReview4);


/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
