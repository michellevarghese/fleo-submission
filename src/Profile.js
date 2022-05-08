import React from "react";

const Profile = (Profile) => {
  const {html_url, name,description, owner,stargazers_count,forks_count,language  } = Profile;
  //const { login, avatar_url, html_url } = Profile;

//   return (
//     <article className="card">
//       <img src={avatar_url} alt={login} />
//       <h4>{name}</h4>
//       <a href={html_url} className="btn">
//         View Profile
//       </a>
//     </article>
//   );
// };


return (
  <article className="card">
    
    <h3>{name}</h3>
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
//   <div class="ui card">
//   <div class="image">
//     <img src="/images/avatar2/large/kristy.png"/>
//   </div>
//   <div class="content">
//     <a class="header">Kristy</a>
//     <div class="meta">
//       <span class="date">Joined in 2013</span>
//     </div>
//     <div class="description">
//       {description}
//     </div>
//   </div>
//   <div class="extra content">
//   <a href={html_url} className="btn">
//    View Profile
//   </a>
//   </div>
// </div>

);
};


export default Profile;
