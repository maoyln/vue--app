<template>
  <div class="content-box">
    <!-- <common-header :showinput="true" :showback="false"></common-header> -->
    <div class="page-content">
      <mt-navbar :fixed="true" v-model="selected">
        <mt-tab-item id="1" style="color: #fff;"><span style="fontSize: 18px">客户统计</span></mt-tab-item>
        <mt-tab-item id="2" style="color: #fff; fontSize: 20px"><span style="fontSize: 18px">用户拜访统计</span></mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <h3>—— 合作客户 ——</h3>
          <ul>
            <li>
              <p>20</p>
              <p><img src="../../assets/imgs/u53.png" title=""><span>电源侧提供商</span></p>
            </li>
             <li>
              <p>11</p>
              <p><img src="../../assets/imgs/u54.png" title=""><span>居间售电公司</span></p>
            </li>
             <li>
              <p>14</p>
              <p><img src="../../assets/imgs/u52.png" title=""><span>用电企业</span></p>
            </li>
          </ul>
          <h3>—— 潜在客户 ——</h3>
          <ul>
             <li>
              <p>20</p>
              <p><img src="../../assets/imgs/u53.png" title="" class="opcityimg"><span>电源侧提供商</span></p>
            </li>
             <li>
              <p>11</p>
              <p><img src="../../assets/imgs/u54.png" title="" class="opcityimg"><span>居间售电公司</span></p>
            </li>
             <li>
              <p>14</p>
              <p><img src="../../assets/imgs/u52.png" title="" class="opcityimg"><span>用电企业</span></p>
            </li>
          </ul>
          <h3>—— 客户区域用电量 ——</h3>
          <div id="pie-chart"></div>
          <h3>—— 客户等级 ——</h3>
          <div id="histogram-x"></div>
          <h3>—— 区域客户数量 ——</h3>
          <div id="histogram-y"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <!-- <div class="select" >
              <select name="" id="">
                <option value="">所有区域</option>
              </select>
            </div> -->
            <div class="select" >
              <selector :listData="listData" @selectData="selectData" style=""></selector>
            </div>
            <ul>
              <li>
                <p><img src="" alt=""><span>年度签约客户拜访次数</span></p>
                <p>54</p>
              </li>
              <li>
                <p><img src="" alt=""><span>年度潜在客户拜访次数</span></p>
                <p>50</p>
              </li>
            </ul>
            <h3>—— 当年每月拜访图 ——</h3>
            <div id="histogram-z"></div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex';
import commonHeader       from 'common/common-header';
import { publicApi }      from '../../api/publicApi';
import echarts  from 'echarts';
import  selector from 'common/selector';

