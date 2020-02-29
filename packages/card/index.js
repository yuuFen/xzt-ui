import Card from './src/Card.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}
export default Card