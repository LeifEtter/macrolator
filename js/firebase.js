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
let ingredientsDB = db.collection('ingredients');
let logDB = db.collection('log');

async function getRecipe(recipeRequest) {
    var recipe;
    var query = await recipeDB
        .where("recipe", '==', recipeRequest)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            recipe = doc.data();
          })
        })
        .catch(function (error) {
            console.log("Error getting document: ", error);
            recipe = null;
        });

    return recipe;
}

async function addIngredient() {
  await ingredientsDB
    .doc()
    .set({
      name: $('#name').val(),
      calories: $('#calories').val(),
      carbs: $('#carbs').val(),
      sugar: $('#sugar').val(),
      fiber: $('#fiber').val(),
      fat: $('#fat').val(),
      saturated_fat: $('#saturated-fat').val(),
      unsaturated_fat: $('#unsaturated-fat').val(),
      protein: $('#protein').val(),
    })
    .catch(function(error) {
      console.log("Error adding ingredient: ", error);    
    })
}

