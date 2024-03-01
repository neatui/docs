import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Demo from '@/views/Demo/index.vue';
import Cover from '@/views/Cover/index.vue';
import Blog from '@/views/Blog/index.vue';

import Development from '@/views/Development/index.vue';

import Docs from '@/views/Docs/index.vue';
import Guide from '@/views/Docs/Guide/index.vue';

import Design from '@/views/Design/index.vue';
import Resources from '@/views/Design/Resources/index.vue';
import Specification from '@/views/Design/Specification/index.vue';
import Case from '@/views/Case/index.vue';

import Components from '@/views/Docs/Components/index.vue';
import ComponentsHome from '@/views/Docs/Components/Home/index.vue';

// 组件文档
// 基础
import Layer from '@/views/Docs/Components/basic/Layer/index.vue';
import IRouterView from '@/views/Docs/Components/IRouterView/index.vue';
import IFollowView from '@/views/Docs/Components/IFollowView/index.vue';
import IPickerView from '@/views/Docs/Components/IPickerView/index.vue';
import IScrollView from '@/views/Docs/Components/IScrollView/index.vue';
// 表单
import Input from '@/views/Docs/Components/Input/index.vue';
import InputDemo from '@/views/Docs/Components/Input/demo.vue';

import TextArea from '@/views/Docs/Components/TextArea/index.vue';
import TextAreaDemo from '@/views/Docs/Components/TextArea/demo.vue';

import Select from '@/views/Docs/Components/Select/index.vue';
import SelectDemo from '@/views/Docs/Components/Select/indexDemo.vue';

import Calendar from '@/views/Docs/Components/Calendar/index.vue';
import Cascader from '@/views/Docs/Components/Cascader/index.vue';
import DatePicker from '@/views/Docs/Components/DatePicker/index.vue';
import InputRange from '@/views/Docs/Components/InputRange/index.vue';
import TimePicker from '@/views/Docs/Components/TimePicker/index.vue';
import Upload from '@/views/Docs/Components/Upload/index.vue';
import Switch from '@/views/Docs/Components/Switch/index.vue';
import PhotoEditor from '@/views/Docs/Components/PhotoEditor/index.vue';
import PhotoViewer from '@/views/Docs/Components/PhotoViewer/index.vue';
import Tree from '@/views/Docs/Components/Tree/index.vue';
import Alert from '@/views/Docs/Components/Alert/index.vue';
import Anchor from '@/views/Docs/Components/Anchor/index.vue';
import AutoComplete from '@/views/Docs/Components/AutoComplete/index.vue';
import Avatar from '@/views/Docs/Components/Avatar/index.vue';
import Badge from '@/views/Docs/Components/Badge/index.vue';
import Breadcrumb from '@/views/Docs/Components/Breadcrumb/index.vue';
import Button from '@/views/Docs/Components/Button/index.vue';
import Card from '@/views/Docs/Components/Card/index.vue';
import Carousel from '@/views/Docs/Components/Carousel/index.vue';
import Collapse from '@/views/Docs/Components/Collapse/index.vue';
import Checkbox from '@/views/Docs/Components/Checkbox/index.vue';
import ColorPicker from '@/views/Docs/Components/ColorPicker/index.vue';
import Descriptions from '@/views/Docs/Components/Descriptions/index.vue';
import Divider from '@/views/Docs/Components/Divider/index.vue';
import Drawer from '@/views/Docs/Components/Drawer/index.vue';
import DropDown from '@/views/Docs/Components/DropDown/index.vue';
import Empty from '@/views/Docs/Components/Empty/index.vue';
import Feedback from '@/views/Docs/Components/Feedback/index.vue';
import FloatButton from '@/views/Docs/Components/FloatButton/index.vue';
import Form from '@/views/Docs/Components/Form/index.vue';
import Grid from '@/views/Docs/Components/Grid/index.vue';
import Icon from '@/views/Docs/Components/Icon/index.vue';
import Image from '@/views/Docs/Components/Image/index.vue';
import InputNumber from '@/views/Docs/Components/InputNumber/index.vue';
import Layout from '@/views/Docs/Components/Layout/index.vue';
import List from '@/views/Docs/Components/List/index.vue';
import Mentions from '@/views/Docs/Components/Mentions/index.vue';
import Menu from '@/views/Docs/Components/Menu/index.vue';
import Message from '@/views/Docs/Components/Message/index.vue';
import Modal from '@/views/Docs/Components/Modal/index.vue';
import Notification from '@/views/Docs/Components/Notification/index.vue';
import Pagination from '@/views/Docs/Components/Pagination/index.vue';
import Popconfirm from '@/views/Docs/Components/Popconfirm/index.vue';
import Popover from '@/views/Docs/Components/Popover/index.vue';
import Progress from '@/views/Docs/Components/Progress/index.vue';
import QRCode from '@/views/Docs/Components/QRCode/index.vue';
import Rate from '@/views/Docs/Components/Rate/index.vue';
import Result from '@/views/Docs/Components/Result/index.vue';
import Segmented from '@/views/Docs/Components/Segmented/index.vue';
import Skeleton from '@/views/Docs/Components/Skeleton/index.vue';
import Slider from '@/views/Docs/Components/Slider/index.vue';
import Space from '@/views/Docs/Components/Space/index.vue';
import Spin from '@/views/Docs/Components/Spin/index.vue';
import Statistic from '@/views/Docs/Components/Statistic/index.vue';
import Steps from '@/views/Docs/Components/Steps/index.vue';
import Table from '@/views/Docs/Components/Table/index.vue';
import Tabs from '@/views/Docs/Components/Tabs/index.vue';
import Tag from '@/views/Docs/Components/Tag/index.vue';
import Timeline from '@/views/Docs/Components/Timeline/index.vue';
import Tooltip from '@/views/Docs/Components/Tooltip/index.vue';
import Tour from '@/views/Docs/Components/Tour/index.vue';
import Transfer from '@/views/Docs/Components/Transfer/index.vue';
import TreeSelect from '@/views/Docs/Components/TreeSelect/index.vue';
import Typography from '@/views/Docs/Components/Typography/index.vue';
import Watermark from '@/views/Docs/Components/Watermark/index.vue';

// 表单
import FormLoader from '@/views/Docs/Components/FormLoader/index.vue';
import FormLoaderDemo from '@/views/Docs/Components/FormLoader/demo.vue';
// 筛选
import LimitLoader from '@/views/Docs/Components/LimitLoader/index.vue';
import LimitLoaderDemo from '@/views/Docs/Components/LimitLoader/demo.vue';
// 列表
import TableLoader from '@/views/Docs/Components/TableLoader/index.vue';
import TableLoaderDemo from '@/views/Docs/Components/TableLoader/demo.vue';

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
    path: '/design',
    name: 'design',
    component: Design,
    children: [
      { path: '', name: 'design', redirect: '/design/specification' },
      {
        path: 'resources',
        name: 'resources',
        component: Resources
      },
      {
        path: 'specification',
        name: 'Specification',
        component: Specification
      }
    ]
  },
  {
    path: '/development',
    name: 'development',
    component: Development,
    children: []
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
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
    children: [
      { path: '', name: 'docs', redirect: '/docs/components' },
      {
        path: 'guide',
        name: 'guide',
        component: Guide,
        children: []
      },
      {
        path: 'components',
        name: 'components',
        component: Components,
        children: [
          { path: '', name: 'components', redirect: '/docs/components/home' },
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
      }
    ]
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
