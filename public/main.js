document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)

    .then(result => {
      const user = result.user;
      document.write(
        `Display Name = ${user.displayName} <br> Email = ${
          user.email
        } <br> Photo URL = <img style="width:360px" src="${
          user.photoURL
        }"> <br> Email Verified = ${user.emailVerified} <br> User Id = ${
          user.uid
        } <br> <button onclick="googleLogout()">Logout</button>`
      );
      console.log(user);
    })
    .catch(console.log);
}

function googleLogout() {
  window.location = "index.html";
}
