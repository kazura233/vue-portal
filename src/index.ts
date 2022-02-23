import Vue from 'vue'

let id = 0

export const createElm = function () {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

export const createVue = function (Compo: any, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo }
  }
  return new Vue(Compo).$mount(mounted === false ? undefined : createElm())
}

export function createComponent(Compo: any, mounted: boolean): any
export function createComponent(Compo: any, propsData: object, mounted: boolean): any
export function createComponent(Compo: any, propsData = {}, mounted = false): any {
  if (propsData === true || propsData === false) {
    mounted = propsData as boolean
    propsData = {}
  }
  const elm = createElm()
  const Ctor = Vue.extend(Compo)
  return new Ctor({ propsData }).$mount(mounted === false ? undefined : elm)
}

export const destroyVM = function (vm: any) {
  vm.$destroy && vm.$destroy()
  vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el)
}
