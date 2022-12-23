import LineTrainingFormModel from "../models/LineTrainingFormModel.js"
import FlightDetailsform from "../models/FLIGHT_DETAILS_Model.js";


export const AddLineTrainingForm = async (req, res) => {
    
    const { User_Id, 
        User_Name, 
        IOE, 
        USV, 
        Name,
        Title,
        Route,
        Date,
        FilTimeD,
        FilTimeN,
        FilTimeT,
        NoOfSectors,
        PF,
        PM,
        Stage1, 
        Stage2, 
        Stage3, 
        Stage4, 
        INIT, 
        TRANS, 
        UPGRADE, 
        NEWHIRE, 
        A1, 
        A2, 
        A3, 
        A4, 
        A5, 
        A6, 
    
        B1, 
        B2, 
        B3, 
        B4, 
        B5, 
        B6, 
        B7, 
        B8, 
        B9, 
    
        C1, 
        C2, 
        C3, 
        C4, 
        C5, 
        C6, 
        C7, 
    
        D1, 
        D2, 
        D3, 
        D4, 
        D5, 
        D6, 
        D7, 
        D8, 
    
        E1, 
        E2, 
        E3, 
        E4, 
    
        F1, 
        F2, 
        F3, 
        F4, 
    
        G1, 
        G2, 
        G3, 
        G4, 
        G5, 
        G6, 
        G7, 
        
        CRM,
        DiscussedItems} = req.body;

    const newIncome = new LineTrainingFormModel({ User_Id, 
        User_Name, 
        IOE, 
        USV, 
        Name,
        Title,
        Route,
        Date,
        FilTimeD,
        FilTimeN,
        FilTimeT,
        NoOfSectors,
        PF,
        PM,
        Stage1, 
        Stage2, 
        Stage3, 
        Stage4, 
        INIT, 
        TRANS, 
        UPGRADE, 
        NEWHIRE, 
        A1, 
        A2, 
        A3, 
        A4, 
        A5, 
        A6, 
    
        B1, 
        B2, 
        B3, 
        B4, 
        B5, 
        B6, 
        B7, 
        B8, 
        B9, 
    
        C1, 
        C2, 
        C3, 
        C4, 
        C5, 
        C6, 
        C7, 
    
        D1, 
        D2, 
        D3, 
        D4, 
        D5, 
        D6, 
        D7, 
        D8, 
    
        E1, 
        E2, 
        E3, 
        E4, 
    
        F1, 
        F2, 
        F3, 
        F4, 
    
        G1, 
        G2, 
        G3, 
        G4, 
        G5, 
        G6, 
        G7, 
        
        CRM,
        DiscussedItems })
    try {
        await newIncome.save()
        res.status(201).json(newIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const TablesLineTraining = async (req, res) => {
    const {PerPage,From}= req.query;

    try {
        const Data = await LineTrainingFormModel.find().select("User_Name Name createdAt ").sort({createdAt:-1}).limit(PerPage).skip(From)
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const TablesLineTrainingID = async (req, res) => {
    try {
        const Data = await LineTrainingFormModel.find().select("_id")
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const TablesDetailsTraining = async (req, res) => {
    const {PerPage,From}= req.query;
    try {
        const Data = await FlightDetailsform.find().select("User_Name FlightDetails createdAt ").sort({createdAt:-1}).limit(PerPage).skip(From)
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const TablesDetailsTrainingID= async (req, res) => {
    try {
        const Data = await FlightDetailsform.find().select("_id")
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const DataLineTraining = async (req, res) => {
    const {DataID}= req.query;
    try {
        const Data = await LineTrainingFormModel.find({_id:DataID})
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const DataFlightDetails = async (req, res) => {
    const {DataID}= req.query;
    try {
        const Data = await FlightDetailsform.find({_id:DataID})
        res.status(200).json(Data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const Search = async (req, res) => {
    const {Param,Location}= req.query;
    
    try {
        if(Location===`Line`){
            const Data = await LineTrainingFormModel.find({$or: [{ Name: new RegExp(Param,'i') },{User_Name: new RegExp(Param,'i')}]} ).select("User_Name Name createdAt ").sort({createdAt:-1})
            res.status(200).json(Data)
        }else if(Location===`Details`){
            const Data = await FlightDetailsform.find({$or: [{ FlightDetails: new RegExp(Param,'i') },{User_Name: new RegExp(Param,'i')}]} ).select("User_Name FlightDetails createdAt ").sort({createdAt:-1})
            res.status(200).json(Data)
        }else{
            res.status(200).json([])
        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const ADD_FLIGHT_DETAILS_FORM = async (req, res) => {
    
    const { User_Id, 
        User_Name, 
        FlightDetails,
            Date,

            SecNoPF1,
            SecNoPF2,
            SecNoPF3,
            SecNoPF4,

            FromPF1,
            FromPF2,
            FromPF3,
            FromPF4,

            ToPF1,
            ToPF2,
            ToPF3,
            ToPF4,

            DPF1,
            DPF2,
            DPF3,
            DPF4,

            NPF1,
            NPF2,
            NPF3,
            NPF4,

            TPF1,
            TPF2,
            TPF3,
            TPF4,

            TypePF1,
            TypePF2,
            TypePF3,
            TypePF4,

            SecNoPM1,
            SecNoPM2,
            SecNoPM3,
            SecNoPM4,

            FromPM1,
            FromPM2,
            FromPM3,
            FromPM4,

            ToPM1,
            ToPM2,
            ToPM3,
            ToPM4,

            DPM1,
            DPM2,
            DPM3,
            DPM4,

            NPM1,
            NPM2,
            NPM3,
            NPM4,

            TPM1,
            TPM2,
            TPM3,
            TPM4,

            TypePM1,
            TypePM2,
            TypePM3,
            TypePM4,

            TotalTodayTime1,
            TotalTodayTime2,

            PreviousTime1,
            PreviousTime2,

            TotalAccTime1,
            TotalAccTime2,

            TotalTodaySectors1,
            TotalTodaySectors2,

            PreviousSectors1,
            PreviousSectors2,

            TotalAccSector1,
            TotalAccSector2,

            GrandTotalTime,
            GrandTotalSector,

            InstructorNotes,

            Stage1,
            Stage2,
            Stage3,
            Stage4,
            Stage5,

            CC,
            SA,
            LM,
            DM,
            A,
            P,
            M,
            K,

            signPadTraineeData,
            signPadIPData,
            signPadTMData} = req.body;

    const newIncome = new FlightDetailsform({ User_Id, 
        User_Name, 
        FlightDetails,
            Date,

            SecNoPF1,
            SecNoPF2,
            SecNoPF3,
            SecNoPF4,

            FromPF1,
            FromPF2,
            FromPF3,
            FromPF4,

            ToPF1,
            ToPF2,
            ToPF3,
            ToPF4,

            DPF1,
            DPF2,
            DPF3,
            DPF4,

            NPF1,
            NPF2,
            NPF3,
            NPF4,

            TPF1,
            TPF2,
            TPF3,
            TPF4,

            TypePF1,
            TypePF2,
            TypePF3,
            TypePF4,

            SecNoPM1,
            SecNoPM2,
            SecNoPM3,
            SecNoPM4,

            FromPM1,
            FromPM2,
            FromPM3,
            FromPM4,

            ToPM1,
            ToPM2,
            ToPM3,
            ToPM4,

            DPM1,
            DPM2,
            DPM3,
            DPM4,

            NPM1,
            NPM2,
            NPM3,
            NPM4,

            TPM1,
            TPM2,
            TPM3,
            TPM4,

            TypePM1,
            TypePM2,
            TypePM3,
            TypePM4,

            TotalTodayTime1,
            TotalTodayTime2,

            PreviousTime1,
            PreviousTime2,

            TotalAccTime1,
            TotalAccTime2,

            TotalTodaySectors1,
            TotalTodaySectors2,

            PreviousSectors1,
            PreviousSectors2,

            TotalAccSector1,
            TotalAccSector2,

            GrandTotalTime,
            GrandTotalSector,

            InstructorNotes,

            Stage1,
            Stage2,
            Stage3,
            Stage4,
            Stage5,

            CC,
            SA,
            LM,
            DM,
            A,
            P,
            M,
            K,

            signPadTraineeData,
            signPadIPData,
            signPadTMData })
    try {
        await newIncome.save()
        res.status(201).json(newIncome)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}