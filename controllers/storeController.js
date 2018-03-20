const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Game'})
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  req.flash('success', `you have added a game that was played on ${store.name}`)
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  console.log(stores);
  res.render('stores', { title: 'Games', stores });
};

exports.getStoreBySlug = async (req, res) => {
  const store = await Store.findOne({ slug: req.params.slug });
  if (!store) return next();
  res.render('store', {store, title: store. name});
};

exports.getStoresByTag = async (req, res) => {
  const tag = req.params.tag;
  const tagQuery = tag || { $exists:true };
  const tagsPromise = Store.getTagsList();
  const storesPromise = Store.find({ tags: tagQuery });
  const [tags, stores] = await Promise.all([tagsPromise, storesPromise]);
  res.render('tag', {tags, title: 'Ranking', tag, stores })
};

exports.searchStores = async (req, res) => {
const stores = await Store.find({
  $text: {
    $search: req.query.q
  }
}, {
  score: { $meta: 'textScore' }
})
.sort({
  score: { $meta: 'textScore'}
})
.limit(5);
res.json(stores);
};