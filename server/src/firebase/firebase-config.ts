import * as admin from "firebase-admin";
import * as serviceAccount from "./serviceAccountKey.json";

const appFirebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket: "gs://ecume-5310b.appspot.com/"
})

export default appFirebase
