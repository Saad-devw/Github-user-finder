class Github {
  constructor(){
    this.client_id = '634429cf158e483c3475';
    this.secret = '9b3c6b23826413bdbdcb6b41f54c77a5d838e2ca';
    this.repos_count = 8;
    this.repos_sort = 'created : asc';
  }

  async getUser(user){
    const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret}`);

    const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.secret}`);

    const profile = await responseProfile.json();
    const repos = await responseRepos.json();

    return {
      profile,repos
    }
  }
}