var firebaseConfig = {
    apiKey: "AIzaSyABjEmhMayQxagA7-DrDcQaf1VLSFYpeNk",
    authDomain: "macrolator-6980d.firebaseapp.com",
    projectId: "macrolator-6980d",
    storageBucket: "macrolator-6980d.appspot.com",
    messagingSenderId: "418496152760",
    appId: "1:418496152760:web:df18ffe76ff123c0d5604d"
  };

let app = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(app);
let foodDB = db.collection('foods');
let recipeDB = db.collection('recipes');
let logDB = db.collection('log');

async function getRecipe(recipeRequest) {
    var recipe;
    var query = await recipeDB
        .where("recipe", '==', recipeRequest)
        .get()
        .then(function (querySnapshot) {
          recipe = querySnapshot.data();  
        })
        .catch(function (error) {
            console.log("Error getting document: ", error);
        });
    console.log(recipe);
}

