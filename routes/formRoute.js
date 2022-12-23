import express from 'express';
import { AddLineTrainingForm,ADD_FLIGHT_DETAILS_FORM,TablesLineTraining,TablesLineTrainingID,TablesDetailsTraining,TablesDetailsTrainingID,DataLineTraining,DataFlightDetails,Search}  from '../controllers/LineTrainingFormController.js';


const router = express.Router();

router.post(`/ADD_LINE_TRANING_FORM`,AddLineTrainingForm)
router.post(`/ADD_FLIGHT_DETAILS_FORM`,ADD_FLIGHT_DETAILS_FORM)
router.get(`/TablesLineTraining`,TablesLineTraining)
router.get(`/TablesLineTrainingID`,TablesLineTrainingID)
router.get(`/TablesDetailsTraining`,TablesDetailsTraining)
router.get(`/TablesDetailsTrainingID`,TablesDetailsTrainingID)
router.get(`/DataLineTraining`,DataLineTraining)
router.get(`/DataFlightDetails`,DataFlightDetails)
router.get(`/Search`,Search)



export default router