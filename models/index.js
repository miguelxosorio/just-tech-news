const User = require('./User');
const Post = require('./Post');

// create associations
// user can make many posts - creates one to many relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// but a post can only belong to a user - creates one to one relationship
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };