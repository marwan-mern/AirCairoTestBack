import mongoose from 'mongoose';

const FlightDetailsSchema = mongoose.Schema({
    User_Id: String,
    User_Name: String,

    FlightDetails:String,
    Date:String,

    SecNoPF1:String,
    SecNoPF2:String,
    SecNoPF3:String,
    SecNoPF4:String,

    FromPF1:String,
    FromPF2:String,
    FromPF3:String,
    FromPF4:String,

    ToPF1:String,
    ToPF2:String,
    ToPF3:String,
    ToPF4:String,

    DPF1:String,
    DPF2:String,
    DPF3:String,
    DPF4:String,

    NPF1:String,
    NPF2:String,
    NPF3:String,
    NPF4:String,

    TPF1:String,
    TPF2:String,
    TPF3:String,
    TPF4:String,

    TypePF1:String,
    TypePF2:String,
    TypePF3:String,
    TypePF4:String,

    SecNoPM1:String,
    SecNoPM2:String,
    SecNoPM3:String,
    SecNoPM4:String,

    FromPM1:String,
    FromPM2:String,
    FromPM3:String,
    FromPM4:String,

    ToPM1:String,
    ToPM2:String,
    ToPM3:String,
    ToPM4:String,

    DPM1:String,
    DPM2:String,
    DPM3:String,
    DPM4:String,

    NPM1:String,
    NPM2:String,
    NPM3:String,
    NPM4:String,

    TPM1:String,
    TPM2:String,
    TPM3:String,
    TPM4:String,

    TypePM1:String,
    TypePM2:String,
    TypePM3:String,
    TypePM4:String,

    TotalTodayTime1:String,
    TotalTodayTime2:String,

    PreviousTime1:String,
    PreviousTime2:String,

    TotalAccTime1:String,
    TotalAccTime2:String,

    TotalTodaySectors1:String,
    TotalTodaySectors2:String,

    PreviousSectors1:String,
    PreviousSectors2:String,

    TotalAccSector1:String,
    TotalAccSector2:String,

    GrandTotalTime:String,
    GrandTotalSector:String,

    InstructorNotes:String,

    Stage1:Boolean,
    Stage2:Boolean,
    Stage3:Boolean,
    Stage4:Boolean,
    Stage5:Boolean,

    CC:String,
    SA:String,
    LM:String,
    DM:String,
    A:String,
    P:String,
    M:String,
    K:String,
    
    signPadTraineeData:String,
    signPadIPData:String,
    signPadTMData:String

},{
    timestamps:true
})

const FlightDetailsform = mongoose.model('FlightDetailsform', FlightDetailsSchema);

export default FlightDetailsform;