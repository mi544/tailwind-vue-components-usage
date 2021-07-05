export default {
  name: 'RenderlessButton',
  props: {
    tag: {
      type: String,
      default: () => '',
      validator: function (value) {
        return ['', 'big', 'small', 'outline', 'rounded'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    componentClasses() {
      const initialClasses =
        'transition-colors h-12 w-24 bg-white hover:bg-gray-800 text-black hover:text-white border-red-500 hover:border-blue-300'
      const classList = {
        big: 'text-2xl font-bold',
        small: 'text-sm font-normal',
        outline: 'border-2',
        rounded: 'rounded-lg shadow-2xl',
      }
      return initialClasses + ' ' + (classList[this.tag] ?? '')
    },
  },
  render(h) {
    return h('button', { class: this.componentClasses }, this.$slots.default)
  },
}
