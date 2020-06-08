const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float
  date: String!
  capacity: Int
  creator: User!
}
type User {
  _id: ID!
  name: String!
  email: String!
  password: String
  mobileNr: Int
  about: String
  interests: [String]
  createdEvents: [Event!]
}
input UserInput {
  name: String!
  email: String!
  password: String!
  mobileNr: Int
  about: String
  interests: [String]
}
input EventInput {
  title: String!
  description: String!
  price: Float
  date: String!
  capacity: Int
}
type RootQuery {
  events: [Event!]!
  bookings: [Booking!]!
}
type RootMutation {
  createEvent(eventInput: EventInput): Event
  createUser(userInput: UserInput): User
  bookEvent(eventId: ID!): Booking!
  cancelBooking(bookingId: ID!): Event!
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`)
