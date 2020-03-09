import React, {Component} from 'react';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Mickael Rocha",
          avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-9/85159992_2443334405772967_5589212337249714176_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_oc=AQm5RyacF5gzQ87BNHa4kk7VN3ab7Zw9U-VsfWew8bpMXeUlioU8U54ZgxAInVPy0G0&_nc_ht=scontent.fudi1-2.fna&oh=cd50e7b16f90c4927b9cb0825eea286b&oe=5E90D196"
        },
        date: "07 Mar 2020",
        content: "Pessoal, porque meu Facebook está diferente?",
        comments: [
          {
            id: 1,
            author: {
              name: "Mark Zuckerberg",
              avatar: "https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg"
            },
            content: "I bought the old competition and I'm doing some tests, sorry for the inconvenience."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mickael Rocha",
          avatar: "https://scontent.fudi1-2.fna.fbcdn.net/v/t1.0-9/85159992_2443334405772967_5589212337249714176_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_oc=AQm5RyacF5gzQ87BNHa4kk7VN3ab7Zw9U-VsfWew8bpMXeUlioU8U54ZgxAInVPy0G0&_nc_ht=scontent.fudi1-2.fna&oh=cd50e7b16f90c4927b9cb0825eea286b&oe=5E90D196"
        },
        date: "05 Mar 2020",
        content: "Procurando algo pra fazer nessa noite!",
        comments: [
          {
            id: 1,
            author: {
              name: "Mamãe",
              avatar: "https://www.hospitalsapiranga.com.br/_arquivos/midia/2016/05/grande-mae1.jpg"
            },
            content: "Vai dormir!!"
          }
        ]
      },
    ]
  };

  render(){
    const {posts} = this.state;
    
    return(
      posts.map(post => <Post key={post.id} {...post} />)
    )
  }
}

export default PostList;