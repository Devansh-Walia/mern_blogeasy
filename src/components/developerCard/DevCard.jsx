import './devCard.css';

export default function DevCard({ dev}) {
    return <>
        <div className="dev-card">
            <div className="dev-card-header">
                <div className="dev-card-header-img">
                    <img src={dev.avatar_url} alt="dev-img" />
                </div>
                <div className="dev-card-header-name">
                    <h1>{dev.login}</h1>
                </div>
            </div>
                <div className="dev-card-about">
                        {dev.bio}
                </div>
            <div className="dev-card-body">
                <p>location: {dev.location}</p>
                <p>followers: {dev.followers}</p>
                <p>public repos: {dev.public_repos}</p>
                <p>following: {dev.following}</p>
            </div>
        </div>
    </>;
}

//each dev cotain the following:
// {
//     login: ,
//     id: ,
//     node_id: ,
//     avatar_url: ,
//     gravatar_id: ,
//     url: ,
//     html_url: ,
//     followers_url: ,
//     following_url: ,
//     gists_url: ,
//     starred_url: ,
//     subscriptions_url: ,
//     organizations_url: ,
//     repos_url: ,
//     events_url: ,
//     received_events_url: ,
//     type: ,
//     site_admin: ,
//     name: ,
//     company: ,
//     blog: ,
//     location: ,
//     email: ,
//     hireable: ,
//     bio: ,
//     twitter_username: ,
//     public_repos: ,
//     public_gists: ,
//     followers: ,
//     following: ,
//     created_at: ,
//     updated_at: '
//   }

// use whatever else you want
