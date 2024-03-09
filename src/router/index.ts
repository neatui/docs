import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Demo from '@/views/Demo/index.vue';
import Cover from '@/views/Cover/index.vue';
import Blog from '@/views/Blog/index.vue';

import Development from '@/views/Development/index.vue';

import Docs from '@/views/Docs/index.vue';
import DocsIntroduction from '@/views/Docs/Introduction.vue';
import DocsInstallation from '@/views/Docs/Installation.vue';

import DocsDesign from '@/views/Docs/Design.vue';
import DocsBasics from '@/views/Docs/Basics.vue';
import DocsColor from '@/views/Docs/Color.vue';
import DocsFontsize from '@/views/Docs/Fontsize.vue';
import DocsInteraction from '@/views/Docs/Interaction.vue';
import DocsResponse from '@/views/Docs/Response.vue';
import DocsGrid from '@/views/Docs/Grid.vue';
import DocsMicrocontrol from '@/views/Docs/Microcontrol.vue';
import DocsVersion from '@/views/Docs/Version.vue';

// import Design from '@/views/Design/index.vue';
// import Resources from '@/views/Design/Resources/index.vue';
// import Specification from '@/views/Design/Specification/index.vue';
import Case from '@/views/Case/index.vue';
import Templates from '@/views/Templates/index.vue';

import Components from '@/views/Components/index.vue';
import ComponentsHome from '@/views/Components/Home/index.vue';

// 组件文档
// 基础
import Layer from '@/views/Components/basic/Layer/index.vue';
import IRouterView from '@/views/Components/IRouterView/index.vue';
import IFollowView from '@/views/Components/IFollowView/index.vue';
import IPickerView from '@/views/Components/IPickerView/index.vue';
import IScrollView from '@/views/Components/IScrollView/index.vue';
// 表单
import Input from '@/views/Components/Input/index.vue';
import InputDemo from '@/views/Components/Input/demo.vue';

import TextArea from '@/views/Components/TextArea/index.vue';
import TextAreaDemo from '@/views/Components/TextArea/demo.vue';

import Select from '@/views/Components/Select/index.vue';
import SelectDemo from '@/views/Components/Select/indexDemo.vue';

import Calendar from '@/views/Components/Calendar/index.vue';
import Cascader from '@/views/Components/Cascader/index.vue';
import DatePicker from '@/views/Components/DatePicker/index.vue';
import InputRange from '@/views/Components/InputRange/index.vue';
import TimePicker from '@/views/Components/TimePicker/index.vue';
import Upload from '@/views/Components/Upload/index.vue';
import Switch from '@/views/Components/Switch/index.vue';
import PhotoEditor from '@/views/Components/PhotoEditor/index.vue';
import PhotoViewer from '@/views/Components/PhotoViewer/index.vue';
import Tree from '@/views/Components/Tree/index.vue';
import Alert from '@/views/Components/Alert/index.vue';
import Anchor from '@/views/Components/Anchor/index.vue';
import AutoComplete from '@/views/Components/AutoComplete/index.vue';
import Avatar from '@/views/Components/Avatar/index.vue';
import Badge from '@/views/Components/Badge/index.vue';
import Breadcrumb from '@/views/Components/Breadcrumb/index.vue';
import Button from '@/views/Components/Button/index.vue';
import Card from '@/views/Components/Card/index.vue';
import Carousel from '@/views/Components/Carousel/index.vue';
import Collapse from '@/views/Components/Collapse/index.vue';
import Checkbox from '@/views/Components/Checkbox/index.vue';
import ColorPicker from '@/views/Components/ColorPicker/index.vue';
import Descriptions from '@/views/Components/Descriptions/index.vue';
import Divider from '@/views/Components/Divider/index.vue';
import Drawer from '@/views/Components/Drawer/index.vue';
import DropDown from '@/views/Components/DropDown/index.vue';
import Empty from '@/views/Components/Empty/index.vue';
import Feedback from '@/views/Components/Feedback/index.vue';
import FloatButton from '@/views/Components/FloatButton/index.vue';
import Form from '@/views/Components/Form/index.vue';
import Grid from '@/views/Components/Grid/index.vue';
import Icon from '@/views/Components/Icon/index.vue';
import Image from '@/views/Components/Image/index.vue';
import InputNumber from '@/views/Components/InputNumber/index.vue';
import Layout from '@/views/Components/Layout/index.vue';
import List from '@/views/Components/List/index.vue';
import Mentions from '@/views/Components/Mentions/index.vue';
import Menu from '@/views/Components/Menu/index.vue';
import Message from '@/views/Components/Message/index.vue';
import Modal from '@/views/Components/Modal/index.vue';
import Notification from '@/views/Components/Notification/index.vue';
import Pagination from '@/views/Components/Pagination/index.vue';
import Popconfirm from '@/views/Components/Popconfirm/index.vue';
import Popover from '@/views/Components/Popover/index.vue';
import Progress from '@/views/Components/Progress/index.vue';
import QRCode from '@/views/Components/QRCode/index.vue';
import Rate from '@/views/Components/Rate/index.vue';
import Result from '@/views/Components/Result/index.vue';
import Segmented from '@/views/Components/Segmented/index.vue';
import Skeleton from '@/views/Components/Skeleton/index.vue';
import Slider from '@/views/Components/Slider/index.vue';
import Space from '@/views/Components/Space/index.vue';
import Spin from '@/views/Components/Spin/index.vue';
import Statistic from '@/views/Components/Statistic/index.vue';
import Steps from '@/views/Components/Steps/index.vue';
import Table from '@/views/Components/Table/index.vue';
import Tabs from '@/views/Components/Tabs/index.vue';
import Tag from '@/views/Components/Tag/index.vue';
import Timeline from '@/views/Components/Timeline/index.vue';
import Tooltip from '@/views/Components/Tooltip/index.vue';
import Tour from '@/views/Components/Tour/index.vue';
import Transfer from '@/views/Components/Transfer/index.vue';
import TreeSelect from '@/views/Components/TreeSelect/index.vue';
import Typography from '@/views/Components/Typography/index.vue';
import Watermark from '@/views/Components/Watermark/index.vue';

