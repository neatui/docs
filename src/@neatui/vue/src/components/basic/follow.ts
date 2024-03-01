import ResizeObserver from 'resize-observer-polyfill';

class Follow {
  box: any[];
  dom: any;
  tip: any;
  ing: any;
  sub: any;
  obs: any;
  fun: (status: any) => void;
  private css: () => void;
  z: number;
  constructor(dom: any, tip: any, fun = (_status: any) => {}) {
    this.dom = dom;
    this.tip = tip;
    this.box = [];
    this.css = this.setcss.bind(this);
    this.fun = fun;
    this.sub = this.tip.firstElementChild;
    this.z = 0;
  }
  setcss() {
    if (!this.ing) {
      window.requestAnimationFrame(() => {
        this.ing = false;
        const dr = this.dom?.getBoundingClientRect() || { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        const sr = this.sub?.getBoundingClientRect() || { height: 0 };
        this.tip.style.inset = `${dr.top}px auto auto ${dr.left}px`;
        this.tip.style.width = dr.width + 'px';
        this.tip.style.height = dr.height + 'px';
        this.fun('');
        this.box.forEach((e: any) => {
          const ar = e?.getBoundingClientRect() || {};
          if (dr.bottom < ar.top || dr.top > ar.bottom || dr.right < ar.left || dr.left > ar.right) {
            this.tip.style.opacity = '0';
            this.sub.style.pointerEvents = 'none';
          } else {
            this.tip.style.opacity = '';
            this.sub.style.pointerEvents = '';
          }
          if (dr.bottom + sr.height + 10 > ar.bottom) {
            this.fun('b');
          }
        });
        const tr = this.tip?.getBoundingClientRect() || { left: 0 };
        const x = this.sub.offsetLeft + tr.left;
        const arrow = this.sub.querySelector('[ui-tips-arrow]');
        if (x < 0) {
          this.sub.style.transform = `translate3d(${-x}px,0,0)`;
          if (arrow && arrow.style) {
            arrow.style.transform = `translateX(${x}px) rotate(45deg)`;
          }
        } else {
          this.sub.style.transform = '';
          if (arrow && arrow.style) {
            arrow.style.transform = '';
          }
        }
      });
      this.ing = true;
    }
  }
  listen() {
    // 向上查询有滚动条的元素
    const _find = (e: any) => {
      // 判断是否为DOM节点
      if (e && e.nodeType === 1) {
        const css: any = window.getComputedStyle(e);
        // 查询所有父组节点的最高层级
        if (!isNaN(css.zIndex) && css.zIndex >= this.z) {
          this.z = Number(css.zIndex) + 10;
        }
        // 节点是否有滚动条
        if (
          (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowX === 'auto' || css.overflowX === 'scroll') &&
          (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
        ) {
          this.box.push(e);
        }
        _find(e.parentNode);
      }
    };
    _find(this.dom);

    // 自动层级
    if (window.getComputedStyle(this.tip).zIndex) {
      this.tip.style.zIndex = `${this.z}`;
    }

    this.css();
    // 监听窗口尺寸变化
    window.addEventListener('resize', this.css);
    window.addEventListener('click', this.css);
    // 监听滚动条的元素
    this.box.forEach((e: any) => {
      e.addEventListener('scroll', this.css);
    });
    // 监听移入事件
    this.dom?.addEventListener('mouseenter', this.css);
    // 监听参考元素变化
    this.obs = new ResizeObserver(this.css);
    this.obs?.observe(this.dom);
  }
  remove() {
    // console.log('移除监听');
    // 清除窗口尺寸变化事件监听器
    window.removeEventListener('resize', this.css);
    window.removeEventListener('click', this.css);
    // 清除滚动条元素的事件监听器
    this.box.forEach((e: any) => {
      e.removeEventListener('scroll', this.css);
    });
    // 清除鼠标移入事件监听器
    this.dom?.removeEventListener('mouseenter', this.css);
    // 清除监听参考元素变化
    this.obs?.disconnect();
  }
}
export default Follow;
