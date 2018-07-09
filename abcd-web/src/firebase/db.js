import { db } from './firebase';

export const onWriteData = (refPayload, userId,payloadData) => db.ref(refPayload + userId).set({
    payloadData
}) 
export const onGetData  = (refPayload) => db.ref(refPayload).once('value');
export const upDateData = (refPayload, updates) => db.ref(refPayload).update(updates) 
export const onDeleteHard = (refPayload) => db.ref(refPayload).remove()