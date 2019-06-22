<template>
    <div class="select">
        <div class="select-header" @click="displayBox">
          <p>{{Array.isArray(selectedData)?defaultValue:selectedData}}</p>
          <div :class="triangleStyle"></div>
        </div>
      <div class="select-body" v-show="showSelected" v-model="selectedData">
          <ul>
            <li :class="{selected:selectedData == listData}" @click="selectedAll">{{defaultValue}}</li>
            <li :class="{selected:selectedData == item}" v-for="(item, index) in listData" :key="index" @click="selectData(item)">{{item}}</li>
          </ul>
      </div>
      <div class="mask" v-show="showSelected" @click="displayBox"></div>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          showSelected:false,
          triangleStyle:{
            triangle:true,
            triangleClicked:false,
          },
        }
      },
      props:{
        defaultValue:{
          type:String,
          default:'全部',
        },
        selectedData:{
          type:String || Array,
          default:[],
        },
        listData: {
          type:Array,
          default:[],
        },
      },
      methods:{
        selectedAll(){
          this.selectedData = this.listData;
          this.showSelected = !this.showSelected;
          [this.triangleStyle.triangle,this.triangleStyle.triangleClicked] = [this.triangleStyle.triangleClicked,this.triangleStyle.triangle]
          console.log(this.selectedData);
          this.$emit('selectData');
        },
        selectData(index){
          this.selectedData = index;
          this.showSelected = !this.showSelected;
          [this.triangleStyle.triangle,this.triangleStyle.triangleClicked] = [this.triangleStyle.triangleClicked,this.triangleStyle.triangle]
          console.log(this.selectedData);
          this.$emit('selectData', this.selectedData);
        },
        displayBox(){
          this.showSelected = !this.showSelected;
          [this.triangleStyle.triangle,this.triangleStyle.triangleClicked] = [this.triangleStyle.triangleClicked,this.triangleStyle.triangle]
        }
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
.select{
  background: #ffffff;
  .select-header{
    .h(70);
    .fs(30);
    border-bottom: 3px solid rgba(121, 121, 121, 1);

    p{
      display: inline-block;
      .w(170);
      .lh(70);
    }
    .triangle{
      position: relative;
      top:4px;
      right: 9px;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: black  transparent transparent transparent;
    }
    .triangleClicked{
      position: relative;
      top:.34rem;
      right: 1.44rem;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 7px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }
  }
  .select-body{
    background: #ffffff;
    position: relative;
    top: -2px;
    z-index:51;
    ul{
      li{
        .h(70);
        .lh(70);
        .fs(30);
        border-bottom: 1px solid rgba(242, 242, 242, 1);
      }
      .selected{
        .h(70);
        .lh(70);
        .fs(30);
        border-bottom: 1px solid rgba(242, 242, 242, 1);
        color:#004E90
      }
    }
  }
  .mask{
    opacity: 0.3;
    background: rgba(51, 51, 51, 0.2);
    width: 100%;
    height: 100vh;
    z-index: 50;
  }
}
</style>
