const vnode = {
  type:'', // vnode类型
  tag:'', // 标签名
  forbidden: true, // 是否禁止渲染
  pre: true, // 标识是否使用了v-pre指令, 使用了v-pre的节点会跳过编译
  plain: true, // 标识节点是否是一个普通节点
  processed: true, 
  key: '', // 节点key值， 例如<div :key="aaa"></div>中的aaa
  ref: '', // ref属性的值
  refInFor: true, // 标识ref属性是否在v-for中使用
  slotScope: '', // 1、scope属性（2.5+版本已经被slot-scope替代）或者slot-scope属性的值 2、 v-slot指令的值
  slotTarget: '"default"' , // 1、slot属性的值，默认为"default" 2、v-slot指令声明的插槽名称 
  slotTargetDynamic: '', // 动态slot属性的值，如：:slot
  scopedSlots: {},
  slotContainer: vnode, 
  component:'', // is属性的值
  inlineTemplate: true, // 标识是否使用了inline-template属性
  slotName: '', // slot标签的name属性，只有当tag为slot时才存在
  once: true, // 标识是否使用了v-once指令
  for: 'array' // 遍历目标 例如：(item, index) in array中的array
  alias: 'item' // 遍历表达式的第一项 例如：(item, index) in array中的item 在过程中会先被设置为item, index 这一部分
  iterator1: 'index' // 遍历表达式的第二项 例如：(item, index) in array中的index
  iterator2: 'index' // 遍历表达式的第三项，出现于遍历对象的时候 例如：(value, key, index) in object中的index
  if:'', // v-if指令的值，即判断表达式
  else: true, // 标识是否使用了v-else指令
  elseif: '' // v-else-if指令的值，即判断表达式
  ifConditions: [{
    exp: exp, // 判断表达式
    block: el // 判断表达式成立时应该渲染的vnode
  }],
  start:0, // 节点的开始位置
  end: 20, // 节点的结束位置
  attrs: [{
    name:'', // 属性名
    value:'' // 通过JSON.stringify的属性值
    start: 0, // 属性值的开始位置
    end: 5 // 属性值的结束位置
  }],
  attrsList: [{
    name: '', // 属性名称
    value: '' // 属性值
    start: 0, // 属性值的开始位置
    end: 5 // 属性值的结束位置
  }], // 包含节点属性的数组， 指令属性会在编译中先加入后被删除(getAndRemoveAttr)，被删除的有：v-for，v-if
  attrsMap: {}, // 将节点属性以name:value形式保存的对象
  rawAttrsMap: {}, // 所有节点行内属性，以name:{name:'', value''}的形式保存，attrsList中被删除掉的部分也能在这里找到 
  parent: vnode, // 父节点，也是一个vnode实例
  children: [] // 子节点， 一个vnode实例的数组
  hasBindings: true // 标识节点是否带绑定属性
}