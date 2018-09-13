<template>
    <div class="x-bar">
        <div :id="id" :option="option">
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
    export default {
        props: {
            id: {
                type: String
            },
            option:{
                type:Object
            }
        },
        mounted(){
            Highcharts.chart(this.id,{
                    chart: {
                        type: 'spline',
                    },
                    title:{//标题
                        text:'新增会话数'
                    },
                    series: [//数据列
                    {
                        data: [
                            {name:'2018-8-27',y:10000},
                            {name:'2018-8-30',y:30000},
                            {name:'2018-8-31',y:20000},
                            {name:'2018-9-1',y:10000}
                            ],
                        allowPointSelect:false,
                        marker: {
                                enabled: false,
                                states:{
                                    hover:{
                                        enabled:false
                                    }
                                }
                            },
                        lineWidth:5,
                        name:"会话数"
                    },
                    // {
                    //     data:[10,9,8,7,8,9,5,4,2,1]
                    // }
                    ],
                    tooltip:{//提示框
                        backgroundColor:"black",
                        style:{
                            color:"white"
                        }
                    },
                    xAxis: { 
                        tickWidth:0,//去掉刻度
                        crosshair:{//准星线
                            color:"black",
                            dashStyle:"Dash",
                            snap:false//是否于最近的数据点对齐
                        },
                        title:{
                            text:'日期'
                        },
                        type:"datatime",

                    },
                    yAxis:{
                        gridLineDashStyle: 'longdash'
                    }
                })
        }
    }
</script>

<style scoped>

</style>