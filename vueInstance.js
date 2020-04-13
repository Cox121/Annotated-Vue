const Vue = {
  _uid: 1, // 实例id, 递增， 在_init()中生成
  _isVue: true, // 标记为vue实例，防止被设置为响应式数据，在_init()中生成
  _renderProxy: {}, // 渲染函数作用域, _init() 中生成
  $options:{}, // 用户书写的配置项_init()中规范化后的返回值
  config:{}, // 可读不可写， 保存了实例的配置项
  util:{ // 一些工具函数
    warn, 
    extend,
    mergeOptions,
    defineReactive
  },
  set(){}, // $set方法 让对象值得设置变得响应式
  delete(){}, // $delete方法 让对象值得删除变得响应式
  nextTick(){}, // $nextTick方法 
  observable(){}, // observable方法 让数据变成响应式
  options:{ // initGlobalAPI中初始化
    _base: Vue // 保存了对当前Vue实例的引用
  }, 
  components:{}, // initGlobalAPI的时候加入内置组件
  // 初始化方法,生成了一些属性，按照先后顺序进行了内置组件的初始化、
  // 实例配置项的规范化、渲染函数作用域代理、生命周期初始化、事件机制初始化、
  // 渲染函数初始化、beforeCreate钩子调用、Inject属性初始化、state初始化、Provide属性初始化、
  // created钩子调用、组件名规范化、$mounted调用
  _init(){},
  // initLifecycle中初始化
  $children:[], // 非抽象子节点
  $parent: vm, // 离当前节点最近的非抽象父节点
  $root: vm, // 根节点
  $refs: {},
  _watcher: null
  _inactive: null,
  _directInactive: false,
  _isMounted: false,
  _isDestroyed: false,
  _isBeingDestroyed: false,
  // initEvents中初始化
  _events: {},
  _hasHookEvent: false,
  // initRender中初始化
  _vnode: null,
  _staticTrees: null,
  $vnode: null,
  $slots: 
  $scopedSlots: 
  _c: 
  $createElement: 
  $attrs: 
  $listeners: 
}