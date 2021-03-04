class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
  
  //Display Profile at the UI
  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row ">
        <div class="col-md-3">
          <img src="${user.avatar_url}" class="img-fluid mb-2">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos : ${user.public_repos} </span>
          <span class="badge badge-secondary">Public Gists : ${user.public_gists} </span>
          <span class="badge badge-success">Followers : ${user.followers} </span>
          <span class="badge badge-info">Following : ${user.following} </span>
          <br><br>
          <ul class="list-group"> 
            <li class="list-group-item">Full Name : ${user.name}</li> 
            <li class="list-group-item">Company : ${user.company}</li> 
            <li class="list-group-item">Website/Blog : ${user.blog}</li> 
            <li class="list-group-item">Location : ${user.location}</li> 
            <li class="list-group-item">Member Since : ${user.created_at}</li>
          </ul>
        </div>  
      </div>
    </div>
    <h3 class="page-heading mb-3"> Latest Repos </h3>
    <div id="repos"></div>
    `;
  }

  //show repos
  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
             
            <div class="col-md-6">
              <span class="badge badge-primary">Stars : ${repo.stargazers_count} </span>
              <span class="badge badge-secondary">Watchers : ${repo.watchers_count} </span>
              <span class="badge badge-success">Forks : ${repo.forks_count} </span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }
  
  //clear the profile from UI
  clearProfile(){
    this.profile.innerHTML = '';
  }

  //show alert 
  showAlert(message,classNm){
    //clear any remaining alerts
    this.clearAlert();

    //create an alert div
    const div = document.createElement('div');

    //append class and text to the div
    div.className = classNm;
    div.appendChild(document.createTextNode(message));

    //insert the div to the document
    const search = document.querySelector('.search');
    const parentElm = document.querySelector('.searchContainer');

    parentElm.insertBefore(div,search);
    
    //remove the alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    },3000); 
  }

  //clear the alert
  clearAlert(){
    const remainAlert = document.querySelector('.alert');

    if( remainAlert )
    {
      remainAlert.remove();
    }
  }
}