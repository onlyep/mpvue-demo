import fly from './fly'

// const api = 'https://www.fhtower.com/fhtowers'

// 警告文章
const warnArticle = () => fly.get('/article/miniRecommend')
// 文章列表
const articleList = () => fly.get('/article/articleListByCategory', {
  categoryId: 3,
  pageNum: 1
})
// 文章详情
const articleDetail = (id) => fly.get('/article/getArticleLink', {
  articleId: id,
  version: '1.0'
})

export default {
  warnArticle,
  articleList,
  articleDetail
}
