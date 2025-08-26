const { ApolloServer, gql } = require('apollo-server');


const USERS = [
    {
        id : 1,
        name : "Yug",
        email : "yug@gmail.com"
    },
    {
        id : 2,
        name : "Ananya",
        email : "ananya@gmail.com"
    },
    {
        id : 3,
        name : "Anvita",
        email : "anvita@gmail.com"
    },
    {
        id : 4,
        name : "Annu",
        email : "annu@gmail.com"
    },
    {
        id : 5,
        name : "Sneha",
        email : "sneha@gmail.com"
    },
];


const POSTS = [                                       
  {
    id: 1,
    title: "Mastering JavaScript Closures",
    content: "Closures are a powerful feature of JavaScript. Today we dive deep into how they work.",
    authorId: 3,
    publishedAt: "2025-02-14"
  },
  {
    id: 2,
    title: "Understanding GraphQL Mutations",
    content: "Mutations in GraphQL allow you to modify server-side data. Let's explore with examples.",
    authorId: 1,
    publishedAt: "2025-05-07"
  },
  {
    id: 3,
    title: "Exploring Async/Await in JS",
    content: "Async/Await makes working with promises easier. Here's a guide with real-world scenarios.",
    authorId: 5,
    publishedAt: "2025-07-22"
  },
  {
    id: 4,
    title: "Intro to REST vs GraphQL",
    content: "We compare REST APIs with GraphQL to understand when to use which technology.",
    authorId: 2,
    publishedAt: "2025-03-19"
  },
  {
    id: 5,
    title: "Demystifying React Hooks",
    content: "React hooks like useState and useEffect simplify state management in React apps.",
    authorId: 4,
    publishedAt: "2025-09-02"
  },
  {
    id: 6,
    title: "Database Indexing Explained",
    content: "Indexes improve database performance drastically. Learn the types of indexes with use cases.",
    authorId: 1,
    publishedAt: "2025-06-15"
  },
  {
    id: 7,
    title: "A Guide to TypeScript Basics",
    content: "TypeScript adds type safety to JavaScript. Here's a quick beginner-friendly guide.",
    authorId: 2,
    publishedAt: "2025-04-08"
  },
  {
    id: 8,
    title: "Understanding Node.js Event Loop",
    content: "The event loop is at the core of Node.js performance. Let's break it down step by step.",
    authorId: 5,
    publishedAt: "2025-11-27"
  },
  {
    id: 9,
    title: "GraphQL Subscriptions 101",
    content: "Subscriptions enable real-time communication in GraphQL apps. Here's how to implement them.",
    authorId: 3,
    publishedAt: "2025-01-30"
  },
  {
    id: 10,
    title: "Clean Code Principles",
    content: "Writing clean and maintainable code is essential for scalable projects. Let's discuss best practices.",
    authorId: 4,
    publishedAt: "2025-08-05"
  }
];

const typeDefs = gql` 
    type User{
        id : ID!
        name : String!
        email : String!
        posts : [Post!]!
    }
    type Post{
        id : ID!
        title : String!
        content : String!
        author : User!
        publishedAt : String!
    }
    type Query{
        getUsers : [User!]!
        getUser(id : ID!) : User!
        getPosts : [Post!]!
        getPost(id : ID!) : Post!
    }

    input CreateUserInput{
        name : String!
        email : String!
    }

    input CreatePostInput{
        title : String!
        content : String!
        authorId : ID!
    }

    type Mutation{
        createUser(input : CreateUserInput) : User!
        createPost(input : CreatePostInput) : Post!
    }
`

const resolvers = {
    Query: {
        getUsers: () => USERS,

        getUser: (_, { id }) => {
            return USERS.find((user) => user.id === parseInt(id)); 
        },

        getPosts: () => POSTS,

        getPost: (_, { id }) => {
            return POSTS.find((post) => post.id === parseInt(id)); 
        },
    },

    User: {
        posts: (user) => {
            return POSTS.filter((post) => post.authorId === user.id);
        }
    },

    Post: {
        author: (post) => {
            return USERS.find((user) => user.id === post.authorId);
        }
    },

    Mutation : {
        createUser : (_,{input})=>{
            const id = USERS.length + 1;
            const user = {...input, id};
            USERS.push(user);
            return user
        },
        createPost : (_,{input})=>{
            const newPost = {
              ...input,
              id: POSTS.length + 1,
              authorId: parseInt(input.authorId)
            };
            POSTS.push(newPost);
            return newPost;
        }
    }
};


const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers
})

graphQLServer.listen().then(({url}) => {
    console.log(`GraphQL Server running at ${url}`);
})