// 表单
import FormLoader from '@/views/Components/FormLoader/index.vue';
import FormLoaderDemo from '@/views/Components/FormLoader/demo.vue';
// 筛选
import LimitLoader from '@/views/Components/LimitLoader/index.vue';
import LimitLoaderDemo from '@/views/Components/LimitLoader/demo.vue';
// 列表
import TableLoader from '@/views/Components/TableLoader/index.vue';
import TableLoaderDemo from '@/views/Components/TableLoader/demo.vue';
// 插件
import Plugins from '@/views/Plugins/index.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/:catchAll(.*)', redirect: '/' },
  // 推荐关系管理
  {
    path: '/',
    name: 'home',
    component: Home,
    children: []
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    children: [
      { path: '', name: 'Docs', redirect: '/docs/introduction' },
      { path: 'introduction', name: 'DocsIntroduction', component: DocsIntroduction },
      { path: 'installation', name: 'DocsInstallation', component: DocsInstallation },
      { path: 'design', name: 'DocsDesign', component: DocsDesign },
      { path: 'basics', name: 'DocsBasics', component: DocsBasics },
      { path: 'color', name: 'DocsColor', component: DocsColor },
      { path: 'fontsize', name: 'DocsFontsize', component: DocsFontsize },
      { path: 'interaction', name: 'DocsInteraction', component: DocsInteraction },
      { path: 'response', name: 'DocsResponse', component: DocsResponse },
      { path: 'grid', name: 'DocsGrid', component: DocsGrid },
      { path: 'microcontrol', name: 'DocsMicrocontrol', component: DocsMicrocontrol },
      { path: 'version', name: 'DocsVersion', component: DocsVersion }
    ]
  },
  {
    path: '/development',
    name: 'development',
    component: Development,
    children: []
  },
  {
    path: '/components',
    name: 'Components',
    component: Components,
    children: [
      { path: '', name: 'Components', redirect: '/components/home' },
      {
        path: 'home',
        name: 'ComponentsHome',
        component: ComponentsHome
      },
      {
        path: 'layer',
        name: 'layer',
        component: Layer
      },
      {
        path: 'IRouterView',
        name: 'IRouterView',
        component: IRouterView
      },
      {
        path: 'IFollowView',
        name: 'IFollowView',
        component: IFollowView
      },
      {
        path: 'IPickerView',
        name: 'IPickerView',
        component: IPickerView
      },
      {
        path: 'IScrollView',
        name: 'IScrollView',
        component: IScrollView
      },
      {
        path: 'Input',
        name: 'Input',
        component: Input
      },
      {
        path: 'Calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'cascader',
        name: 'cascader',
        component: Cascader
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: DatePicker
      },
      {
        path: 'inputRange',
        name: 'inputRange',
        component: InputRange
      },
      {
        path: 'timePicker',
        name: 'timePicker',
        component: TimePicker
      },
      {
        path: 'upload',
        name: 'upload',
        component: Upload
      },
      {
        path: 'Select',
        name: 'Select',
        component: Select
      },
      {
        path: 'switch',
        name: 'switch',
        component: Switch
      },
      {
        path: 'textArea',
        name: 'textArea',
        component: TextArea
      },
      {
        path: 'photoEditor',
        name: 'photoEditor',
        component: PhotoEditor
      },
      {
        path: 'photoViewer',
        name: 'photoViewer',
        component: PhotoViewer
      },
      {
        path: 'tree',
        name: 'tree',
        component: Tree
      },
      {
        path: 'alert',
        name: 'alert',
        component: Alert
      },
      {
        path: 'anchor',
        name: 'anchor',
        component: Anchor
      },
      {
        path: 'autoComplete',
        name: 'autoComplete',
        component: AutoComplete
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: Avatar
      },
      {
        path: 'badge',
        name: 'badge',
        component: Badge
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: Breadcrumb
      },
      {
        path: 'button',
        name: 'button',
        component: Button
      },
      {
        path: 'card',
        name: 'card',
        component: Card
      },
      {
        path: 'carousel',
        name: 'carousel',
        component: Carousel
      },
      {
        path: 'collapse',
        name: 'collapse',
        component: Collapse
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: Checkbox
      },
      {
        path: 'colorPicker',
        name: 'colorPicker',
        component: ColorPicker
      },
      {
        path: 'descriptions',
        name: 'descriptions',
        component: Descriptions
      },
      {
        path: 'divider',
        name: 'divider',
        component: Divider
      },
      {
        path: 'drawer',
        name: 'drawer',
        component: Drawer
      },
      {
        path: 'dropDown',
        name: 'dropDown',
        component: DropDown
      },
      {
        path: 'empty',
        name: 'empty',
        component: Empty
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: Feedback
      },
      {
        path: 'floatButton',
        name: 'floatButton',
        component: FloatButton
      },
      {
        path: 'form',
        name: 'form',
        component: Form
      },
      {
        path: 'grid',
        name: 'grid',
        component: Grid
      },
      {
        path: 'icon',
        name: 'icon',
        component: Icon
      },
      {
        path: 'image',
        name: 'image',
        component: Image
      },
      {
        path: 'inputNumber',
        name: 'inputNumber',
        component: InputNumber
      },
      {
        path: 'layout',
        name: 'layout',
        component: Layout
      },
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'mentions',
        name: 'mentions',
        component: Mentions
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      },
      {
        path: 'modal',
        name: 'modal',
        component: Modal
      },
      {
        path: 'notification',
        name: 'notification',
        component: Notification
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: Pagination
      },
      {
        path: 'popconfirm',
        name: 'popconfirm',
        component: Popconfirm
      },
      {
        path: 'popover',
        name: 'popover',
        component: Popover
      },
      {
        path: 'progress',
        name: 'progress',
        component: Progress
      },
      {
        path: 'qRCode',
        name: 'qRCode',
        component: QRCode
      },
      {
        path: 'rate',
        name: 'rate',
        component: Rate
      },
      {
        path: 'result',
        name: 'result',
        component: Result
      },
      {
        path: 'segmented',
        name: 'segmented',
        component: Segmented
      },
      {
        path: 'skeleton',
        name: 'skeleton',
        component: Skeleton
      },
      {
        path: 'slider',
        name: 'slider',
        component: Slider
      },
      {
        path: 'space',
        name: 'space',
        component: Space
      },
      {
        path: 'spin',
        name: 'spin',
        component: Spin
      },
      {
        path: 'statistic',
        name: 'statistic',
        component: Statistic
      },
      {
        path: 'steps',
        name: 'steps',
        component: Steps
      },
      {
        path: 'table',
        name: 'table',
        component: Table
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: Tabs
      },
      {
        path: 'tag',
        name: 'tag',
        component: Tag
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: Timeline
      },
      {
        path: 'tooltip',
        name: 'tooltip',
        component: Tooltip
      },
      {
        path: 'tour',
        name: 'tour',
        component: Tour
      },
      {
        path: 'transfer',
        name: 'transfer',
        component: Transfer
      },
      {
        path: 'treeSelect',
        name: 'treeSelect',
        component: TreeSelect
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'watermark',
        name: 'watermark',
        component: Watermark
      },
      // 新增的基础组件放在这行注释前面
      {
        path: 'LimitLoader',
        name: 'LimitLoader',
        component: LimitLoader
      },
      {
        path: 'TableLoader',
        name: 'TableLoader',
        component: TableLoader
      },
      {
        path: 'FormLoader',
        name: 'FormLoader',
        component: FormLoader
      }
    ]
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: Plugins,
    children: []
  },
  {
    path: '/case',
    name: 'case',
    component: Case,
    children: []
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates,
    children: []
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    children: [
      {
        path: 'iformloader',
        name: 'FormLoaderDemo',
        component: FormLoaderDemo
      }
    ]
  },
  {
    path: '/cover',
    name: 'cover',
    component: Cover
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
