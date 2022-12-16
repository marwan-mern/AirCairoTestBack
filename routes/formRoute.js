import express from 'express';
import { AddLineTrainingForm,ADD_FLIGHT_DETAILS_FORM,TablesLineTraining,TablesDetailsTraining ,DataLineTraining,DataFlightDetails,Search}  from '../controllers/LineTrainingFormController.js';


const router = express.Router();

router.post(`/ADD_LINE_TRANING_FORM`,AddLineTrainingForm)
router.post(`/ADD_FLIGHT_DETAILS_FORM`,ADD_FLIGHT_DETAILS_FORM)
router.get(`/TablesLineTraining`,TablesLineTraining)
router.get(`/TablesDetailsTraining`,TablesDetailsTraining)
router.get(`/DataLineTraining`,DataLineTraining)
router.get(`/DataFlightDetails`,DataFlightDetails)
router.get(`/Search`,Search)



export default router