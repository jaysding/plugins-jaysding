
## drag-scroll-plugin


### 一个适用于vue表格的横向拖拽插件

当一些容器(例如表格)横向内容充斥过多时，鼠标用户可能需要将内容滚到最底部然后拖拽滚动条，非常不方便，所以这时可能需要一个可以直接用鼠标横向拖拽表格(容器)的插件。

#### Install drag-scroll-plugin

`npm install drag-scroll-plugin --save`


#### Usage

 for native JS: 

	import { DragScroller } from 'drag-scroll-plugin'
    const drag = new DragScroller({childBody, container, reverse}).bindEvent();
    // drag.removeEvent() removeEvent方法解除事件绑定

 for vue: 

	import { dragPluginVue } from 'drag-scroll-plugin' => main.js => Vue.use(dragPluginVue)
 
 
Quick instructions: 现支持两个vue组件库的快捷指令
当表格为element或iview的表格时v-drag后面不需要填写表达式

- element-ui
- view-design


exp: 

	<el-table 
	  v-drag
	...
	>
	  ...
	</el-table>


`通用配置: v-drag接受一个表达式，该表达式类型为对象，对象内必须有一个container属性和一个childBody属性`

exp: 

	<template>
	    <Table v-drag="dragEl" >
		</Table>
	</template>
	<script>
	    export default {
	        data () {
	            return {
	                dragEl: {
						container: '',
	                	childBody: ''
					}
	            }
	        }
	    }
	</script>

#### v-指令绑定值/DragScroller对象参数

| 属性名称 					| 说明 					| 备注 						|
| :----- | :------ | :------ |
| container |视口容器dom，当此dom宽度小于包裹的内容宽度时产生滚动条，可通过ref获取|必须属性|
| childBody |内容dom，可通过ref获取|必须属性|
| reverse |鼠标拖拽时内容滚动的方向|可选,默认为false|

*注意:  在vue中使用时container和childBody为挂载期结束后的dom，而不是vnode，建议通过ref的$el获取到*