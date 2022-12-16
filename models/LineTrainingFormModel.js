import mongoose from 'mongoose';

const LineSchema = mongoose.Schema({
    User_Id: String,
    User_Name: String,
    IOE: Boolean,
    USV: Boolean,
    Name:String,
    Title:String,
    Route:String,
    Date:String,
    FilTimeD:String,
    FilTimeN:String,
    FilTimeT:String,
    NoOfSectors:String,
    PF:String,
    PM:String,
    Stage1: Boolean,
    Stage2: Boolean,
    Stage3: Boolean,
    Stage4: Boolean,
    INIT: Boolean,
    TRANS: Boolean,
    UPGRADE: Boolean,
    NEWHIRE: Boolean,
    A1: Boolean,
    A2: Boolean,
    A3: Boolean,
    A4: Boolean,
    A5: Boolean,
    A6: Boolean,

    B1: Boolean,
    B2: Boolean,
    B3: Boolean,
    B4: Boolean,
    B5: Boolean,
    B6: Boolean,
    B7: Boolean,
    B8: Boolean,
    B9: Boolean,

    C1: Boolean,
    C2: Boolean,
    C3: Boolean,
    C4: Boolean,
    C5: Boolean,
    C6: Boolean,
    C7: Boolean,

    D1: Boolean,
    D2: Boolean,
    D3: Boolean,
    D4: Boolean,
    D5: Boolean,
    D6: Boolean,
    D7: Boolean,
    D8: Boolean,

    E1: Boolean,
    E2: Boolean,
    E3: Boolean,
    E4: Boolean,

    F1: Boolean,
    F2: Boolean,
    F3: Boolean,
    F4: Boolean,

    G1: Boolean,
    G2: Boolean,
    G3: Boolean,
    G4: Boolean,
    G5: Boolean,
    G6: Boolean,
    G7: Boolean,

    CRM:Boolean,
    DiscussedItems:String
},{
    timestamps:true
})

const linetrainingform = mongoose.model('linetrainingform', LineSchema);

export default linetrainingform;