export default {
  data () {
    return {
      num: 0,
      selected: '1'
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/Home/Detail')
    },
    test() {
      publicApi.getSaleOpportunity().then((res) => {
        console.log(res)
      }).catch(res => {
        console.log(res);
      })
    },

    // 饼状图
    pieChart(){
      let myChart = echarts.init(document.getElementById('pie-chart'));
      myChart.setOption({
        color:['#4572A7','#93A9CF','#D64040','#C12058','#7C0540','#4427A0','#1764C0','#0388D1','#378F3C','#7DB341','#CDDC39'],
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data:[{value:335, name:'河北', selected: true},
                {value:679, name:'冀北'}],
          // selected: data.selected
        },
        series : [
          {
            name: '',
            type: 'pie',
            radius : '38%',
            center: ['50%', '50%'],
            data: [{name:'河北', value:150},{name:'冀北', value:60}],
            label: {
            normal: {
                formatter: '{b|{b}:}\n {c}\n {d}%',
                rich: {
                  b: {
                    fontSize: 12,
                    lineHeight: 33,
                    textAlign: 'left'
                  },
                }
            }
        },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
            }
          },
        ]
      });
    },

    // 堆叠条形图
    histogramX(){
      let myChart = echarts.init(document.getElementById('histogram-x'));
      myChart.setOption({
        color:['#4572A7','#426DA1','#688AB4','#7394C5','#A1B4D4','#C2CDE1','#1764C0','#0388D1','#378F3C','#7DB341','#CDDC39'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
        },
        legend: {
          data: ['AAA', 'AA','A','BBB','BB']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:  {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['宁夏','山东','天津','北京','河北','冀北']
        },
        series: [
          {
            name: 'AAA',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330]
          },
          {
            name: 'AA',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: 'A',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: 'BBB',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [150, 212, 201, 154, 190, 330]
          },
          {
            name: 'BB',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [820, 832, 901, 934, 1290, 1330]
          }
        ]
      });
    },

    // 双柱状图1(区域客户数量)
    histogramY(){
      let myChart = echarts.init(document.getElementById('histogram-y'));
      myChart.setOption({
        color: ['#203864','#B4C7E7'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
            data:['合作用户','潜在用户']
        },
        toolbox: {
          show: false,    // 切换表格形式功能
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['冀北','河北','北京','天津','山东','宁夏']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name:'合作用户',
            type:'bar',
            data:[5, 3, 2, 3, 0, 1],
            itemStyle: {
              normal: {
                label: {
                  show: true,		        //开启显示
                  position: 'top',	        //在上方显示
                  textStyle: {	              //数值样式
                    color: 'black',
                    fontSize: 12
                  },
                }
              }
            }
          },
          {
            name: '潜在用户',
            type: 'bar',
            data:[1, 2, 3, 0, 3, 1],
            itemStyle: {
              normal: {
                label: {
                  show: true,		    //开启显示
                  position: 'top',	//在上方显示
                  textStyle: {	    //数值样式
                    color: 'black',
                    fontSize: 12
                  },
                }
              }
            }
          }
        ]
      });
    },

     // 双柱状图2(当年每月拜访图)
    histogramZ(){
      let myChart = echarts.init(document.getElementById('histogram-z'));
      myChart.setOption({
        color:['#4572A7','#93A9CF'],

        tooltip: {
          trigger: 'axis'
        },
        legend: {
            data:['合作用户','潜在用户']
        },
        toolbox: {
          show: false, // 切换表格形式功能
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
            axisLabel: {
              interval: 0, // 坐标间隔
            }
          },
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name:'合作用户',
            type:'bar',
            barGap: 0,
            data:[5, 3, 2, 3, 0, 15, 3, 2, 3, 0, 1, 12],
            itemStyle: {
              normal: {
                label: {
                  show: true,		//开启显示
                  position: 'top',	//在上方显示
                  textStyle: {	    //数值样式
                    color: 'black',
                    fontSize: 12
                  },
                  // formatter: function (params) { // 为0不显示
                  //   if (params.value > 0) {
                  //       return params.value;
                  //   } else {
                  //       return '';
                  //   }
                  // }
                }
              }
            }
          },
          {
            name: '潜在用户',
            type: 'bar',
            data:[1, 2, 3, 0, 3, 1, 3, 4, 5, 6, 7, 1],
            itemStyle: {
              normal: {
                label: {
                  show: true,		//开启显示
                  position: 'top',	//在上方显示
                  textStyle: {	    //数值样式
                    color: 'black',
                    fontSize: 12
                  },
                  // formatter: function (params) { // 为0不显示
                  //   if (params.value > 0) {
                  //       return params.value;
                  //   } else {
                  //       return '';
                  //   }
                  // }
                }
              }
            }
          }
        ]
      });
    }
  },
  components: {
    commonHeader,
    selector
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    }),
  },
  mounted(){
    this.pieChart();
    this.histogramX();
    this.histogramY();
    this.histogramZ();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .mb(98);background: #fff;
}
.mint-navbar {
  background-color: #2a579a;
  height: 1.33333333rem;
  .mint-tab-item{
    .mint-tab-item-label {
      font-size: 18px !important;
      color: #fff !important;
    }
  }
}
.mint-tab-item-label{
  .fs(20);
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #ffffff;
    margin-bottom: -3px;
}
.mint-tab-container{.pt(100);
    h3{.h(70);.lh(70);font-size: 16px;color: #aaa;}
    ul,nav{display: flex;justify-content: space-around;border-bottom:1px solid #eee;.padding(10,10,10,10);
      li{font-size: 16px;
        p{.h(60);.lh(60);
          img{height: 80%;}
          .opcityimg{opacity: .5;}
        }
      }
    }
    #pie-chart,#histogram-x,#histogram-y,#histogram-z{border-bottom:1px solid #eee;}
    #pie-chart{.h(600)}
    #histogram-x{.h(500)}
    #histogram-y{.h(600)}
    #histogram-z{.h(600); .w(780)}
    .select{width: 100%;.h(80);border-bottom: 3px solid #eee;
      select{border: none;outline:none;height: 100%;width: 100%;background: #fff;}
    }
    nav{border-bottom:5px solid #eee;
      p{.h(80);.lh(80);
          img{height: 80%;}
      }
    }

}

</style>
