const signInButton = document.querySelector('.button');
signInButton.addEventListener('click', () => {
    console.log('clicked!');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;

        console.log('login succcess', user);
        window.location = 'writeNote.html'
    })
    .catch(error => {
        console.log('login failed', error);
    });
});

