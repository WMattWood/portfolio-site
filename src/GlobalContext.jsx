import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({children}) => {

    const accessToken = import.meta.env.VITE_GITHUB_TOKEN

    const [ projects, setProjects ] = useState([])
    const [ blogs, setBlogs ] = useState([])

    const getRepos = () => {
        fetch("https://api.github.com/graphql", {
          "method": "POST",
          "headers": {
            // "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          "body": JSON.stringify({
                query: `query {
                          user(login: "wmattwood") {
                                              pinnedItems(first: 6, types: REPOSITORY) {
                                                nodes {
                                                  ... on Repository {
                                                    name
                                                  }
                                                }
                                              }
                                            }
                        }`
                })
        })
        .then( res => res.json() )
        .then( res => setProjects(res.data.user.pinnedItems.nodes) )
      }
    
      const getBlogs = () => {
        fetch("https://rails-blog-api.herokuapp.com/posts", {
          "method": "GET",
          "headers": {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => res.json())
        .then(res => setBlogs([...res]))
      }
    
      useEffect( () => {
          getRepos()
          getBlogs()
      }, [] )


    return (
        <GlobalContext.Provider value={ {accessToken, blogs, projects} }> {children} </GlobalContext.Provider>
    );
};;

export default GlobalProvider