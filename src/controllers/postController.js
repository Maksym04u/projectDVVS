const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
   const posts = await Post.findAll();
   res.render('index', { posts });
};

exports.createPostPage = (req, res) => {
   res.render('create');
};

exports.createPost = async (req, res) => {
   const { title, description, author } = req.body;
   await Post.create({ title, description, author });
   res.redirect('/');
};

exports.editPostPage = async (req, res) => {
   const post = await Post.findByPk(req.params.id);
   res.render('edit', { post });
};

exports.editPost = async (req, res) => {
   const { title, description, author } = req.body;
   await Post.update({ title, description, author }, { where: { id: req.params.id } });
   res.redirect('/');
};

exports.deletePost = async (req, res) => {
   await Post.destroy({ where: { id: req.params.id } });
   res.redirect('/');
};
