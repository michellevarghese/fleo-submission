import React from "react";

const Profile = (Profile) => {
  const {html_url, name,description, owner,stargazers_count,forks_count,language  } = Profile;
  


return (
  <article className="card">
    
    <h3 className="wrap-it">{name}</h3>
    <div id="myDesc">
    {description}
</div>
    
    <h4>Owner: {owner.login}</h4>
    <h4>Stars: {stargazers_count}</h4>
    <h4>Forks: {forks_count}</h4>
    <h4>Language: {language}</h4>

    <a href={html_url} className="btn">
      View Profile
    </a>
  </article>


);
};


export default Profile;
