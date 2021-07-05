export default {
  name: 'RenderlessButton',
  props: {
    tag: {
      type: String,
      default: () => '',
      validator: function (value) {
        const passedClassesArr = value.split(' ')
        const validClasses = ['', 'big', 'small', 'outline', 'rounded']
        return passedClassesArr.every((x) => validClasses.includes(x))
      },
    },
  },
  data: function () {
    return {
      initialClasses: 'transition-colors h-12 w-24',
      classesArr: [
        ['big', 'text-2xl font-bold'],
        ['small', 'text-sm font-normal'],
        ['outline', 'border-2'],
        ['rounded', 'rounded-lg shadow-2xl'],
      ],
    }
  },
  computed: {
    componentClasses() {
      const a = this.classesArr.reduce(
        (acc, x) => (this.tag.includes(x[0]) ? acc + x[1] : ''),
        initialClasses,
      )
      console.log(a)
      return a
    },
  },
  render(h) {
    return h('button', { class: this.componentClasses }, this.$slots.default)
  },
}
