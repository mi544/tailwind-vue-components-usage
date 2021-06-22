export default {
  name: 'DifferentButton',
  props: {
    app: {
      type: String,
      default: 'admin',
      validator: function (value) {
        return ['admin', 'web'].indexOf(value) !== -1
      },
    },
  },
  components: {
    admin: () => import('./DifferentButtonAdmin.vue'),
    web: () => import('./DifferentButtonWeb.vue'),
  },
  render(h) {
    return h(this.app, {}, this.$slots.default)
  },
}
