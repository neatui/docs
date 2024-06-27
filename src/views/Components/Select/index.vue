<template>
  <div class="bg-fore r-sm n-mm">
    <div>
      <h2>{{ words['components.select'] || 'Select' }}</h2>
      <p>下拉选择器</p>
    </div>
    <div>
      <h2>代码演示</h2>
      <ul ui-row="space mob-24 dpc-12">
        <li>
          <CodeView file="/components/Select/Select.md">
            <div class="w-lm">
              <span>单选</span>
              <Select v-model="value1" :options="enums" />
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Select/Select.md">
            <div class="w-lm">
              <span>单选（开启搜索框）</span>
              <Select v-model="value1" :options="enums" :search="true" />
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Select/MoreSelect.md">
            <div class="w-lm">
              <span>多选</span>
              <MoreSelect v-model="value2" :options="enums" />
            </div>
          </CodeView>
        </li>
        <li>
          <CodeView file="/components/Select/MoreSelect.md">
            <div class="w-lm">
              <span>树型</span>
              <SelectTree v-model="value3" :options="maps" optional="end" :search="true" />
            </div>
          </CodeView>
        </li>
      </ul>
    </div>

    <div>
      <h2>API</h2>
      <div>
        <h3>Input</h3>
        <table ui-table="@b" class="b-solid bk-line b-xs r-sm">
          <thead>
            <tr>
              <td>参数</td>
              <td>说明</td>
              <td>类型</td>
              <td>默认值</td>
              <td>版本</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue';
  import { Select, MoreSelect, PageSelect, SearchSelect, SearchMoreSelect, SelectTree } from '@neatui/vue';
  import { storeToRefs, useBaseStore } from '@/store';
  import { CodeView } from '@/components';

  const base: any = useBaseStore();
  const { words = {} }: any = storeToRefs(base);

  // 枚举
  const enums: any = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disabled: true
    },
    {
      label: '选项3',
      value: '3'
    }
  ];

  // 示例1
  const value1: any = ref('');
  // 标例2
  const value2: any = ref([]);

  const enums3: any = ref([
    {
      label: '选项1',
      value: '1',
      child: [
        {
          label: 'aaa',
          value: '1few1',
          disable: true
        },
        {
          label: 'bbbbaefqw vawv  ',
          value: '11e23',
          disable: true
        },
        {
          label: 'ccc deva  dveqwegweg',
          value: '12fw1',
          disable: true
        },
        {
          label: 'ddd vewdavad dawva ed',
          value: '111',
          child: [
            {
              label: '选项1fweqfwqef-7',
              value: '1222'
            }
          ]
        },
        {
          label: '选项1-2',
          value: '12'
        }
      ]
    },
    {
      label: '选项2',
      value: '2',
      disable: true
    },
    {
      label: '选项3',
      value: '3'
    }
  ]);
  const maps: any = [
    {
      label: '北京市',
      value: '北京市',
      child: [
        {
          value: '东城区',
          label: '东城区',
          child: [],
          name: 'dongcheng'
        },
        {
          value: '西城区',
          label: '西城区',
          child: [],
          name: 'xicheng'
        },
        {
          value: '朝阳区',
          label: '朝阳区',
          child: [],
          name: 'chaoyang'
        },
        {
          value: '丰台区',
          label: '丰台区',
          child: [],
          name: 'fengtai'
        },
        {
          value: '石景山区',
          label: '石景山区',
          child: [],
          name: 'shijingshan'
        },
        {
          value: '海淀区',
          label: '海淀区',
          child: [],
          name: 'haidian'
        },
        {
          value: '门头沟区',
          label: '门头沟区',
          child: [],
          name: 'mentougou'
        },
        {
          value: '房山区',
          label: '房山区',
          child: [],
          name: 'fangshan'
        },
        {
          value: '通州区',
          label: '通州区',
          child: [],
          name: 'tongzhou'
        },
        {
          value: '顺义区',
          label: '顺义区',
          child: [],
          name: 'shunyi'
        },
        {
          value: '昌平区',
          label: '昌平区',
          child: [],
          name: 'changping'
        },
        {
          value: '大兴区',
          label: '大兴区',
          child: [],
          name: 'daxing'
        },
        {
          value: '怀柔区',
          label: '怀柔区',
          child: [],
          name: 'huairou'
        },
        {
          value: '平谷区',
          label: '平谷区',
          child: [],
          name: 'pinggu'
        },
        {
          value: '密云区',
          label: '密云区',
          child: [],
          name: 'miyun'
        },
        {
          value: '延庆区',
          label: '延庆区',
          child: [],
          name: 'yanqing'
        }
      ],
      name: 'beijing'
    },
    {
      label: '天津市',
      value: '天津市',
      child: [
        {
          value: '和平区',
          label: '和平区',
          child: [],
          name: 'heping'
        },
        {
          value: '河东区',
          label: '河东区',
          child: [],
          name: 'hedong'
        },
        {
          value: '河西区',
          label: '河西区',
          child: [],
          name: 'hexi'
        },
        {
          value: '南开区',
          label: '南开区',
          child: [],
          name: 'nankai'
        },
        {
          value: '河北区',
          label: '河北区',
          child: [],
          name: 'hebei'
        },
        {
          value: '红桥区',
          label: '红桥区',
          child: [],
          name: 'hongqiao'
        },
        {
          value: '东丽区',
          label: '东丽区',
          child: [],
          name: 'dongli'
        },
        {
          value: '西青区',
          label: '西青区',
          child: [],
          name: 'xiqing'
        },
        {
          value: '津南区',
          label: '津南区',
          child: [],
          name: 'jinnan'
        },
        {
          value: '北辰区',
          label: '北辰区',
          child: [],
          name: 'beichen'
        },
        {
          value: '武清区',
          label: '武清区',
          child: [],
          name: 'wuqing'
        },
        {
          value: '宝坻区',
          label: '宝坻区',
          child: [],
          name: 'baodi'
        },
        {
          value: '滨海新区',
          label: '滨海新区',
          child: [],
          name: 'binhaixinqu'
        },
        {
          value: '宁河区',
          label: '宁河区',
          child: [],
          name: 'ninghe'
        },
        {
          value: '静海区',
          label: '静海区',
          child: [],
          name: 'jinghai'
        },
        {
          value: '蓟州区',
          label: '蓟州区',
          child: [],
          name: 'jizhou'
        }
      ],
      name: 'tianjin'
    },
    {
      label: '河北省',
      value: '河北省',
      child: [
        {
          value: '石家庄市',
          label: '石家庄市',
          child: [],
          name: 'shijiazhuang'
        },
        {
          value: '唐山市',
          label: '唐山市',
          child: [],
          name: 'tangshan'
        },
        {
          value: '秦皇岛市',
          label: '秦皇岛市',
          child: [],
          name: 'qinhuangdao'
        },
        {
          value: '邯郸市',
          label: '邯郸市',
          child: [],
          name: 'handan'
        },
        {
          value: '邢台市',
          label: '邢台市',
          child: [],
          name: 'xingtai'
        },
        {
          value: '保定市',
          label: '保定市',
          child: [],
          name: 'baoding'
        },
        {
          value: '张家口市',
          label: '张家口市',
          child: [],
          name: 'zhangjiakou'
        },
        {
          value: '承德市',
          label: '承德市',
          child: [],
          name: 'chengde'
        },
        {
          value: '沧州市',
          label: '沧州市',
          child: [],
          name: 'cangzhou'
        },
        {
          value: '廊坊市',
          label: '廊坊市',
          child: [],
          name: 'langfang'
        },
        {
          value: '衡水市',
          label: '衡水市',
          child: [],
          name: 'hengshui'
        }
      ],
      name: 'hebei'
    },
    {
      label: '山西省',
      value: '山西省',
      child: [
        {
          value: '太原市',
          label: '太原市',
          child: [],
          name: 'taiyuan'
        },
        {
          value: '大同市',
          label: '大同市',
          child: [],
          name: 'datong'
        },
        {
          value: '阳泉市',
          label: '阳泉市',
          child: [],
          name: 'yangquan'
        },
        {
          value: '长治市',
          label: '长治市',
          child: [],
          name: 'changzhi'
        },
        {
          value: '晋城市',
          label: '晋城市',
          child: [],
          name: 'jincheng'
        },
        {
          value: '朔州市',
          label: '朔州市',
          child: [],
          name: 'shuozhou'
        },
        {
          value: '晋中市',
          label: '晋中市',
          child: [],
          name: 'jinzhong'
        },
        {
          value: '运城市',
          label: '运城市',
          child: [],
          name: 'yuncheng'
        },
        {
          value: '忻州市',
          label: '忻州市',
          child: [],
          name: 'xinzhou'
        },
        {
          value: '临汾市',
          label: '临汾市',
          child: [],
          name: 'linfen'
        },
        {
          value: '吕梁市',
          label: '吕梁市',
          child: [],
          name: 'lvliang'
        }
      ],
      name: 'shanxi'
    },
    {
      label: '内蒙古自治区',
      value: '内蒙古自治区',
      child: [
        {
          value: '呼和浩特市',
          label: '呼和浩特市',
          child: [],
          name: 'huhehaote'
        },
        {
          value: '包头市',
          label: '包头市',
          child: [],
          name: 'baotou'
        },
        {
          value: '乌海市',
          label: '乌海市',
          child: [],
          name: 'wuhai'
        },
        {
          value: '赤峰市',
          label: '赤峰市',
          child: [],
          name: 'chifeng'
        },
        {
          value: '通辽市',
          label: '通辽市',
          child: [],
          name: 'tongliao'
        },
        {
          value: '鄂尔多斯市',
          label: '鄂尔多斯市',
          child: [],
          name: 'eerduosi'
        },
        {
          value: '呼伦贝尔市',
          label: '呼伦贝尔市',
          child: [],
          name: 'hulunbeier'
        },
        {
          value: '巴彦淖尔市',
          label: '巴彦淖尔市',
          child: [],
          name: 'bayannaoer'
        },
        {
          value: '乌兰察布市',
          label: '乌兰察布市',
          child: [],
          name: 'wulanchabu'
        },
        {
          value: '兴安盟',
          label: '兴安盟',
          child: [],
          name: 'xinganmeng'
        },
        {
          value: '锡林郭勒盟',
          label: '锡林郭勒盟',
          child: [],
          name: 'xilinguolemeng'
        },
        {
          value: '阿拉善盟',
          label: '阿拉善盟',
          child: [],
          name: 'alashanmeng'
        }
      ],
      name: 'neimenggu'
    },
    {
      label: '辽宁省',
      value: '辽宁省',
      child: [
        {
          value: '沈阳市',
          label: '沈阳市',
          child: [],
          name: 'shenyang'
        },
        {
          value: '大连市',
          label: '大连市',
          child: [],
          name: 'dalian'
        },
        {
          value: '鞍山市',
          label: '鞍山市',
          child: [],
          name: 'anshan'
        },
        {
          value: '抚顺市',
          label: '抚顺市',
          child: [],
          name: 'fushun'
        },
        {
          value: '本溪市',
          label: '本溪市',
          child: [],
          name: 'benxi'
        },
        {
          value: '丹东市',
          label: '丹东市',
          child: [],
          name: 'dandong'
        },
        {
          value: '锦州市',
          label: '锦州市',
          child: [],
          name: 'jinzhou'
        },
        {
          value: '营口市',
          label: '营口市',
          child: [],
          name: 'yingkou'
        },
        {
          value: '阜新市',
          label: '阜新市',
          child: [],
          name: 'fuxin'
        },
        {
          value: '辽阳市',
          label: '辽阳市',
          child: [],
          name: 'liaoyang'
        },
        {
          value: '盘锦市',
          label: '盘锦市',
          child: [],
          name: 'panjin'
        },
        {
          value: '铁岭市',
          label: '铁岭市',
          child: [],
          name: 'tieling'
        },
        {
          value: '朝阳市',
          label: '朝阳市',
          child: [],
          name: 'chaoyang'
        },
        {
          value: '葫芦岛市',
          label: '葫芦岛市',
          child: [],
          name: 'huludao'
        }
      ],
      name: 'liaoning'
    },
    {
      label: '吉林省',
      value: '吉林省',
      child: [
        {
          value: '长春市',
          label: '长春市',
          child: [],
          name: 'changchun'
        },
        {
          value: '吉林市',
          label: '吉林市',
          child: [],
          name: 'jilin'
        },
        {
          value: '四平市',
          label: '四平市',
          child: [],
          name: 'siping'
        },
        {
          value: '辽源市',
          label: '辽源市',
          child: [],
          name: 'liaoyuan'
        },
        {
          value: '通化市',
          label: '通化市',
          child: [],
          name: 'tonghua'
        },
        {
          value: '白山市',
          label: '白山市',
          child: [],
          name: 'baishan'
        },
        {
          value: '松原市',
          label: '松原市',
          child: [],
          name: 'songyuan'
        },
        {
          value: '白城市',
          label: '白城市',
          child: [],
          name: 'baicheng'
        },
        {
          value: '延边朝鲜族自治州',
          label: '延边朝鲜族自治州',
          child: [],
          name: 'yanbian'
        }
      ],
      name: 'jilin'
    },
    {
      label: '黑龙江省',
      value: '黑龙江省',
      child: [
        {
          value: '哈尔滨市',
          label: '哈尔滨市',
          child: [],
          name: 'haerbin'
        },
        {
          value: '齐齐哈尔市',
          label: '齐齐哈尔市',
          child: [],
          name: 'qiqihaer'
        },
        {
          value: '鸡西市',
          label: '鸡西市',
          child: [],
          name: 'jixi'
        },
        {
          value: '鹤岗市',
          label: '鹤岗市',
          child: [],
          name: 'hegang'
        },
        {
          value: '双鸭山市',
          label: '双鸭山市',
          child: [],
          name: 'shuangyashan'
        },
        {
          value: '大庆市',
          label: '大庆市',
          child: [],
          name: 'daqing'
        },
        {
          value: '伊春市',
          label: '伊春市',
          child: [],
          name: 'yichun'
        },
        {
          value: '佳木斯市',
          label: '佳木斯市',
          child: [],
          name: 'jiamusi'
        },
        {
          value: '七台河市',
          label: '七台河市',
          child: [],
          name: 'qitaihe'
        },
        {
          value: '牡丹江市',
          label: '牡丹江市',
          child: [],
          name: 'mudanjiang'
        },
        {
          value: '黑河市',
          label: '黑河市',
          child: [],
          name: 'heihe'
        },
        {
          value: '绥化市',
          label: '绥化市',
          child: [],
          name: 'suihua'
        },
        {
          value: '大兴安岭地区',
          label: '大兴安岭地区',
          child: [],
          name: 'daxinganling'
        }
      ],
      name: 'heilongjiang'
    },
    {
      label: '上海市',
      value: '上海市',
      child: [
        {
          value: '黄浦区',
          label: '黄浦区',
          child: [],
          name: 'huangpu'
        },
        {
          value: '徐汇区',
          label: '徐汇区',
          child: [],
          name: 'xuhui'
        },
        {
          value: '长宁区',
          label: '长宁区',
          child: [],
          name: 'changning'
        },
        {
          value: '静安区',
          label: '静安区',
          child: [],
          name: 'jingan'
        },
        {
          value: '普陀区',
          label: '普陀区',
          child: [],
          name: 'putuo'
        },
        {
          value: '虹口区',
          label: '虹口区',
          child: [],
          name: 'hongkou'
        },
        {
          value: '杨浦区',
          label: '杨浦区',
          child: [],
          name: 'yangpu'
        },
        {
          value: '闵行区',
          label: '闵行区',
          child: [],
          name: 'minhang'
        },
        {
          value: '宝山区',
          label: '宝山区',
          child: [],
          name: 'baoshan'
        },
        {
          value: '嘉定区',
          label: '嘉定区',
          child: [],
          name: 'jiading'
        },
        {
          value: '浦东新区',
          label: '浦东新区',
          child: [],
          name: 'pudong'
        },
        {
          value: '金山区',
          label: '金山区',
          child: [],
          name: 'jinshan'
        },
        {
          value: '松江区',
          label: '松江区',
          child: [],
          name: 'songjiang'
        },
        {
          value: '青浦区',
          label: '青浦区',
          child: [],
          name: 'qingpu'
        },
        {
          value: '奉贤区',
          label: '奉贤区',
          child: [],
          name: 'fengxian'
        },
        {
          value: '崇明区',
          label: '崇明区',
          child: [],
          name: 'chongming'
        }
      ],
      name: 'shanghai'
    },
    {
      label: '江苏省',
      value: '江苏省',
      child: [
        {
          value: '南京市',
          label: '南京市',
          child: [],
          name: 'nanjing'
        },
        {
          value: '无锡市',
          label: '无锡市',
          child: [],
          name: 'wuxi'
        },
        {
          value: '徐州市',
          label: '徐州市',
          child: [],
          name: 'xuzhou'
        },
        {
          value: '常州市',
          label: '常州市',
          child: [],
          name: 'changzhou'
        },
        {
          value: '苏州市',
          label: '苏州市',
          child: [],
          name: 'suzhou'
        },
        {
          value: '南通市',
          label: '南通市',
          child: [],
          name: 'nantong'
        },
        {
          value: '连云港市',
          label: '连云港市',
          child: [],
          name: 'lianyungang'
        },
        {
          value: '淮安市',
          label: '淮安市',
          child: [],
          name: 'huaian'
        },
        {
          value: '盐城市',
          label: '盐城市',
          child: [],
          name: 'yancheng'
        },
        {
          value: '扬州市',
          label: '扬州市',
          child: [],
          name: 'yangzhou'
        },
        {
          value: '镇江市',
          label: '镇江市',
          child: [],
          name: 'zhenjiang'
        },
        {
          value: '泰州市',
          label: '泰州市',
          child: [],
          name: 'taizhou'
        },
        {
          value: '宿迁市',
          label: '宿迁市',
          child: [],
          name: 'suqian'
        }
      ],
      name: 'jiangsu'
    },
    {
      label: '浙江省',
      value: '浙江省',
      child: [
        {
          value: '杭州市',
          label: '杭州市',
          child: [],
          name: 'hangzhou'
        },
        {
          value: '宁波市',
          label: '宁波市',
          child: [],
          name: 'ningbo'
        },
        {
          value: '温州市',
          label: '温州市',
          child: [],
          name: 'wenzhou'
        },
        {
          value: '嘉兴市',
          label: '嘉兴市',
          child: [],
          name: 'jiaxing'
        },
        {
          value: '湖州市',
          label: '湖州市',
          child: [],
          name: 'huzhou'
        },
        {
          value: '绍兴市',
          label: '绍兴市',
          child: [],
          name: 'shaoxing'
        },
        {
          value: '金华市',
          label: '金华市',
          child: [],
          name: 'jinhua'
        },
        {
          value: '衢州市',
          label: '衢州市',
          child: [],
          name: 'quzhou'
        },
        {
          value: '舟山市',
          label: '舟山市',
          child: [],
          name: 'zhoushan'
        },
        {
          value: '台州市',
          label: '台州市',
          child: [],
          name: 'taizhou'
        },
        {
          value: '丽水市',
          label: '丽水市',
          child: [],
          name: 'lishui'
        }
      ],
      name: 'zhejiang'
    },
    {
      label: '安徽省',
      value: '安徽省',
      child: [
        {
          value: '合肥市',
          label: '合肥市',
          child: [],
          name: 'hefei'
        },
        {
          value: '芜湖市',
          label: '芜湖市',
          child: [],
          name: 'wuhu'
        },
        {
          value: '蚌埠市',
          label: '蚌埠市',
          child: [],
          name: 'bengbu'
        },
        {
          value: '淮南市',
          label: '淮南市',
          child: [],
          name: 'huainan'
        },
        {
          value: '马鞍山市',
          label: '马鞍山市',
          child: [],
          name: 'maanshan'
        },
        {
          value: '淮北市',
          label: '淮北市',
          child: [],
          name: 'huaibei'
        },
        {
          value: '铜陵市',
          label: '铜陵市',
          child: [],
          name: 'tongling'
        },
        {
          value: '安庆市',
          label: '安庆市',
          child: [],
          name: 'anqing'
        },
        {
          value: '黄山市',
          label: '黄山市',
          child: [],
          name: 'huangshan'
        },
        {
          value: '滁州市',
          label: '滁州市',
          child: [],
          name: 'chuzhou'
        },
        {
          value: '阜阳市',
          label: '阜阳市',
          child: [],
          name: 'fuyang'
        },
        {
          value: '宿州市',
          label: '宿州市',
          child: [],
          name: 'suzhou'
        },
        {
          value: '六安市',
          label: '六安市',
          child: [],
          name: 'liuan'
        },
        {
          value: '亳州市',
          label: '亳州市',
          child: [],
          name: 'bozhou'
        },
        {
          value: '池州市',
          label: '池州市',
          child: [],
          name: 'chizhou'
        },
        {
          value: '宣城市',
          label: '宣城市',
          child: [],
          name: 'xuancheng'
        }
      ],
      name: 'anhui'
    },
    {
      label: '福建省',
      value: '福建省',
      child: [
        {
          value: '福州市',
          label: '福州市',
          child: [],
          name: 'fuzhou'
        },
        {
          value: '厦门市',
          label: '厦门市',
          child: [],
          name: 'xiamen'
        },
        {
          value: '莆田市',
          label: '莆田市',
          child: [],
          name: 'putian'
        },
        {
          value: '三明市',
          label: '三明市',
          child: [],
          name: 'sanming'
        },
        {
          value: '泉州市',
          label: '泉州市',
          child: [],
          name: 'quanzhou'
        },
        {
          value: '漳州市',
          label: '漳州市',
          child: [],
          name: 'zhangzhou'
        },
        {
          value: '南平市',
          label: '南平市',
          child: [],
          name: 'nanping'
        },
        {
          value: '龙岩市',
          label: '龙岩市',
          child: [],
          name: 'longyan'
        },
        {
          value: '宁德市',
          label: '宁德市',
          child: [],
          name: 'ningde'
        }
      ],
      name: 'fujian'
    },
    {
      label: '江西省',
      value: '江西省',
      child: [
        {
          value: '南昌市',
          label: '南昌市',
          child: [],
          name: 'nanchang'
        },
        {
          value: '景德镇市',
          label: '景德镇市',
          child: [],
          name: 'jingdezhen'
        },
        {
          value: '萍乡市',
          label: '萍乡市',
          child: [],
          name: 'pingxiang'
        },
        {
          value: '九江市',
          label: '九江市',
          child: [],
          name: 'jiujiang'
        },
        {
          value: '新余市',
          label: '新余市',
          child: [],
          name: 'xinyu'
        },
        {
          value: '鹰潭市',
          label: '鹰潭市',
          child: [],
          name: 'yingtan'
        },
        {
          value: '赣州市',
          label: '赣州市',
          child: [],
          name: 'ganzhou'
        },
        {
          value: '吉安市',
          label: '吉安市',
          child: [],
          name: 'jian'
        },
        {
          value: '宜春市',
          label: '宜春市',
          child: [],
          name: 'yichun'
        },
        {
          value: '抚州市',
          label: '抚州市',
          child: [],
          name: 'fuzhou'
        },
        {
          value: '上饶市',
          label: '上饶市',
          child: [],
          name: 'shangrao'
        }
      ],
      name: 'jiangxi'
    },
    {
      label: '山东省',
      value: '山东省',
      child: [
        {
          value: '济南市',
          label: '济南市',
          child: [],
          name: 'jinan'
        },
        {
          value: '青岛市',
          label: '青岛市',
          child: [],
          name: 'qingdao'
        },
        {
          value: '淄博市',
          label: '淄博市',
          child: [],
          name: 'zibo'
        },
        {
          value: '枣庄市',
          label: '枣庄市',
          child: [],
          name: 'zaozhuang'
        },
        {
          value: '东营市',
          label: '东营市',
          child: [],
          name: 'dongying'
        },
        {
          value: '烟台市',
          label: '烟台市',
          child: [],
          name: 'yantai'
        },
        {
          value: '潍坊市',
          label: '潍坊市',
          child: [],
          name: 'weifang'
        },
        {
          value: '济宁市',
          label: '济宁市',
          child: [],
          name: 'jiningshi'
        },
        {
          value: '泰安市',
          label: '泰安市',
          child: [],
          name: 'taian'
        },
        {
          value: '威海市',
          label: '威海市',
          child: [],
          name: 'weihai'
        },
        {
          value: '日照市',
          label: '日照市',
          child: [],
          name: 'rizhao'
        },
        {
          value: '临沂市',
          label: '临沂市',
          child: [],
          name: 'linyi'
        },
        {
          value: '德州市',
          label: '德州市',
          child: [],
          name: 'dezhou'
        },
        {
          value: '聊城市',
          label: '聊城市',
          child: [],
          name: 'liaocheng'
        },
        {
          value: '滨州市',
          label: '滨州市',
          child: [],
          name: 'binzhou'
        },
        {
          value: '菏泽市',
          label: '菏泽市',
          child: [],
          name: 'heze'
        }
      ],
      name: 'shandong'
    },
    {
      label: '河南省',
      value: '河南省',
      child: [
        {
          value: '郑州市',
          label: '郑州市',
          child: [],
          name: 'zhengzhou'
        },
        {
          value: '开封市',
          label: '开封市',
          child: [],
          name: 'kaifeng'
        },
        {
          value: '洛阳市',
          label: '洛阳市',
          child: [],
          name: 'luoyang'
        },
        {
          value: '平顶山市',
          label: '平顶山市',
          child: [],
          name: 'pingdingshan'
        },
        {
          value: '安阳市',
          label: '安阳市',
          child: [],
          name: 'anyang'
        },
        {
          value: '鹤壁市',
          label: '鹤壁市',
          child: [],
          name: 'hebi'
        },
        {
          value: '新乡市',
          label: '新乡市',
          child: [],
          name: 'xinxiang'
        },
        {
          value: '焦作市',
          label: '焦作市',
          child: [],
          name: 'jiaozuo'
        },
        {
          value: '濮阳市',
          label: '濮阳市',
          child: [],
          name: 'puyang'
        },
        {
          value: '许昌市',
          label: '许昌市',
          child: [],
          name: 'xuchang'
        },
        {
          value: '漯河市',
          label: '漯河市',
          child: [],
          name: 'luohe'
        },
        {
          value: '三门峡市',
          label: '三门峡市',
          child: [],
          name: 'sanmenxia'
        },
        {
          value: '南阳市',
          label: '南阳市',
          child: [],
          name: 'nanyang'
        },
        {
          value: '商丘市',
          label: '商丘市',
          child: [],
          name: 'shangqiu'
        },
        {
          value: '信阳市',
          label: '信阳市',
          child: [],
          name: 'xinyang'
        },
        {
          value: '周口市',
          label: '周口市',
          child: [],
          name: 'zhoukou'
        },
        {
          value: '驻马店市',
          label: '驻马店市',
          child: [],
          name: 'zhumadian'
        },
        {
          value: '济源市',
          label: '济源市',
          child: [],
          name: 'jiyuan'
        }
      ],
      name: 'henan'
    },
    {
      label: '湖北省',
      value: '湖北省',
      child: [
        {
          value: '武汉市',
          label: '武汉市',
          child: [],
          name: 'wuhan'
        },
        {
          value: '黄石市',
          label: '黄石市',
          child: [],
          name: 'huangshi'
        },
        {
          value: '十堰市',
          label: '十堰市',
          child: [],
          name: 'shiyan'
        },
        {
          value: '宜昌市',
          label: '宜昌市',
          child: [],
          name: 'yichang'
        },
        {
          value: '襄阳市',
          label: '襄阳市',
          child: [],
          name: 'xiangyang'
        },
        {
          value: '鄂州市',
          label: '鄂州市',
          child: [],
          name: 'ezhou'
        },
        {
          value: '荆门市',
          label: '荆门市',
          child: [],
          name: 'jingmen'
        },
        {
          value: '孝感市',
          label: '孝感市',
          child: [],
          name: 'xiaogan'
        },
        {
          value: '荆州市',
          label: '荆州市',
          child: [],
          name: 'jingzhou'
        },
        {
          value: '黄冈市',
          label: '黄冈市',
          child: [],
          name: 'huanggang'
        },
        {
          value: '咸宁市',
          label: '咸宁市',
          child: [],
          name: 'xianning'
        },
        {
          value: '随州市',
          label: '随州市',
          child: [],
          name: 'suizhou'
        },
        {
          value: '恩施土家族苗族自治州',
          label: '恩施土家族苗族自治州',
          child: [],
          name: 'enshitujiazumiaozuzizhizhou'
        },
        {
          value: '仙桃市',
          label: '仙桃市',
          child: [],
          name: 'xiantao'
        },
        {
          value: '潜江市',
          label: '潜江市',
          child: [],
          name: 'qianjiang'
        },
        {
          value: '天门市',
          label: '天门市',
          child: [],
          name: 'tianmen'
        },
        {
          value: '神农架林区',
          label: '神农架林区',
          child: [],
          name: 'shennongjialinqu'
        }
      ],
      name: 'hubei'
    },
    {
      label: '湖南省',
      value: '湖南省',
      child: [
        {
          value: '长沙市',
          label: '长沙市',
          child: [],
          name: 'changsha'
        },
        {
          value: '株洲市',
          label: '株洲市',
          child: [],
          name: 'zhuzhou'
        },
        {
          value: '湘潭市',
          label: '湘潭市',
          child: [],
          name: 'xiangtan'
        },
        {
          value: '衡阳市',
          label: '衡阳市',
          child: [],
          name: 'hengyang'
        },
        {
          value: '邵阳市',
          label: '邵阳市',
          child: [],
          name: 'shaoyang'
        },
        {
          value: '岳阳市',
          label: '岳阳市',
          child: [],
          name: 'yueyang'
        },
        {
          value: '常德市',
          label: '常德市',
          child: [],
          name: 'changde'
        },
        {
          value: '张家界市',
          label: '张家界市',
          child: [],
          name: 'zhangjiajie'
        },
        {
          value: '益阳市',
          label: '益阳市',
          child: [],
          name: 'yiyang'
        },
        {
          value: '郴州市',
          label: '郴州市',
          child: [],
          name: 'chenzhou'
        },
        {
          value: '永州市',
          label: '永州市',
          child: [],
          name: 'yongzhou'
        },
        {
          value: '怀化市',
          label: '怀化市',
          child: [],
          name: 'huaihua'
        },
        {
          value: '娄底市',
          label: '娄底市',
          child: [],
          name: 'loudi'
        },
        {
          value: '湘西土家族苗族自治州',
          label: '湘西土家族苗族自治州',
          child: [],
          name: 'xiangxitujiazumiaozuzizhizhou'
        }
      ],
      name: 'hunan'
    },
    {
      label: '广东省',
      value: '广东省',
      child: [
        {
          value: '广州市',
          label: '广州市',
          child: [],
          name: 'guangzhou'
        },
        {
          value: '韶关市',
          label: '韶关市',
          child: [],
          name: 'shaoguan'
        },
        {
          value: '深圳市',
          label: '深圳市',
          child: [],
          name: 'shenzhen'
        },
        {
          value: '珠海市',
          label: '珠海市',
          child: [],
          name: 'zhuhai'
        },
        {
          value: '汕头市',
          label: '汕头市',
          child: [],
          name: 'shantou'
        },
        {
          value: '佛山市',
          label: '佛山市',
          child: [],
          name: 'foshan'
        },
        {
          value: '江门市',
          label: '江门市',
          child: [],
          name: 'jiangmen'
        },
        {
          value: '湛江市',
          label: '湛江市',
          child: [],
          name: 'zhanjiang'
        },
        {
          value: '茂名市',
          label: '茂名市',
          child: [],
          name: 'maoming'
        },
        {
          value: '肇庆市',
          label: '肇庆市',
          child: [],
          name: 'zhaoqing'
        },
        {
          value: '惠州市',
          label: '惠州市',
          child: [],
          name: 'huizhou'
        },
        {
          value: '梅州市',
          label: '梅州市',
          child: [],
          name: 'meizhou'
        },
        {
          value: '汕尾市',
          label: '汕尾市',
          child: [],
          name: 'shanwei'
        },
        {
          value: '河源市',
          label: '河源市',
          child: [],
          name: 'heyuan'
        },
        {
          value: '阳江市',
          label: '阳江市',
          child: [],
          name: 'yangjiang'
        },
        {
          value: '清远市',
          label: '清远市',
          child: [],
          name: 'qingyuan'
        },
        {
          value: '东莞市',
          label: '东莞市',
          child: [],
          name: 'dongguan'
        },
        {
          value: '中山市',
          label: '中山市',
          child: [],
          name: 'zhongshan'
        },
        {
          value: '潮州市',
          label: '潮州市',
          child: [],
          name: 'chaozhou'
        },
        {
          value: '揭阳市',
          label: '揭阳市',
          child: [],
          name: 'jieyang'
        },
        {
          value: '云浮市',
          label: '云浮市',
          child: [],
          name: 'yunfu'
        }
      ],
      name: 'guangdong'
    },
    {
      label: '广西壮族自治区',
      value: '广西壮族自治区',
      child: [
        {
          value: '南宁市',
          label: '南宁市',
          child: [],
          name: 'nanning'
        },
        {
          value: '柳州市',
          label: '柳州市',
          child: [],
          name: 'liuzhou'
        },
        {
          value: '桂林市',
          label: '桂林市',
          child: [],
          name: 'guilin'
        },
        {
          value: '梧州市',
          label: '梧州市',
          child: [],
          name: 'wuzhou'
        },
        {
          value: '北海市',
          label: '北海市',
          child: [],
          name: 'beihai'
        },
        {
          value: '防城港市',
          label: '防城港市',
          child: [],
          name: 'fangchenggang'
        },
        {
          value: '钦州市',
          label: '钦州市',
          child: [],
          name: 'qinzhou'
        },
        {
          value: '贵港市',
          label: '贵港市',
          child: [],
          name: 'guigang'
        },
        {
          value: '玉林市',
          label: '玉林市',
          child: [],
          name: 'yulin'
        },
        {
          value: '百色市',
          label: '百色市',
          child: [],
          name: 'baise'
        },
        {
          value: '贺州市',
          label: '贺州市',
          child: [],
          name: 'hezhou'
        },
        {
          value: '河池市',
          label: '河池市',
          child: [],
          name: 'hechi'
        },
        {
          value: '来宾市',
          label: '来宾市',
          child: [],
          name: 'laibin'
        },
        {
          value: '崇左市',
          label: '崇左市',
          child: [],
          name: 'chongzuo'
        }
      ],
      name: 'guangxi'
    },
    {
      label: '海南省',
      value: '海南省',
      child: [
        {
          value: '海口市',
          label: '海口市',
          child: [],
          name: 'haikou'
        },
        {
          value: '三亚市',
          label: '三亚市',
          child: [],
          name: 'sanya'
        },
        {
          value: '三沙市',
          label: '三沙市',
          child: [],
          name: 'sansha'
        },
        {
          value: '儋州市',
          label: '儋州市',
          child: [],
          name: 'danzhou'
        },
        {
          value: '五指山市',
          label: '五指山市',
          child: [],
          name: 'wuzhishan'
        },
        {
          value: '琼海市',
          label: '琼海市',
          child: [],
          name: 'qionghai'
        },
        {
          value: '文昌市',
          label: '文昌市',
          child: [],
          name: 'wenchang'
        },
        {
          value: '万宁市',
          label: '万宁市',
          child: [],
          name: 'wanning'
        },
        {
          value: '东方市',
          label: '东方市',
          child: [],
          name: 'dongfang'
        },
        {
          value: '定安县',
          label: '定安县',
          child: [],
          name: 'dingan'
        },
        {
          value: '屯昌县',
          label: '屯昌县',
          child: [],
          name: 'tunchang'
        },
        {
          value: '澄迈县',
          label: '澄迈县',
          child: [],
          name: 'chengmai'
        },
        {
          value: '临高县',
          label: '临高县',
          child: [],
          name: 'lingao'
        },
        {
          value: '白沙黎族自治县',
          label: '白沙黎族自治县',
          child: [],
          name: 'baisha'
        },
        {
          value: '昌江黎族自治县',
          label: '昌江黎族自治县',
          child: [],
          name: 'changjiang'
        },
        {
          value: '乐东黎族自治县',
          label: '乐东黎族自治县',
          child: [],
          name: 'ledong'
        },
        {
          value: '陵水黎族自治县',
          label: '陵水黎族自治县',
          child: [],
          name: 'lingshui'
        },
        {
          value: '保亭黎族苗族自治县',
          label: '保亭黎族苗族自治县',
          child: [],
          name: 'baoting'
        },
        {
          value: '琼中黎族苗族自治县',
          label: '琼中黎族苗族自治县',
          child: [],
          name: 'qiongzhong'
        }
      ],
      name: 'hainan'
    },
    {
      label: '重庆市',
      value: '重庆市',
      child: [
        {
          value: '万州区',
          label: '万州区',
          child: [],
          name: 'wanzhou'
        },
        {
          value: '涪陵区',
          label: '涪陵区',
          child: [],
          name: 'fuling'
        },
        {
          value: '渝中区',
          label: '渝中区',
          child: [],
          name: 'yuzhong'
        },
        {
          value: '大渡口区',
          label: '大渡口区',
          child: [],
          name: 'dadukou'
        },
        {
          value: '江北区',
          label: '江北区',
          child: [],
          name: 'jiangbei'
        },
        {
          value: '沙坪坝区',
          label: '沙坪坝区',
          child: [],
          name: 'shapingba'
        },
        {
          value: '九龙坡区',
          label: '九龙坡区',
          child: [],
          name: 'jiulongpo'
        },
        {
          value: '南岸区',
          label: '南岸区',
          child: [],
          name: 'nanan'
        },
        {
          value: '北碚区',
          label: '北碚区',
          child: [],
          name: 'beibei'
        },
        {
          value: '綦江区',
          label: '綦江区',
          child: [],
          name: 'qijiang'
        },
        {
          value: '大足区',
          label: '大足区',
          child: [],
          name: 'dazu'
        },
        {
          value: '渝北区',
          label: '渝北区',
          child: [],
          name: 'yubei'
        },
        {
          value: '巴南区',
          label: '巴南区',
          child: [],
          name: 'banan'
        },
        {
          value: '黔江区',
          label: '黔江区',
          child: [],
          name: 'qianjiang'
        },
        {
          value: '长寿区',
          label: '长寿区',
          child: [],
          name: 'changshou'
        },
        {
          value: '江津区',
          label: '江津区',
          child: [],
          name: 'jiangjin'
        },
        {
          value: '合川区',
          label: '合川区',
          child: [],
          name: 'hechuan'
        },
        {
          value: '永川区',
          label: '永川区',
          child: [],
          name: 'yongchuan'
        },
        {
          value: '南川区',
          label: '南川区',
          child: [],
          name: 'nanchuan'
        },
        {
          value: '璧山区',
          label: '璧山区',
          child: [],
          name: 'bishan'
        },
        {
          value: '铜梁区',
          label: '铜梁区',
          child: [],
          name: 'tongliang'
        },
        {
          value: '潼南区',
          label: '潼南区',
          child: [],
          name: 'tongnan'
        },
        {
          value: '荣昌区',
          label: '荣昌区',
          child: [],
          name: 'rongchang'
        },
        {
          value: '开州区',
          label: '开州区',
          child: [],
          name: 'kaizhou'
        },
        {
          value: '梁平区',
          label: '梁平区',
          child: [],
          name: 'liangping'
        },
        {
          value: '武隆区',
          label: '武隆区',
          child: [],
          name: 'wulong'
        },
        {
          value: '城口县',
          label: '城口县',
          child: [],
          name: 'chengkou'
        },
        {
          value: '丰都县',
          label: '丰都县',
          child: [],
          name: 'fengdu'
        },
        {
          value: '垫江县',
          label: '垫江县',
          child: [],
          name: 'dianjiang'
        },
        {
          value: '忠县',
          label: '忠县',
          child: [],
          name: 'zhongxian'
        },
        {
          value: '云阳县',
          label: '云阳县',
          child: [],
          name: 'yunyang'
        },
        {
          value: '奉节县',
          label: '奉节县',
          child: [],
          name: 'fengjie'
        },
        {
          value: '巫山县',
          label: '巫山县',
          child: [],
          name: 'wushan'
        },
        {
          value: '巫溪县',
          label: '巫溪县',
          child: [],
          name: 'wuxi'
        },
        {
          value: '石柱土家族自治县',
          label: '石柱土家族自治县',
          child: [],
          name: 'shizhu'
        },
        {
          value: '秀山土家族苗族自治县',
          label: '秀山土家族苗族自治县',
          child: [],
          name: 'xiushan'
        },
        {
          value: '酉阳土家族苗族自治县',
          label: '酉阳土家族苗族自治县',
          child: [],
          name: 'youyang'
        },
        {
          value: '彭水苗族土家族自治县',
          label: '彭水苗族土家族自治县',
          child: [],
          name: 'pengshui'
        }
      ],
      name: 'chongqing'
    },
    {
      label: '四川省',
      value: '四川省',
      child: [
        {
          value: '成都市',
          label: '成都市',
          child: [],
          name: 'chengdu'
        },
        {
          value: '自贡市',
          label: '自贡市',
          child: [],
          name: 'zigong'
        },
        {
          value: '攀枝花市',
          label: '攀枝花市',
          child: [],
          name: 'panzhihua'
        },
        {
          value: '泸州市',
          label: '泸州市',
          child: [],
          name: 'luzhou'
        },
        {
          value: '德阳市',
          label: '德阳市',
          child: [],
          name: 'deyang'
        },
        {
          value: '绵阳市',
          label: '绵阳市',
          child: [],
          name: 'mianyang'
        },
        {
          value: '广元市',
          label: '广元市',
          child: [],
          name: 'guangyuan'
        },
        {
          value: '遂宁市',
          label: '遂宁市',
          child: [],
          name: 'suining'
        },
        {
          value: '内江市',
          label: '内江市',
          child: [],
          name: 'neijiang'
        },
        {
          value: '乐山市',
          label: '乐山市',
          child: [],
          name: 'leshan'
        },
        {
          value: '南充市',
          label: '南充市',
          child: [],
          name: 'nanchong'
        },
        {
          value: '眉山市',
          label: '眉山市',
          child: [],
          name: 'meishan'
        },
        {
          value: '宜宾市',
          label: '宜宾市',
          child: [],
          name: 'yibin'
        },
        {
          value: '广安市',
          label: '广安市',
          child: [],
          name: 'guangan'
        },
        {
          value: '达州市',
          label: '达州市',
          child: [],
          name: 'dazhou'
        },
        {
          value: '雅安市',
          label: '雅安市',
          child: [],
          name: 'yaan'
        },
        {
          value: '巴中市',
          label: '巴中市',
          child: [],
          name: 'bazhong'
        },
        {
          value: '资阳市',
          label: '资阳市',
          child: [],
          name: 'ziyang'
        },
        {
          value: '阿坝藏族羌族自治州',
          label: '阿坝藏族羌族自治州',
          child: [],
          name: 'aba'
        },
        {
          value: '甘孜藏族自治州',
          label: '甘孜藏族自治州',
          child: [],
          name: 'ganzi'
        },
        {
          value: '凉山彝族自治州',
          label: '凉山彝族自治州',
          child: [],
          name: 'liangshan'
        }
      ],
      name: 'sichuan'
    },
    {
      label: '贵州省',
      value: '贵州省',
      child: [
        {
          value: '贵阳市',
          label: '贵阳市',
          child: [],
          name: 'guiyang'
        },
        {
          value: '六盘水市',
          label: '六盘水市',
          child: [],
          name: 'liupanshui'
        },
        {
          value: '遵义市',
          label: '遵义市',
          child: [],
          name: 'zunyi'
        },
        {
          value: '安顺市',
          label: '安顺市',
          child: [],
          name: 'anshun'
        },
        {
          value: '毕节市',
          label: '毕节市',
          child: [],
          name: 'bijie'
        },
        {
          value: '铜仁市',
          label: '铜仁市',
          child: [],
          name: 'tongren'
        },
        {
          value: '黔西南布依族苗族自治州',
          label: '黔西南布依族苗族自治州',
          child: [],
          name: 'qianxinan'
        },
        {
          value: '黔东南苗族侗族自治州',
          label: '黔东南苗族侗族自治州',
          child: [],
          name: 'qiandongnan'
        },
        {
          value: '黔南布依族苗族自治州',
          label: '黔南布依族苗族自治州',
          child: [],
          name: 'qiannan'
        }
      ],
      name: 'guizhou'
    },
    {
      label: '云南省',
      value: '云南省',
      child: [
        {
          value: '昆明市',
          label: '昆明市',
          child: [],
          name: 'kunming'
        },
        {
          value: '曲靖市',
          label: '曲靖市',
          child: [],
          name: 'qujing'
        },
        {
          value: '玉溪市',
          label: '玉溪市',
          child: [],
          name: 'yuxi'
        },
        {
          value: '保山市',
          label: '保山市',
          child: [],
          name: 'baoshan'
        },
        {
          value: '昭通市',
          label: '昭通市',
          child: [],
          name: 'zhaotong'
        },
        {
          value: '丽江市',
          label: '丽江市',
          child: [],
          name: 'lijiang'
        },
        {
          value: '普洱市',
          label: '普洱市',
          child: [],
          name: 'puer'
        },
        {
          value: '临沧市',
          label: '临沧市',
          child: [],
          name: 'lincang'
        },
        {
          value: '楚雄彝族自治州',
          label: '楚雄彝族自治州',
          child: [],
          name: 'chuxiong'
        },
        {
          value: '红河哈尼族彝族自治州',
          label: '红河哈尼族彝族自治州',
          child: [],
          name: 'honghe'
        },
        {
          value: '文山壮族苗族自治州',
          label: '文山壮族苗族自治州',
          child: [],
          name: 'wenshan'
        },
        {
          value: '西双版纳傣族自治州',
          label: '西双版纳傣族自治州',
          child: [],
          name: 'xishuangbanna'
        },
        {
          value: '大理白族自治州',
          label: '大理白族自治州',
          child: [],
          name: 'dali'
        },
        {
          value: '德宏傣族景颇族自治州',
          label: '德宏傣族景颇族自治州',
          child: [],
          name: 'dehong'
        },
        {
          value: '怒江傈僳族自治州',
          label: '怒江傈僳族自治州',
          child: [],
          name: 'nujiang'
        },
        {
          value: '迪庆藏族自治州',
          label: '迪庆藏族自治州',
          child: [],
          name: 'diqing'
        }
      ],
      name: 'yunnan'
    },
    {
      label: '西藏自治区',
      value: '西藏自治区',
      child: [
        {
          value: '拉萨市',
          label: '拉萨市',
          child: [],
          name: 'lasa'
        },
        {
          value: '日喀则市',
          label: '日喀则市',
          child: [],
          name: 'rikaze'
        },
        {
          value: '昌都市',
          label: '昌都市',
          child: [],
          name: 'changdu'
        },
        {
          value: '林芝市',
          label: '林芝市',
          child: [],
          name: 'linzhi'
        },
        {
          value: '山南市',
          label: '山南市',
          child: [],
          name: 'shannan'
        },
        {
          value: '那曲市',
          label: '那曲市',
          child: [],
          name: 'naqu'
        },
        {
          value: '阿里地区',
          label: '阿里地区',
          child: [],
          name: 'ali'
        }
      ],
      name: 'xizang'
    },
    {
      label: '陕西省',
      value: '陕西省',
      child: [
        {
          value: '西安市',
          label: '西安市',
          child: [],
          name: 'xian'
        },
        {
          value: '铜川市',
          label: '铜川市',
          child: [],
          name: 'tongchuan'
        },
        {
          value: '宝鸡市',
          label: '宝鸡市',
          child: [],
          name: 'baoji'
        },
        {
          value: '咸阳市',
          label: '咸阳市',
          child: [],
          name: 'xianyang'
        },
        {
          value: '渭南市',
          label: '渭南市',
          child: [],
          name: 'weinan'
        },
        {
          value: '延安市',
          label: '延安市',
          child: [],
          name: 'yanan'
        },
        {
          value: '汉中市',
          label: '汉中市',
          child: [],
          name: 'hanzhong'
        },
        {
          value: '榆林市',
          label: '榆林市',
          child: [],
          name: 'yulin'
        },
        {
          value: '安康市',
          label: '安康市',
          child: [],
          name: 'ankang'
        },
        {
          value: '商洛市',
          label: '商洛市',
          child: [],
          name: 'shangluo'
        }
      ],
      name: 'shanxi'
    },
    {
      label: '甘肃省',
      value: '甘肃省',
      child: [
        {
          value: '兰州市',
          label: '兰州市',
          child: [],
          name: 'lanzhou'
        },
        {
          value: '嘉峪关市',
          label: '嘉峪关市',
          child: [],
          name: 'jiayuguan'
        },
        {
          value: '金昌市',
          label: '金昌市',
          child: [],
          name: 'jinchang'
        },
        {
          value: '白银市',
          label: '白银市',
          child: [],
          name: 'baiyin'
        },
        {
          value: '天水市',
          label: '天水市',
          child: [],
          name: 'tianshui'
        },
        {
          value: '武威市',
          label: '武威市',
          child: [],
          name: 'wuwei'
        },
        {
          value: '张掖市',
          label: '张掖市',
          child: [],
          name: 'zhangye'
        },
        {
          value: '平凉市',
          label: '平凉市',
          child: [],
          name: 'pingliang'
        },
        {
          value: '酒泉市',
          label: '酒泉市',
          child: [],
          name: 'jiuquan'
        },
        {
          value: '庆阳市',
          label: '庆阳市',
          child: [],
          name: 'qingyang'
        },
        {
          value: '定西市',
          label: '定西市',
          child: [],
          name: 'dingxi'
        },
        {
          value: '陇南市',
          label: '陇南市',
          child: [],
          name: 'longnan'
        },
        {
          value: '临夏回族自治州',
          label: '临夏回族自治州',
          child: [],
          name: 'linxia'
        },
        {
          value: '甘南藏族自治州',
          label: '甘南藏族自治州',
          child: [],
          name: 'gannan'
        }
      ],
      name: 'gansu'
    },
    {
      label: '青海省',
      value: '青海省',
      child: [
        {
          value: '兰州市',
          label: '兰州市',
          child: [],
          name: 'lanzhou'
        },
        {
          value: '嘉峪关市',
          label: '嘉峪关市',
          child: [],
          name: 'jiayuguan'
        },
        {
          value: '金昌市',
          label: '金昌市',
          child: [],
          name: 'jinchang'
        },
        {
          value: '白银市',
          label: '白银市',
          child: [],
          name: 'baiyin'
        },
        {
          value: '天水市',
          label: '天水市',
          child: [],
          name: 'tianshui'
        },
        {
          value: '武威市',
          label: '武威市',
          child: [],
          name: 'wuwei'
        },
        {
          value: '张掖市',
          label: '张掖市',
          child: [],
          name: 'zhangye'
        },
        {
          value: '平凉市',
          label: '平凉市',
          child: [],
          name: 'pingliang'
        },
        {
          value: '酒泉市',
          label: '酒泉市',
          child: [],
          name: 'jiuquan'
        },
        {
          value: '庆阳市',
          label: '庆阳市',
          child: [],
          name: 'qingyang'
        },
        {
          value: '定西市',
          label: '定西市',
          child: [],
          name: 'dingxi'
        },
        {
          value: '陇南市',
          label: '陇南市',
          child: [],
          name: 'longnan'
        },
        {
          value: '临夏回族自治州',
          label: '临夏回族自治州',
          child: [],
          name: 'linxia'
        },
        {
          value: '甘南藏族自治州',
          label: '甘南藏族自治州',
          child: [],
          name: 'gannan'
        }
      ],
      name: 'qinghai'
    },
    {
      label: '宁夏回族自治区',
      value: '宁夏回族自治区',
      child: [
        {
          value: '银川市',
          label: '银川市',
          child: [],
          name: 'yinchuan'
        },
        {
          value: '石嘴山市',
          label: '石嘴山市',
          child: [],
          name: 'shizuishan'
        },
        {
          value: '吴忠市',
          label: '吴忠市',
          child: [],
          name: 'wuzhong'
        },
        {
          value: '固原市',
          label: '固原市',
          child: [],
          name: 'guyuan'
        },
        {
          value: '中卫市',
          label: '中卫市',
          child: [],
          name: 'zhongwei'
        }
      ],
      name: 'ningxia'
    },
    {
      label: '新疆维吾尔自治区',
      value: '新疆维吾尔自治区',
      child: [
        {
          value: '乌鲁木齐市',
          label: '乌鲁木齐市',
          child: [],
          name: 'wulumuqi'
        },
        {
          value: '克拉玛依市',
          label: '克拉玛依市',
          child: [],
          name: 'kelamayi'
        },
        {
          value: '吐鲁番市',
          label: '吐鲁番市',
          child: [],
          name: 'tulufan'
        },
        {
          value: '哈密市',
          label: '哈密市',
          child: [],
          name: 'hami'
        },
        {
          value: '昌吉回族自治州',
          label: '昌吉回族自治州',
          child: [],
          name: 'changji'
        },
        {
          value: '博尔塔拉蒙古自治州',
          label: '博尔塔拉蒙古自治州',
          child: [],
          name: 'boertala'
        },
        {
          value: '巴音郭楞蒙古自治州',
          label: '巴音郭楞蒙古自治州',
          child: [],
          name: 'bayinguoleng'
        },
        {
          value: '阿克苏地区',
          label: '阿克苏地区',
          child: [],
          name: 'akesu'
        },
        {
          value: '克孜勒苏柯尔克孜自治州',
          label: '克孜勒苏柯尔克孜自治州',
          child: [],
          name: 'kezilesukeerkezi'
        },
        {
          value: '喀什地区',
          label: '喀什地区',
          child: [],
          name: 'kashi'
        },
        {
          value: '和田地区',
          label: '和田地区',
          child: [],
          name: 'hetian'
        },
        {
          value: '伊犁哈萨克自治州',
          label: '伊犁哈萨克自治州',
          child: [],
          name: 'yilihasakezizhizhou'
        },
        {
          value: '塔城地区',
          label: '塔城地区',
          child: [],
          name: 'tacheng'
        },
        {
          value: '阿勒泰地区',
          label: '阿勒泰地区',
          child: [],
          name: 'aletai'
        },
        {
          value: '石河子市',
          label: '石河子市',
          child: [],
          name: 'shihezi'
        },
        {
          value: '阿拉尔市',
          label: '阿拉尔市',
          child: [],
          name: 'alaer'
        },
        {
          value: '图木舒克市',
          label: '图木舒克市',
          child: [],
          name: 'tumushuke'
        },
        {
          value: '五家渠市',
          label: '五家渠市',
          child: [],
          name: 'wujiaqu'
        },
        {
          value: '北屯市',
          label: '北屯市',
          child: [],
          name: 'beitun'
        },
        {
          value: '铁门关市',
          label: '铁门关市',
          child: [],
          name: 'tiemenguan'
        },
        {
          value: '双河市',
          label: '双河市',
          child: [],
          name: 'shuanghe'
        },
        {
          value: '可克达拉市',
          label: '可克达拉市',
          child: [],
          name: 'kekedala'
        },
        {
          value: '昆玉市',
          label: '昆玉市',
          child: [],
          name: 'kunyu'
        },
        {
          value: '胡杨河市',
          label: '胡杨河市',
          child: [],
          name: 'huyanghe'
        },
        {
          value: '新星市',
          label: '新星市',
          child: [],
          name: 'xinxing'
        },
        {
          value: '白杨市',
          label: '白杨市',
          child: [],
          name: 'baiyang'
        }
      ],
      name: 'xinjiang'
    }
  ];
  const value3: any = ref('');
</script>
