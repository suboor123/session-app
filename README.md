# LBD - Learn By Doing

Learn By Doing is an LMS(learning management system) platform built by all the students who were taking the LIVE Sessions given on https://suboorkhan.com

## Getting Started

Clone the project and Sign up

### Installing

A step by step series of examples that tell you how to get a development env running

Install dependencies

```
npm install
```

Setup firebase config
create a file firebase-config.js and paste your firebase configuration in there

```
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
   // YOUR FIREBASE CONFIGURATION
};


const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp)

export { firebaseApp, firebaseDatabase };

```

Start the react app

```
npm run dev
```

## Built With

-   [React JS](https://reactjs.org/) - React JS
-   [rsuiteJS](https://rsuitejs.com/) - Rsuite
-   [firebase](https://firebase.google.com/) - Firebase

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
