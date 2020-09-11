// v1.0 Adapt vue v-drag custom instruction, support the use of native JS new DragScroller()

/**
 * Class: DragScroller
 * @param1 {container, childBody} Object
 * @param2 vue bind dom  (needless,  e.g. : <i-table v-drag="param1"></i-table> // i-table is bind dom) Dom Object
 * 
 * native JS: import { DragScroller } from 'drag-scroll-plugin' => const drag = new DragScroller(@param1).bindEvent()
 * for vue: import { dragPluginVue } from 'drag-scroll-plugin' => main.js => Vue.use(dragPluginVue)
 */

export class DragScroller {
    constructor($el, uiDom) {
        this.container = '';
        this.childBody = '';
        this.uiDom = uiDom;
        this.downX = 0;
        this.moveX = 0;
        this.disX = 0;
        this.isMouse = false;
        this.scrollNow = 0;
        this.downFun = (e) => this.handleDownFun(e);
        this.dragFun = (e) => this.handleDragFun(e);
        this.scrollFun = (e) => this.handleScrollFun(e);
        this.moveFun = (e) => this.handleMoveFun(e);
        this.upFun = (e) => this.handleUpFun(e);
        this.domInit($el);
        this.reverse = $el && $el.hasOwnProperty('reverse') ? $el.reverse : false;
        this.offsetLt = this.getAbsoluteLeft(this.container);
    };

    domInit(el) {
        try {
            if (el && el.hasOwnProperty('container') && el.hasOwnProperty('childBody')) {
                this.container = el.container;
                this.childBody = el.childBody;
            } else if (~this.uiDom.className.indexOf('ivu-table')) {
                this.container = this.uiDom.children[0].children[1];
                this.childBody = this.uiDom.children[0].children[1].children[0];
            } else if (~this.uiDom.className.indexOf('el-table')) {
                this.container = this.uiDom.children[2];
                this.childBody = this.uiDom.children[2].children[0];
            } else {
                throw new Error('请传入包含container和childBody的对象');
            }
        } catch (error) {
            console.error(error);
        }
    };

    getAbsoluteLeft(ele) {
        let rtn = ele.offsetLeft;
        let o = ele.offsetParent;
        while (o !== null) {
            rtn += o.offsetLeft;
            o = o.offsetParent;
        }
        return rtn;
    };

    handleDragFun(e) {
        e.preventDefault();
    };

    handleScrollFun(e) {
        if (!this.isMouse) {
            this.scrollNow = this.container.scrollLeft;
        }
    };

    handleDownFun(ed) {
        this.container.scrollLeft = this.scrollNow;
        this.isMouse = true;
        ed.stopPropagation();
        this.downX = ed.pageX - this.offsetLt; // down时的相对坐标
        this.childBody.addEventListener('mousemove', this.moveFun);
        this.childBody.addEventListener('dragstart', this.dragFun);
        document.addEventListener('mouseup', this.upFun);
    };

    handleMoveFun(ev) {
        ev.stopPropagation();
        this.moveX = ev.pageX - this.offsetLt; // move时的相对坐标
        this.disX = this.moveX - this.downX;
        this.container.scrollLeft = this.reverse ? this.scrollNow + this.disX : this.scrollNow - this.disX;
    };

    handleUpFun(eu) {
        this.scrollNow = this.container.scrollLeft; // 记录up时的scrollLeft位置
        this.isMouse = false;
        this.childBody.removeEventListener('mousemove', this.moveFun);
        this.childBody.removeEventListener('dragstart', this.dragFun);
        document.removeEventListener('mouseup', this.upFun);
    };

    bindEvent() {
        this.childBody.addEventListener('mousedown', this.downFun);
        this.container.addEventListener('scroll', this.scrollFun);
    }

    removeEvent() {
        this.childBody.removeEventListener('mousedown', this.downFun);
        this.container.removeEventListener('scroll', this.scrollFun);
    }
}

export const dragPluginVue = {
    install: function(Vue) {
        Vue.directive('drag', {
            inserted($el, binding) {
                new DragScroller(binding.value, $el).bindEvent();
            }
        });
    }
};

