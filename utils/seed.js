const mongoose = require('mongoose');
const { User, Thought } = require('../models');

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample users
const users = [
  {
    username: 'alice',
    email: 'alice@example.com',
  },
  {
    username: 'bob',
    email: 'bob@example.com',
  },
  {
    username: 'charlie',
    email: 'charlie@example.com',
  },
];

// Sample thoughts
const thoughts = [
  {
    thoughtText: 'This is Alice\'s first thought!',
    username: 'alice',
  },
  {
    thoughtText: 'Bob here, sharing my thoughts.',
    username: 'bob',
  },
  {
    thoughtText: 'Charlie\'s thought for the day.',
    username: 'charlie',
  },
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert sample users
    const createdUsers = await User.insertMany(users);
    console.log('Users seeded:', createdUsers);

    // Insert sample thoughts
    const userMap = {};
    createdUsers.forEach(user => userMap[user.username] = user._id);
    
    const thoughtsWithUserIds = thoughts.map(thought => ({
      ...thought,
      userId: userMap[thought.username]
    }));

    const createdThoughts = await Thought.insertMany(thoughtsWithUserIds);
    console.log('Thoughts seeded:', createdThoughts);

    // Associate thoughts with users
    for (const thought of createdThoughts) {
      await User.findOneAndUpdate(
        { username: thought.username },
        { $addToSet: { thoughts: thought._id } }
      );
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

// Run the seeding script
seedDatabase();
