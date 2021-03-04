const github = new Github;
const ui = new UI;

//get Elements
const searchInput = document.getElementById('searchUser');

//add event listners
searchInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  let userText = searchInput.value;

  if( userText !== '')
  {
    github.getUser(userText).then( (data) => {
      if( data.profile.message == 'Not Found'){
        //show alert
        ui.showAlert('User Not Found!','alert alert-danger');
      }
      else{
        //show profile
        ui.showProfile(data.profile);

        //show repos
        ui.showRepos(data.repos);
      }
    })
  }
  else{
    //clear the profile
    ui.clearProfile();
  }
  
});