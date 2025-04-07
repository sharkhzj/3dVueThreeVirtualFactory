<!-- 3D虚拟工厂 QQ：3843687855 网址：http://www.zjzqrj.cn  -->
<template>
  <!-- 进度条 -->
  <div ref="refProgressBar" class="progressBar">
    <el-progress :text-inside="true" :stroke-width="22" :percentage="percentNum" status="success"></el-progress>
  </div>
  <!-- 顶条 -->
  <div class="topTitleBar">
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="8" style="margin-top: 8px;">
        {{ headTitle }}
      </el-col>
      <el-col :span="3" style="margin-bottom:10px;">
        <img src="./assets/three/bbgl.png" width="14"><a ref="linkImg" target="_blank" @click="downImg"
          style="font-size: 12px;cursor: pointer;"> {{ headLink1 }} </a>
      </el-col>
      <el-col :span="3">
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 左栏 -->
  <div class="leftSideBar" ref="refLeft" style="display:none;">
    <div class="section-one">
      <img class="img-header" src="./assets/three/cnqk.png" alt="" />
      <div class="tip-content" style="width: 238px;">
        <ul>
          <li><span class="tip-name">GSBSS-1<span class="typeStyle">（件）</span></span><span class="tip-num">653212</span>
          </li>
          <li><span class="tip-name">GSBSS-7<span class="typeStyle">（件）</span></span><span class="tip-num">4321</span>
          </li>
          <li><span class="tip-name">GSBSS-1<span class="typeStyle">（件）</span></span><span class="tip-num">4213</span>
          </li>
          <li><span class="tip-name">GSBSS-A<span class="typeStyle">（套）</span></span><span class="tip-num">108</span>
          </li>
          <li><span class="tip-name">GSBSS-D<span class="typeStyle">（套）</span></span><span class="tip-num">82</span>
          </li>
          <li><span class="tip-name">GSBSS-H<span class="typeStyle">（套）</span></span><span class="tip-num">97</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-two">
      <img class="img-header" src="./assets/three/hnqk.png" alt="" />
      <div class="icons-content">
        <div class="item">
          <div class="icons-item building-icon">
            <span class="number">
              {{ pointInfo.M_Voltage }}
            </span>
          </div>
          <span class="title">用电量</span>
          <span class="unity">（度）</span>
        </div>
        <div class="item">
          <div class="icons-item car-icon">
            <span class="number">
              {{ pointInfo.M_Electric }}
            </span>
          </div>
          <span class="title">用水量</span>
          <span class="unity">（吨）</span>
        </div>
        <div class="item">
          <div class="icons-item rod-icon">
            <span class="number">
              {{ pointInfo.M_RelativeHumidity }}
            </span>
          </div>
          <span class="title">蒸汽量</span>
          <span class="unity">（升）</span>
        </div>
      </div>
    </div>
    <div class="section-three">
      <img class="img-header" src="./assets/three/xsqk.png" alt="" />
      <div class="rec-content">
        <div class="recetit">
          <strong>2350套</strong>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <p>GBSS-T1</p>
        </div>
        <div class="recetit">
          <strong>3321套</strong>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <p>GBSS-K1</p>
        </div>
        <div class="recetit">
          <strong>4321套</strong>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <span class="changecolor"></span>
          <p>GBSS-D1</p>
        </div>
      </div>
    </div>
    <div class="section-four">
      <div class="img-content"></div>
    </div>
  </div>
  <!-- 数据大屏 -->
  <div class="bigScreenBox" ref="refBigScreenBox" style="display:none;" @click="LookBigScreenClick">
    <div class="title1">企业数据监测大屏</div>
    <div class="content1">
      <div class="row1">
        <div class="col1">用电：{{ pointInfo.M_Voltage }}度</div>
        <div class="col1">用水：{{ pointInfo.M_Electric }}吨</div>
      </div>
      <div class="row1">
        <div class="col1">用气：{{ pointInfo.M_RelativeHumidity }}</div>
        <div class="col1">进度：{{ pointInfo.M_WindDirection }}</div>
      </div>
      <div class="row1">
        <div class="col1">工时：{{ pointInfo.M_Fluoride }}</div>
        <div class="col1">人数：{{ pointInfo.M_AQI }}</div>
      </div>
      <div class="row1">
        <div class="col1">温度：{{ pointInfo.M_Temperature }}</div>
        <div class="col1">湿度：{{ pointInfo.M_PrimaryItem }}</div>
      </div>
      <div class="row1">
        <div class="col1">说明：{{ pointInfo.M_NowStamp }}</div>

      </div>
    </div>
  </div>

  <!-- 底部按钮 -->
  <div class="bottomBar">
    <div class="main">
      <li class="tools-li" @click="FullScreenClick">
        <p class="tools-name" ref="refFullScreen">全屏</p>
      </li>
      <li class="tools-li" @click="ResetSceneClick">
        <p class="tools-name">重置镜头</p>
      </li>
      <li class="tools-li" @click="ShowLeftClick">
        <p class="tools-name" ref="refAbout">企业概况</p>
      </li>
      <li class="tools-li" @click="HiddenLabelClick">
        <p class="tools-name" ref="refLabel">隐藏标签</p>
      </li>
      <li class="tools-li" @click="AutoRotateClick">
        <p class="tools-name" :style="{ color: isAutoRotate ? '#f4e925' : '' }">{{ !isAutoRotate ? '自动旋转' :
          '停止旋转' }}</p>
      </li>
      <li class="tools-li">
        <el-dropdown @command="dropCommand" trigger="click">
          <p class="tools-name" ref="refOffice">办公楼</p>
          <template #dropdown>
            <el-dropdown-menu class="dropDown">
              <el-dropdown-item :command="i" v-for="(item, i) in officeList" :key="i">{{ item.name
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
      <li class="tools-li" @click="EveningView">
        <p class="tools-name" :style="{ color: isEveningFlag ? '#f4e925' : '' }">{{ !isEveningFlag ? '晚上' :
          '白天' }}</p>
      </li>
      <li class="tools-li" @click="RainClick">
        <p class="tools-name" :style="{ color: isRainFlag ? '#f4e925' : '' }">{{ !isRainFlag ? '雨天' : '晴天'
        }}</p>
      </li>
      <li class="tools-li" @click="UavVisitClick">
        <p class="tools-name" :style="{ color: isUavVisitFlag ? '#f4e925' : '' }">{{ !isUavVisitFlag ? '无人机' :
          '停止' }}</p>
      </li>
      <li class="tools-li" @click="VisitClick">
        <p class="tools-name" :style="{ color: isVisitFlag ? '#f4e925' : '' }">{{ !isVisitFlag ? '行人' : '停止' }}
        </p>
      </li> 
    </div>
  </div>
  <!-- 3d画板 -->
  <div ref="webg1" style="overflow: hidden;"></div>
</template>
<script setup lang="ts">
//3D虚拟工厂 QQ：3843687855 网址：http://www.zjzqrj.cn
// 系统级
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue' //vue系统
import * as THREE from 'three' //three.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //摄像机控制
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';// 引入gltf模型加载库GLTFLoader.js
import TWEEN from '@tweenjs/tween.js';  //动画
// import Stats from 'three/addons/libs/stats.module.js';//引入性能监视器stats.js
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';// 引入CSS2渲染器CSS2DRenderer和CSS2模型对象CSS2DObject 
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';// 引入CSS3渲染器CSS3DRenderer
// 自定义 
import rainDrop from "@/assets/three/yd.png" //雨滴图片 
import { createLabel } from './utils/SpriteThree'; //标签
import DeviceSpriteDom from "./utils/device"; //标签
import mqtt from "paho-mqtt" //mqtt

//定义变量
const { proxy } = getCurrentInstance();//系统级获取refs
const percentNum = ref("0"); //进度条百分比值 ref("0")
const headTitle = ref('数字孪生技术------3D虚拟工厂全景图');
const headLink1 = ref('屏幕截图')
const isAutoRotate = ref(false);//是否旋转 
const isRainFlag = ref(false);//是否下雨
const isEveningFlag = ref(false);//是否夜晚模式
const isVisitFlag = ref(false)//行人参观模式
const isUavVisitFlag = ref(false)//无人机参观模式

// mqtt组件
const client = ref(null); //mqttClient
const connected = ref(false);//mqtt连接
const disreconnect = ref(true);//mqtt断开
const pointInfo = ref({ //mqtt接受数据
  M_Voltage: 0,
  M_Electric: 0,
  M_Temperature: 0,
  M_RelativeHumidity: 0,
  M_WindDirection: 0,
  M_Fluoride: 0,
  M_AQI: 0,
  M_PrimaryItem: '',
  M_NowStamp: 0,
})
// 办公楼参观列表
const officeList = [
  {
    name: "办公楼",
    position: { x: 150, y: 70, z: 100 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公六楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公五楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公四楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公三楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公二楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
  {
    name: "办公一楼",
    position: { x: 0, y: 70, z: -30 },
    lookAt: { x: 150, y: 15, z: -55 },
  },
];
// 标签数组
const labelList = [
  {
    color: "#eef0a7",
    name: "办公楼标签",
    value: "办公楼",
    position: { x: 150, y: 25.5, z: -75 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间1标签",
    value: "注塑车间",
    position: { x: 150, y: 16.45, z: -240 },
    scale: 1,
  },

  {
    color: "#eef0a7",
    name: "车间2标签",
    value: "标件仓库",
    position: { x: 227, y: 16.45, z: -240 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间3标签",
    value: "原料仓库",
    position: { x: 327, y: 16.45, z: -240 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间4标签",
    value: "铣削车间",
    position: { x: 150, y: 16.45, z: -185 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间5标签",
    value: "锻压车间",
    position: { x: 150, y: 16.45, z: -135 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间6标签",
    value: "数控车间",
    position: { x: 327, y: 16.45, z: -160 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间7标签",
    value: "装配车间",
    position: { x: 267, y: 16.45, z: -72 },
    scale: 1,
  },
  {
    color: "#eef0a7",
    name: "车间8标签",
    value: "检验车间",
    position: { x: 347, y: 16.45, z: -72 },
    scale: 1,
  },
];
//先建场景
const scene = new THREE.Scene();
//天空盒
scene.background = new THREE.CubeTextureLoader()
  .setPath('sky/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']
  );
// 创建雨滴
const textureRain = new THREE.TextureLoader().load(rainDrop);
const spriteMaterial = new THREE.SpriteMaterial({ //材质对象SpriteMaterial
  map: textureRain, //设置精灵纹理贴图

  transparent: true,//SpriteMaterial默认是true
});
const groupRain = new THREE.Group(); //创建雨滴组
groupRain.name = '下雨';
for (let i = 0; i < 1000; i++) {
  const sprite = new THREE.Sprite(spriteMaterial);// 雨滴模型共享材质
  groupRain.add(sprite);
  sprite.scale.set(1, 1, 1);
  const x = 500 * Math.random(); // 设置雨滴模型位置，在长方体空间上上随机分布
  const y = 300 * Math.random();
  const z = -300 * Math.random();
  sprite.position.set(x, y, z)
}
groupRain.visible = false
scene.add(groupRain)
//刷新率监视器
// const stats = new Stats();
// stats.setMode(0);
//加载外部glb建模
const loader = new GLTFLoader();
loader.load('glf/factory.glb', function (gltf) {
  scene.add(gltf.scene); // 返回的场景对象gltf.scene插入到threejs场景中  
  console.log('scene', scene);

  (proxy.$refs.refProgressBar as HTMLElement).style.display = "none"
  AddLabels(); //加载标签 
  connectMQTT(); //初始化mqtt
  AddBigScreen(); //加载大屏
}, function (xhr) {
  percentNum.value = ((xhr.loaded / xhr.total) * 100 * 1).toFixed(2);  //进度条
}, undefined, function (error) {
  console.error('error', error);//加载出错打印
})

// 添加一个辅助网格地面
const gridHelper = new THREE.GridHelper(10, 10, 0x004444, 0x004444);
//scene.add(gridHelper)

//建辅助线-XYZ
const axesHelper = new THREE.AxesHelper(150)
// scene.add(axesHelper)

//环境光
const ambientLight = new THREE.AmbientLight(0x666666, 20); // 柔和的白光
scene.add(ambientLight);

//点光源
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.intensity = 1;//光照强度
pointLight.decay = 0.0;//设置光源不随距离衰减 
pointLight.position.set(0, 100, 0);//点光源位置
scene.add(pointLight); //点光源添加到场景中 
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);//光源辅助观察
//scene.add(pointLightHelper);

// 平行光
const target = new THREE.Object3D(); // 创建一个目标对象
target.position.set(177, 0, -60);
const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight1.position.set(177, 5, -60);
dirLight1.target = target;
scene.add(dirLight1);
const dirLightHelper1 = new THREE.DirectionalLightHelper(dirLight1, 5, 0x00ff00);//辅助平行光
//scene.add(dirLightHelper1);

//建相机
const width = window.innerWidth; //全局屏幕宽
const height = window.innerHeight; //全局屏幕高
const defaultCameraPosition = new THREE.Vector3(70, 60, 120) //初始相机位置
const defaultLookAt = new THREE.Vector3(227, 0, -160)  //初始相机看的位置
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 2000)// 实例化一个透视投影相机对象// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面 
camera.position.copy(defaultCameraPosition)
camera.lookAt(defaultLookAt)

//渲染
const renderer = new THREE.WebGLRenderer({
  logarithmicDepthBuffer: true,//设置对数深度缓冲区，优化深度冲突问题
  preserveDrawingBuffer: true,//把canvas画布上内容下载到本地,保存图片 
  antialias: true, // 正确开启抗锯齿
  stencil: true,//开启模版缓存区,用于高级渲染技术，如阴影体积、遮挡剔除等
  powerPreference: 'high-performance',//指定渲染器使用的 GPU 功率模式。默认 "default"
  physicalCorrectLights: true,//是否使用物理上正确的照明模式；默认为 false
  localClippingEnabled: true,//启用局部裁剪；默认为 false 
  alpha: true,//背景透明
})
// 创建一个CSS2渲染器CSS2DRenderer
const css2Renderer = new CSS2DRenderer();
css2Renderer.setSize(width, height);// width, height：canvas画布宽高度
// 创建一个CSS3渲染器CSS3DRenderer
const css3Renderer = new CSS3DRenderer();
css3Renderer.setSize(width, height);

renderer.setPixelRatio(window.devicePixelRatio);//设置渲染器（renderer）的像素比，使其与设备的像素比（通过 window.devicePixelRatio 获取）相匹配
renderer.setSize(width, height)
renderer.render(scene, camera)
renderer.outputEncoding = THREE.sRGBEncoding;//解决加载gltf格式模型纹理贴图和原图不一样问题
let uavSum = 0 //无人机参观计数，原理同下
let visitSum = 0 //行人参观计数，比如曲线上5000个点，从第一个点到最后一个点，每次加1，直到曲线跑完
//渲染函数，正常是60FPS，也就是0.0167秒执行一次。实际情况，根据显卡性能和执行函数耗时不同，执行一次的时间也不同，执行时间长会卡，执行时间短流畅，可通过stats辅助函数观察
const render = (() => {
  
  //开启旋转，相机控制器旋转
  if (isAutoRotate.value) {
    controls.autoRotate = true
    controls.update();
  }
  //如果下雨
  if (isRainFlag.value) {
    groupRain.children.forEach(sprite => {
      sprite.position.y -= 1;// 雨滴的y坐标每次减1
      if (sprite.position.y < 0) {
        // 如果雨滴落到地面，重置y，从新下落
        sprite.position.y = 300;
      }
    });
  }
  // 相机位置不得低于地面
  if (camera.position.y < 1) {
    camera.position.y = 1; // 确保相机在地面之上
  }
  //如果无人机参观
  if (isUavVisitFlag.value) {
    if (uavSum < pointsUav.length - 1) {
      camera.position.copy(pointsUav[uavSum]); // 相机位置设置在当前点位置 
      camera.lookAt(defaultLookAt);
      uavSum += 1; //调节速度
    } else {
      uavSum = 0
      //isUavVisitFlag.value=false //只执行一次
    }
  }
  //如果行人参观
  if (isVisitFlag.value) {
    if (visitSum < pointsVisit.length - 1) {
      camera.position.copy(pointsVisit[visitSum]);   // 相机位置设置在当前点位置  
      camera.lookAt(pointsVisit[visitSum + 1]);  // pointsVisit[i]和下一个点pointsVisit[i+1]近似模拟当前点曲线切线  // 设置相机观察点为当前点的下一个点，相机视线和当前点曲线切线重合
      visitSum += 1; //调节速度
    } else {
      visitSum = 0
    }
  }
 
  // stats.update();//更新刷新率
  css2Renderer.render(scene, camera); //css2 css3 实时刷新
  css3Renderer.render(scene, camera);
  renderer.render(scene, camera);
  requestAnimationFrame(render);//用于在浏览器的下一帧重绘之前调用render函数，实现平滑动画效果
  TWEEN.update();//tween更新
})
//相机控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.target.copy(defaultLookAt); //与lookAt参数保持一致
controls.update();//update()函数内会执行camera.lookAt(controls.target)
//组件挂载后立即执行，执行顺序大致为：setup -> onBeforeMount -> onMounted -> onBeforeUpdate -> onUpdated -> onBeforeUnmount -> onUnmounted
onMounted(() => {
  updateHeadTitle()//根据屏幕宽度调整文字
  //绑定css2Renderer
  document.body.appendChild(css2Renderer.domElement);
  css2Renderer.domElement.style.position = 'absolute';
  css2Renderer.domElement.style.top = '0px';
  css2Renderer.domElement.style.pointerEvents = 'none';
  renderer.domElement.style.zIndex = -1;//threejs canvas画布在下
  css2Renderer.domElement.style.zIndex = 1;
  css2Renderer.render(scene, camera);
  //绑定css3Renderer
  document.body.appendChild(css3Renderer.domElement);
  css3Renderer.domElement.style.position = 'absolute';
  css3Renderer.domElement.style.top = '0px';
  css3Renderer.domElement.style.pointerEvents = 'none';
  renderer.domElement.style.zIndex = -1;//threejs canvas画布在下
  css3Renderer.domElement.style.zIndex = 1;
  css3Renderer.render(scene, camera);
  //proxy.$refs.webg1.appendChild(renderer.domElement);//绑定画布到界面上 
  (proxy.$refs.webg1 as HTMLElement).appendChild(renderer.domElement);//绑定画布到界面上 
  // proxy.$refs.webg1.appendChild(stats.domElement);//绑定性能监视器
  render();//开启渲染函数，函数通过requestAnimationFrame(render)实现自我循环
  
})
//系统级-平面放大缩小
window.onresize = function () {
  css2Renderer.setSize(window.innerWidth, window.innerHeight);
  css3Renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix();// 2.2.相机的left, right, top, bottom属性变化了，通知threejs系统 
  updateHeadTitle()//根据屏幕宽度调整文字
}
//页面退出前执行函数
onBeforeUnmount(() => {
  DelLabels()//删除标签及大屏
  DelBigScreen()//卸载大屏
  window.removeEventListener("resize", window.onresize);//注销window.onresize响应 
  client.value?.disconnect()//关闭mqtt
})
//点击-屏幕截图 
const downImg = () => {
  const canvas = renderer.domElement; //获取canvas对象
  //proxy.$refs.linkImg.href = canvas.toDataURL("image/png");
  (proxy.$refs.linkImg as HTMLAnchorElement).href = canvas.toDataURL("image/png");
}
//点击-全屏
function FullScreenClick() {
  //var htmlContent = proxy.$refs.refFullScreen.innerHTML;
  var htmlContent = (proxy.$refs.refFullScreen as HTMLElement).innerHTML;
  if (!document.fullscreenElement) {
    // 进入全屏
    //proxy.$refs.refFullScreen.innerHTML = '退出全屏'
    (proxy.$refs.refFullScreen as HTMLElement).innerHTML = '退出全屏'
    document.documentElement.requestFullscreen();
  } else {
    // 退出全屏
    //proxy.$refs.refFullScreen.innerHTML = '全屏'
    (proxy.$refs.refFullScreen as HTMLElement).innerHTML = '全屏'
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
//相机初始化归位
function CameraDefault() {
  camera.position.copy(defaultCameraPosition);
  camera.lookAt(defaultLookAt)
  controls.target.copy(defaultLookAt)
  controls.update()
}
//点击-重置镜头
function ResetSceneClick() {
  CameraDefault()
}
//点击-自动旋转
function AutoRotateClick() {
  controls.autoRotateSpeed = 1.0;
  isAutoRotate.value = !isAutoRotate.value;
}
//点击-晚上
function EveningView() {
  isEveningFlag.value = !isEveningFlag.value
  if (isEveningFlag.value) {//晚上
    scene.background = new THREE.CubeTextureLoader()
      .setPath('evening/')
      .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']
      );
    //灯光设置，晚上暗点
    ambientLight.intensity = 15
    pointLight.intensity = 0.8
    dirLight1.intensity = 1
  } else {
    scene.background = new THREE.CubeTextureLoader()
      .setPath('sky/')
      .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']
      );
    ambientLight.intensity = 20
    pointLight.intensity = 1
    dirLight1.intensity = 1.5
  }
}
//点击-下雨
function RainClick() {
  isRainFlag.value = !isRainFlag.value
  if (isRainFlag.value) { //雨天    
    groupRain.visible = true
  } else {
    groupRain.visible = false
  }
}
//----------通用函数----------------
// 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态// pos: 三维向量Vector3，表示动画结束相机位置// target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点 
function createCameraTween(endPos, endTarget) {
  new TWEEN.Tween({
    // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    tx: controls.target.x,
    ty: controls.target.y,
    tz: controls.target.z,
  })
    .to({
      // 动画结束相机位置坐标
      x: endPos.x,
      y: endPos.y,
      z: endPos.z,
      // 动画结束相机指向的目标观察点
      tx: endTarget.x,
      ty: endTarget.y,
      tz: endTarget.z,
    }, 2000)
    .onUpdate(function (obj) {
      // 动态改变相机位置
      camera.position.set(obj.x, obj.y, obj.z);
      // 动态计算相机视线
      camera.lookAt(obj.tx, obj.ty, obj.tz);
      controls.target.set(obj.tx, obj.ty, obj.tz);
      controls.update();//内部会执行.lookAt()
    })
    .start();
}
function moveObjTween(startPos, endPos, timeSpan) {
  new TWEEN.Tween(startPos)
    .to(endPos, timeSpan) // 2秒时间移动到目标位置 
    .easing(TWEEN.Easing.Linear.None)
    .start();
}
//办公楼切换楼层
const currentLevel = ref(0); //当前显示楼层
const dropCommand = (level) => {
  const levelModel = officeList[level];
  //proxy.$refs.refOffice.innerHTML = levelModel.name
  (proxy.$refs.refOffice as HTMLElement).innerHTML = levelModel.name
  let pos1 = new THREE.Vector3();//相机位置
  let pos2 = new THREE.Vector3();//看向物体位置   
  pos1.copy(levelModel.position)
  pos2.copy(levelModel.lookAt)
  createCameraTween(pos1, pos2)
  if (level == 0) {
    if (currentLevel.value > 0) { //如果上一次显示楼层，这次点击[办公楼]
      ShowOfficeLevel(false, 0)
    }
    // proxy.$refs.refOffice.style.color = ''
    (proxy.$refs.refOffice as HTMLElement).style.color = ''
  } else {
    //proxy.$refs.refOffice.style.color = '#f4e925'
    (proxy.$refs.refOffice as HTMLElement).style.color = '#f4e925'
    ShowOfficeLevel(true, level)
  }
}
//辅助函数-办公楼切换，isShow是否显示内部楼层，level楼层
function ShowOfficeLevel(isShow, level) {
  //房屋分解---标签----
  const tempScene = scene.children.find(t => t.name == 'Scene')
  const tempOffice = tempScene.children.find(t => t.name == '办公楼')
  const tempOfficeLabel_grp = tempOffice.children.find(t => t.name == '办公楼标签_grp')
  const tempOfficeLabel1 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼1层标签')
  const tempOfficeLabel2 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼2层标签')
  const tempOfficeLabel3 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼3层标签')
  const tempOfficeLabel4 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼4层标签')
  const tempOfficeLabel5 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼5层标签')
  const tempOfficeLabel6 = tempOfficeLabel_grp.children.find(t => t.name == '办公楼6层标签')
  //-------楼面
  const tempOfficeRight = tempOffice.children.find(t => t.name == '办公楼右边')
  const tempOfficeGround1 = tempOfficeRight.children.find(t => t.name == '办公楼地面1')
  const tempOfficeGround2 = tempOfficeRight.children.find(t => t.name == '办公楼地面2')
  const tempOfficeGround3 = tempOfficeRight.children.find(t => t.name == '办公楼地面3')
  const tempOfficeGround4 = tempOfficeRight.children.find(t => t.name == '办公楼地面4')
  const tempOfficeGround5 = tempOfficeRight.children.find(t => t.name == '办公楼地面5')
  const tempOfficeGround6 = tempOfficeRight.children.find(t => t.name == '办公楼地面6')
 
  //------------南墙
  const tempOfficeSouth_grp = tempOfficeRight.children.find(t => t.name == '办公楼南墙_grp')
 
  //先清除上一次楼板移动
  if (currentLevel.value > 0) {

    switch (currentLevel.value) {
      case 6:
        tempOfficeGround1.translateZ(-20)     
        tempOfficeLabel1.translateZ(-20)
        break;
      case 5:
        tempOfficeGround2.translateZ(-20)  
        tempOfficeLabel2.translateZ(-20)
        break;
      case 4:
        tempOfficeGround3.translateZ(-20) 
        tempOfficeLabel3.translateZ(-20)
        break;
      case 3:
        tempOfficeGround4.translateZ(-20)  
        tempOfficeLabel4.translateZ(-20)
        break;
      case 2:
        tempOfficeGround5.translateZ(-20) 
        tempOfficeLabel5.translateZ(-20)
        break;
      case 1:
        tempOfficeGround6.translateZ(-20)   
        tempOfficeLabel6.translateZ(-20)
        break;
    }
  }
  if (isShow) { //如果显示楼层
    if (currentLevel.value == 0) {  //第一次点击楼层，右边和左边南墙弹出、右边和左边楼面显示、标签显示
      tempOfficeSouth_grp.translateZ(30)
    
      tempOfficeGround2.visible = true;
      tempOfficeGround3.visible = true;
      tempOfficeGround4.visible = true;
      tempOfficeGround5.visible = true;
      tempOfficeGround6.visible = true;    
      tempOfficeLabel_grp.visible = true;
    }
    switch (level) { //标签动画弹出、右边和左边楼面弹出，当期楼层记为level
      case 6:
        moveObjTween(tempOfficeLabel1.position, { x: tempOfficeLabel1.position.x, y: tempOfficeLabel1.position.y, z: (tempOfficeLabel1.position.z + 20) }, 1500)
        tempOfficeGround1.translateZ(20)     
        currentLevel.value = 6
        break;
      case 5:
        moveObjTween(tempOfficeLabel2.position, { x: tempOfficeLabel2.position.x, y: tempOfficeLabel2.position.y, z: (tempOfficeLabel2.position.z + 20) }, 1500)
        tempOfficeGround2.translateZ(20)       
        currentLevel.value = 5
        break;
      case 4:
        moveObjTween(tempOfficeLabel3.position, { x: tempOfficeLabel3.position.x, y: tempOfficeLabel3.position.y, z: (tempOfficeLabel3.position.z + 20) }, 1500)
        tempOfficeGround3.translateZ(20)      
        currentLevel.value = 4
        break;
      case 3:
        moveObjTween(tempOfficeLabel4.position, { x: tempOfficeLabel4.position.x, y: tempOfficeLabel4.position.y, z: (tempOfficeLabel4.position.z + 20) }, 1500)
        tempOfficeGround4.translateZ(20)       
        currentLevel.value = 3
        break;
      case 2:
        moveObjTween(tempOfficeLabel5.position, { x: tempOfficeLabel5.position.x, y: tempOfficeLabel5.position.y, z: (tempOfficeLabel5.position.z + 20) }, 1500)
        tempOfficeGround5.translateZ(20)      
        currentLevel.value = 2
        break;
      case 1:
        moveObjTween(tempOfficeLabel6.position, { x: tempOfficeLabel6.position.x, y: tempOfficeLabel6.position.y, z: (tempOfficeLabel6.position.z + 20) }, 1500)
        tempOfficeGround6.translateZ(20)      
        currentLevel.value = 1
        break;
    }

  } else { //如果不显示楼层，当前楼层为0，标签不显示，左边和右边的南墙退回，左边和右边的楼面不显示
    currentLevel.value = 0;
    tempOfficeLabel_grp.visible = false;
    tempOfficeSouth_grp.translateZ(-30)   
    tempOfficeGround2.visible = false;
    tempOfficeGround3.visible = false;
    tempOfficeGround4.visible = false;
    tempOfficeGround5.visible = false;
    tempOfficeGround6.visible = false; 
  }
}
//点击-隐藏标签及大屏
function HiddenLabelClick() {
  //var htmlContent = proxy.$refs.refLabel.innerHTML;
  var htmlContent = (proxy.$refs.refLabel as HTMLElement).innerHTML;
  if (htmlContent == '隐藏标签') {
    DelLabels()
    DelBigScreen();
    //proxy.$refs.refLabel.innerHTML = '显示标签'
    (proxy.$refs.refLabel as HTMLElement).innerHTML = '显示标签'
  } else {
    AddLabels()
    AddBigScreen();
    //proxy.$refs.refLabel.innerHTML = '隐藏标签'
    (proxy.$refs.refLabel as HTMLElement).innerHTML = '隐藏标签'
  }
}
//加载标签
const AddLabels = () => {
  labelList.forEach((label) => {
    const box = createLabel({
      name: label.name,
      type: "CSS2DObject",
      element: new DeviceSpriteDom(label.color, label.value).getElement(),
    });
    box.scale.set(label.scale, label.scale, label.scale);
    box.position.set(label.position.x, label.position.y, label.position.z);
    scene.add(box);
  });
};
//卸载标签
const DelLabels = () => {
  labelList.forEach((label) => {
    const tempLabel = scene.children.find(t => t.name == label.name)
    if (tempLabel != null && tempLabel != 'undefined') {
      scene.remove(tempLabel)
    }
  })

}
//点击-左栏显示
function ShowLeftClick() {
  //if (proxy.$refs.refLeft.style.display == 'none') {
  if ((proxy.$refs.refLeft as HTMLElement).style.display == 'none') {
    //proxy.$refs.refLeft.style.display = '';
    (proxy.$refs.refLeft as HTMLElement).style.display = '';
    // proxy.$refs.refAbout.innerHTML = '关闭左侧'
    (proxy.$refs.refAbout as HTMLElement).innerHTML = '关闭左侧';
  } else {
    //proxy.$refs.refLeft.style.display = 'none'
    (proxy.$refs.refLeft as HTMLElement).style.display = 'none';
    //proxy.$refs.refAbout.innerHTML = '企业概况'
    (proxy.$refs.refAbout as HTMLElement).innerHTML = '企业概况';
  }
}
//开启mqtt
const connectMQTT = () => {
  client.value = new mqtt.Client("101.37.70.145", 9001, '/mqtt', 'werwrwe-sdfsdfsdfg-ewrwer');
  client.value.connect({
    userName: "admin",
    password: "123456",
    //useSSL: true,
    timeout: 5000,
    keepAliveInterval: 20,
    cleanSession: false,
    reconnect: true,
    onSuccess: function () {
      connected.value = true;
      client.value.subscribe('/zjxm/ylkz');
      console.log('Mqtt已订阅/zjxm/ylkz')
    },
    onFailure: function () {
      console.log('Mqtt连接失败')
      connected.value = false;
      disreconnect.value = false;
    }
  });
  client.value.onMessageArrived = function (message) {
    pointInfo.value = JSON.parse(message.payloadString)
  };
  client.value.onConnectionLost = function (responseObject) {
    if (responseObject.errorCode !== 0) {
      connected.value = false;
      disreconnect.value = false;
      console.log('Mqtt连接已断开', responseObject.errorMessage)
    }
  }
}
//点击查看大屏
function LookBigScreenClick() {
  let pos1 = new THREE.Vector3();//相机位置
  let pos2 = new THREE.Vector3();//物体位置  
  const bigScreen = scene.children.find(t => t.name == '大屏')
  bigScreen.getWorldPosition(pos2);
  pos1 = pos2.clone(); // 相机飞行到的位置和观察目标拉开一定的距离
  pos1.z = pos1.z + 60
  pos1.y = 10
  createCameraTween(pos1, pos2)
}
//加载大屏
const AddBigScreen = () => {
  const bigScreen = (proxy.$refs.refBigScreenBox as HTMLElement);
  bigScreen.style.display = ''
  const bigScreenObj = new CSS3DObject(bigScreen);// HTML元素转化为threejs的CSS2模型对象  
  bigScreenObj.name = '大屏'
  bigScreenObj.scale.set(0.02, 0.02, 0.02);//缩放标签尺寸 
  //bigScreenObj.rotation.y = -Math.PI / 2; //旋转
  bigScreenObj.position.set(227, 20, -160)
  scene.add(bigScreenObj);
}
//卸载大屏
const DelBigScreen = () => {
  const delBigScreen = scene.children.find(t => t.name == '大屏')
  if (delBigScreen != null && delBigScreen != 'undefined') {
    scene.remove(delBigScreen)
  }
}
let pointsUav = null;
//定义曲线，无人机参观模式路径
const curve1 = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 60, 0),
  new THREE.Vector3(0, 60, 0),
  new THREE.Vector3(0, 60, 0),
  new THREE.Vector3(0, 60, 0),
  new THREE.Vector3(0, 60, 0),
  new THREE.Vector3(227, 60, -160),
  new THREE.Vector3(250, 60, 120),
  new THREE.Vector3(0, 60, 0),
], false, 'catmullrom', 1);
//辅助查看曲线路径
function ShowCurve(tempShape) {
  const delMesh = scene.children.find(t => t.name == '辅助曲线')
  if (delMesh != null && delMesh != 'undefined') {
    scene.remove(delMesh)
  }

  const shape = new THREE.Shape();//曲线高为0.1米的长条
  shape.moveTo(0, 0);
  shape.lineTo(0.1, 0);
  const geometry = new THREE.ExtrudeGeometry(
    shape, {
    extrudePath: tempShape,//扫描轨迹
    steps: 500,//沿着路径细分精度，越大越光滑
    curveSegments: 20,//shape曲线对应曲线细分数 
    bevelEnabled: false,//禁止倒角 
  }
  );
  const material = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,//双面显示看到管道内壁 
    color: 0x000000,
  });
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = '辅助曲线'
  scene.add(mesh)
}
//点击-无人机参观
function UavVisitClick() {
  isUavVisitFlag.value = !isUavVisitFlag.value
  if (isUavVisitFlag.value) {
    curve1.points[1].x = Math.floor(Math.random() * 100) //0~100
    curve1.points[1].z = -1 * Math.floor(Math.random() * 50 - 100) //(-100~-150)
    curve1.points[2].x = Math.floor(Math.random() * 100)//0~100
    curve1.points[2].z = -1 * Math.floor(Math.random() * 100) - 200 //(-200~-300)

    curve1.points[3].x = Math.floor(Math.random() * 100 + 400) //400~500)
    curve1.points[3].z = -1 * Math.floor(Math.random() * 100) - 200///(-200~-300)
    curve1.points[4].x = Math.floor(Math.random() * 100 + 400) //400~500)
    curve1.points[4].z = -1 * Math.floor(Math.random() * 100)//(0~-100)
    pointsUav = null;
    pointsUav = curve1.getSpacedPoints(2000);
    //  ShowCurve(curve1)
    const j = 0;
    camera.position.copy(pointsUav[j]);// 相机位置：曲线上当前点pointsArr[i] 
    camera.lookAt(227, 0, -160);// 相机观察目标：当前点的下一个点pointsArr[i + 1]
    controls.target.set(227, 0, -160)
  }
  else {
    CameraDefault()
  }
}
//定义曲线，行人参观路径，取样5000个点
const curve2 = new THREE.CatmullRomCurve3([
  new THREE.Vector3(205, 1.7, -45),
  new THREE.Vector3(116, 1.7, -51),
  new THREE.Vector3(111, 1.7, -100),
  new THREE.Vector3(185, 1.7, -103),
  new THREE.Vector3(189, 1.7, -155),
  new THREE.Vector3(111, 1.7, -162),
  new THREE.Vector3(115, 1.7, -208),
  new THREE.Vector3(252, 1.7, -208),
  new THREE.Vector3(262, 1.7, -115),
  new THREE.Vector3(378, 1.7, -109),
  new THREE.Vector3(390, 1.7, -50),
  new THREE.Vector3(358, 1.7, -45),
  new THREE.Vector3(205, 1.7, -45),
], false, 'catmullrom', 0.4);
const pointsVisit = curve2.getSpacedPoints(5000);
//ShowCurve(curve2)
//点击-行人参观
function VisitClick() {
  isVisitFlag.value = !isVisitFlag.value
  if (isVisitFlag.value) {
    const j = 0;
    camera.position.copy(pointsVisit[j]);// 相机开始位置：曲线上点pointsArr[0] 
    camera.lookAt(pointsVisit[j + 1]);// 相机观察目标：下一个点pointsArr[i + 1]
    controls.target.copy(pointsVisit[j + 1]);
  }
  else {
    CameraDefault()
  }
}

//根据屏幕宽度调整文字
function updateHeadTitle() {
  if (window.innerWidth < 1000) {
    headTitle.value = '工厂全景图'
  } else {
    headTitle.value = '数字孪生技术------3D虚拟工厂全景图'
  }
  if (window.innerWidth < 600) {
    headLink1.value = '截图'
    // headLink2.value = '电路'
  } else {
    headLink1.value = '屏幕截图'
    //  headLink2.value = '电路组态'
  }
}



</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.progressBar {
  position: relative;
  width: 50%;
  top: 50%;
  transform: translate(50%, 50%);
  height: 0px;
}

.topTitleBar {
  color: white;
  position: absolute;
  width: 100%;
  font-family: "microsoft yahei";
  font-size: 18px;
  text-align: center;
  padding: 0px 0 16px 0px;
  display: block;
  background: url("./assets/three/bgtop.png") center bottom no-repeat;
}

/* 底部按钮 */
.bottomBar {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  bottom: 3px;
  position: absolute;
  opacity: 0.8;
  width: 98%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bottomBar .main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 4px;
  opacity: 0.96;
  border: 1px solid #14171c;
  background: linear-gradient(0deg, #1e202a 0%, #0d1013 100%);
  box-shadow: 0px 2px 21px 0px rgba(33, 34, 39, 0.55);
}

.bottomBar .main li {
  padding: 5px 3px;
  box-sizing: border-box;
  list-style: none;
  cursor: pointer;
  border: 1px solid #313642;
  border-radius: 2px;
  float: left;
  margin: 5px 1px 0px 1px;
  position: relative;
  width: 58px;
}

.bottomBar .main li div p {
  list-style: none;
  cursor: pointer;
  margin-top: 3px;
  padding: 0;
  box-sizing: border-box;
  height: 17px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #fbfbfb;
  display: block;
}

.bottomBar .main li p {
  list-style: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #fbfbfb;
  display: block;
}

.dropDown {
  --el-bg-color-overlay: #414858;
  --el-text-color-regular: white;
}

.leftSideBar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 350px;
  padding: 35px 5px 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, rgba(0, 6, 15, 0.00) 0%, rgba(0, 6, 15, 0.00) 0%, rgba(4, 34, 105, 0.40) 20%, rgba(1, 20, 65, 0.9) 98%, rgb(1, 20, 65) 100%, #04070d 100%);
}

.img-header {
  width: 100%;
}

/* 第一段 */
.section-one {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;

}

.tip-content {
  padding: 10px 16px 10px 0px
}

.tip-content ul li {
  color: #ffffff;
  list-style: none;
  overflow: hidden;
  line-height: 30px;
}

.tip-name {
  float: left;
  /*font-weight: 600;*/
}

.tip-num {
  float: right;
  color: #00CEFA;
  /*font-weight: 600;*/
}

/* 第二段 */
.section-two {
  flex-basis: 20%;
}

.icons-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 46px 10px 0;
}

.icons-content .item {
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 0;
}

.icons-content .item .building-icon {
  background: url('./assets/three/building-icon.png') no-repeat 50% 0 / contain;
}

.icons-content .item .enterprise-icon {
  background: url('./assets/three/enterprise-icon.png') no-repeat 50% 0 / contain;
}

.icons-content .item .rod-icon {
  background: url('./assets/three/rod-icon.png') no-repeat 50% 0 / contain;
}

.icons-content .item .car-icon {
  background: url('./assets/three/car-icon.png') no-repeat 50% 0 / contain;
}

.icons-content .item .title,
.icons-content .item .unity {
  font-size: 14px;
  color: white;
}

.icons-content .item .title {
  margin-top: 8px;
}

.icons-content .item .icons-item {
  position: relative;
  height: 80px;
}

.icons-content .item .icons-item .number {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-family: FontquanXinYiGuanHeiTi, FontquanXinYiGuanHeiTi-Regular;
  color: #ffffff;
}

/* 第三段 */
.section-three {
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
}

.rec-content {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 25px 5px 0px 25px;
  text-align: center;
  overflow: hidden;
}

.recetit {
  float: left;
  width: 70px;
  float: left;
  margin-right: 15px;
}

.recetit:nth-last-child(1) {
  margin-right: 0px;
}

.recetit strong {
  color: #f5f77c;
  font-size: 15px;
}

.recetit span {
  display: block;
  text-align: center;
  margin-bottom: 6px;
  width: 42px;
  height: 8px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #0b4e78;
  margin-left: 8px;
}

.recetit .changecolor {
  background-color: #05fff9;
}

.recetit p {
  color: #fff;
  font-size: 12px;
}

/* 第四段 */
.section-four {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
}

.section-four .img-content {
  position: relative;
  padding-left: 0px;
  width: 80%;
  flex: 1;
  height: 50px;
  background: url("./assets/three/big.png") center bottom no-repeat;
}

/* 数据大屏 */
.bigScreenBox {
  width: 980px;
  height: 560px;
  color: white;
  background-size: 100% 100%;
  background: url("./assets/three/bigScreen.png");
  z-index: -1 !important;
  display: flex;
  flex-direction: column;
}

.bigScreenBox .title1 {
  width: 100%;
  height: 50px;
  color: #000;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}

.bigScreenBox .content1 {
  padding-top: 30px;
  width: 100%;
  height: 100%;
}

.bigScreenBox .content1 .row1 {
  display: flex;
  width: 100%;
  height: 80px;
  line-height: 80px;
}

.bigScreenBox .content1 .row1 .col1 {
  padding-left: 100px;
  width: 100%;
  text-align: left;
  font-size: 40px;
}

/* 虚拟键盘 */
.virtualKey {
  margin: 0 auto;
  padding-left: 20px;
  box-sizing: border-box;
  bottom: 80px;
  position: absolute;
  width: 220px;
}

.virtualKey .box {
  padding: 10px 3px;
  box-sizing: border-box;
  list-style: none;
  cursor: pointer;
  border: 1px solid #313642;
  height: 40px;
  border-radius: 2px;
  float: left;
  margin: 5px 1px 5px 1px;
  position: relative;
  width: 58px;
  opacity: 0.66;
  background: linear-gradient(0deg, #1e202a 0%, #0d1013 100%);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
}
</style>