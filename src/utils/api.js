import fly from './fly'

// const api = 'https://www.fhtower.com/fhtowers'

// 预警文章
const warnArticle = () => fly.get('/article/miniRecommend')
// 文章列表
const articleList = (pageNum) => fly.get('/article/miniAllArticleList', {
  pageNum: pageNum
})
// 文章详情
const articleDetail = (id) => fly.get('/article/getArticleLink', {
  articleId: id,
  version: '1.0'
})
// 文章详情
const search = (key) => fly.get('/article/articleList', {
  pageNum: 1,
  keyword: key
})

export default {
  warnArticle,
  articleList,
  articleDetail,
  search
}
