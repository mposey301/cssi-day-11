let googleUser = null;


window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // this code runs if the user is logged in 
            console.log('logged in as', user.displayName);
            googleUser = user;
        } else {
            // this code runs if the user not logged in 
            console.log('not logged in');
        }
    })

    const createNoteButton = document.querySelector('#createNoteButton');
    createNoteButton.addEventListener('click', () => {
        // get values from the form.
        const noteTitle = document.querySelector('#noteTitle').value;
        const noteText = document.querySelector('#noteText').value;
        console.log(noteTitle, noteText);

        // write these values to the database
        firebase.database().ref(`/users/${googleUser.uid}`).push({
             title: noteTitle,
             text: noteText
        })
        .then(() => {
            console.log('Database write successful');
            document.querySelector('#noteTitle').value = "";
            document.querySelector('#noteText').value = "";
        })
        .catch(error => {
            console.log(error);
        });
    });

}