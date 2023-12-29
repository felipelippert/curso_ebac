document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatarImg = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');


    fetch('https://api.github.com/users/felipelippert')
        .then(function(res) {
            return res.json();
        })
    .then(function(json) {
        name.innerText = json.name;
        username.innertext = json.login;
        avatarImg.src = json.avatar_url;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
    
})