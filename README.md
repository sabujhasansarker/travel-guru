


# Travel Guru [<img  src="https://img.shields.io/badge/%20Travel%20Guru -Live%20here-brightgreen"/>](https://travel-guru-c87a1.web.app/)

# Quick Start ![rocket](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png)

### Add a fire.js file in config folder under src folder with the following

```
import  firebase  from  "firebase";

var  firebaseConfig  = {
apiKey: "<fireBase apiKey/>",
authDomain: "<fireBase authDomain/>",
databaseURL: "<fireBase databaseURL/>",
projectId: "<fireBase projectId/>",
storageBucket: "<fireBase storageBucket/>",
messagingSenderId: "<fireBase messagingSenderId/>",
appId: "<fireBase appId/>",
measurementId: "<fireBase measurementId/>",
};
firebase.initializeApp(firebaseConfig);
const  auth  =  firebase.auth();
var  google  =  new  firebase.auth.GoogleAuthProvider();
var  facebook  =  new  firebase.auth.FacebookAuthProvider();
export { auth, google, facebook };

```

### For npm log Run Appliaction  from root

    npm install or npm i & npm start

### For yarn log Run Appliaction 

    yarn add & yarn start


---
# App info
### Author  :
Sabuj Hasan Sarker
### Live :
[Travel Guru](https://travel-guru-c87a1.web.app/)
    
