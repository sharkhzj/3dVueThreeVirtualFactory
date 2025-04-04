 //3D虚拟工厂 QQ：3843687855
export default class DeviceSpriteDom {
  pointContainer: HTMLElement;
  constructor(color: string, name: string) {
    //创建一个容器
    this.pointContainer = document.createElement("div");
    this.pointContainer.style.width = "70px";
    this.pointContainer.style.zIndex = "999";
    this.pointContainer.id = "1111";

    // 创建一个文本盒子和图片盒子
    const labelBox = document.createElement("div");

    //设置文本盒子的样式
    labelBox.style.width = "70px";
    labelBox.style.height = "26px";
    labelBox.style.lineHeight = "26px";
    labelBox.style.color = color;
    labelBox.style.textAlign = "center";
    labelBox.innerText = name;
    // 盒子周围角样式
    labelBox.style.boxShadow = `0 0 2px ${color} inset`;
    labelBox.style.background = `linear-gradient(${color}, ${color}) left top,
      linear-gradient(${color}, ${color}) left top,
      linear-gradient(${color}, ${color}) right top,
      linear-gradient(${color}, ${color}) right top,
      linear-gradient(${color}, ${color}) left bottom,
      linear-gradient(${color}, ${color}) left bottom,
      linear-gradient(${color}, ${color}) right bottom,
      linear-gradient(${color}, ${color}) right bottom`;
    labelBox.style.backgroundRepeat = "no-repeat";
    labelBox.style.backgroundSize = "1px 6px, 6px 1px";
    labelBox.style.backgroundColor = "rgba(6, 23, 19, 0.5)";
    labelBox.style.fontSize = "12px";
    labelBox.style.overflow = "hidden";
    labelBox.style.textOverflow = "ellipsis";
    labelBox.style.whiteSpace = "nowrap";
 // 创建一个文本盒子和图片盒子
   const line = document.createElement("div");
     //设置文本盒子的样式
     line.style.width = "1px";
     line.style.height = "26px";
     line.style.marginLeft = "35px";
     line.style.lineHeight = "26px"; 
     line.style.backgroundColor = "rgba(6, 23, 19, 0.5)";
     

    this.pointContainer.appendChild(labelBox);
    this.pointContainer.appendChild(line);
  }
  getElement() {
    return this.pointContainer;
  }
}
