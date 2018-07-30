import fly from './fly'

// const api = 'https://www.fhtower.com/fhtowers'

const articleList = () => fly.get('/article/miniRecommend')

export default {
  articleList
}
