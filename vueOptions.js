const options = {
  // 在组件的options中
  _isComponent: true, // 是否是组件的标识
  _parentVnode: vm, // 默认为组件的vnode
  parents: vm, // 在初始化时 lifecycle 中激活的节点
}