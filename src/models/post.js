const { sequelize, DataTypes } = require('./index');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync the model with the database
sequelize.sync()
    .then(() => console.log('Post model synced with database'))
    .catch(err => console.error('Error syncing Post model:', err));

module.exports = Post;
