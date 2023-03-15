//////////////////////////////////////
// const express = require('express');

// const expressGraphQL = require('express-graphql').graphqlHTTP;
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLNonNull,
//   GraphQLID,
// } = require('graphql');

// const app = express();

// const city = [
//   {id:1, name: 'San Antonio', },
//   {id:2, name: 'Austin'}
// ]

// const cuisine = [
//   {id: 1, name: "Mexican"},
//   {id: 2, name: "Seafood"},
//   {id: 3, name: "American"},
//   {id: 4, name: "Asian"},
//   {id: 5, name: "Barbecue"},
//   {id: 6, name: "Italian"},
// ]

// const restaurant = [
//   { id:1, name: "Chik-Fil-A", description: 'This is a fun chicken filled restaurant named Chik-Fil-A', cuisineId: 3, cityId: 1 },
//   { id: 2, name: "Chili's", description: 'This is a fun filled restaurant named Chilis', cuisineId: 3, cityId: 2 },
//   { id: 3, name: "Don Pedros", description: "This is a Mexican restaurant named Don Pedro's", cuisineId: 1, cityId: 1 }
// ]

// const users = [
//   {id:1, name: 'Billy', email: 'billythekid@gmail.com', password: '12345@!#', preferredCity: 'San Antonio'}
// ]

// const UserType = new GraphQLObjectType({
//   name:'User',
//   fields: () => ({
//     id: {type: GraphQLInt},
//     name: {type: GraphQLString},
//     email: {type: GraphQLString},
//     password: {type: GraphQLString},
//     preferredCity: {type: GraphQLString}
//   })
// })

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => ({
//     addUser: {
//       type: UserType,
//       args: {
//         id: {id:{type:GraphQLID}},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//         password: {type: GraphQLString},
//         preferredCity: {type: GraphQLString}
//       },
//       resolve: (args) => {
//         let user = new users({
//           id: args.id,
//           name: args.name,
//           email: args.email,
//           password: args.password,
//           preferredCity: args.preferredCity
//         });
//         return user.save();
//       }
//     }
//   })
// })

// const CuisineType = new GraphQLObjectType({
//   name: 'Cuisine',
//   description: 'This is a type of food in a city you picked',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//   })
// })

// const RestaurantType = new GraphQLObjectType({
//   name: 'Restaurant',
//   description: 'This is where to find a restaurant by type of food in the selected city',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//     description: { type: GraphQLNonNull(GraphQLString) },
//     cityId: { type: GraphQLNonNull(GraphQLInt) },
//     cuisineId: { type: GraphQLNonNull(GraphQLInt) },
//     cuisine: {
//       type: CuisineType,
//       resolve: (restaurant) => {
//         return cuisine.find(cuisine => cuisine.id === restaurant.cuisineId)
//       }
//     },
//     city: {
//       type: CityType,
//       resolve: (restaurant) => {
//         return city.find(city => city.id === restaurant.cityId)
//       }
//     }
//   })
// })

// const CityType = new GraphQLObjectType({
//   name: 'City',
//   description: 'This is a city to find types of food',
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) }
//   })
// })

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     restaurants: {
//       type: new GraphQLList(RestaurantType),
//       description: 'List of All restaurants',
//       resolve: () => restaurant
//     },
//     city: {
//       type: new GraphQLList(CityType),
//       description: 'List of All cities',
//       resolve: () => city
//     },
//     users: {
//       type: new GraphQLList(UserType),
//       description: 'List of All users',
//       resolve: () => users
//     }
//   })
// })

// const schema = new GraphQLSchema ({
//   query: RootQueryType,
//   Mutation: Mutation,
// });

// app.use('/graphql', expressGraphQL({
//   schema: schema,
//   graphiql: true
// })
// )
// app.listen(3000., () => console.log('Server Running'))
