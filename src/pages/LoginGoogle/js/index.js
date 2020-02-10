import { setUserData } from '../../../utils/common';

function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  const userData = {
    nama: profile.getName(),
    token: profile.getToken(),
    email: profile.getEmail()
  };
  setUserData(userData);
  window.location.href('/');
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    alert('sukses log out');
    $('.g-signin2').css('display', 'block');
    $('.data').css('display', 'none');
  });
}
