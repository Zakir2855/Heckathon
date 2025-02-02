import React from "react";


function Main({ data, type }) {
  if (!data || data.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div className="mainBar">
      <div className="gridTable">
        {data.map((item, index) => {
          if (type === "language") {
            return (
              <div className="box" key={index}>
                <h3>Name: {item.full_name}</h3>
                <h3>Description: {item.description}</h3>
                <h3>Language: {item.language}</h3>
                <h3>Forks Count: {item.forks_count}</h3>
                <h3>
                  <a href={item.svn_url}>Go to the repository</a>
                </h3>
              </div>
            );
          } else if (type === "user") {
            return (
              <div className="box" key={index}>
                <h3>Name: {item.login}</h3>
                <h3>Followers: {item.followers}</h3>
                <h3>Public Repos: {item.public_repos}</h3>
                <h3>
                  <a href={item.html_url}>Go to the profile</a>
                </h3>
              </div>
            );
          }
          else{
            return(
                <div className="box" key={index}>
                <h3>Name: {item.full_name}</h3>
                <h3>Description: {item.description}</h3>
                <h3>Language: {item.language}</h3>
                <h3>Forks Count: {item.forks_count}</h3>
                <h3>
                  <a href={item.svn_url}>Go to the repository</a>
                </h3>
              </div>
            )
          }
        
        })}
      </div>
    </div>
  );
}

export default Main;
