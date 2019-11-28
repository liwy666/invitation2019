<template>
	<div class="first">
		<div class="main" :style="'transform: translateZ('+nowTranslateZ.toString()+'PX);'"
			v-hammer:swipe="swipeEvent"
			v-hammer:tap="stop"
		>
			<first-child v-for="(item,index) in childList" :index="index+1" :key="index"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:y_distance="y_distance"
				:childStyle="'background-image: url('+item.imgPath +');'">
			</first-child>
		</div>
	</div>
</template>
<script>
    import FirstChild from '../components/FirstChild'

    export default {
        data() {
            return {
                nowTranslateZ: 0,
                stepping: 1,//常规步进
                quickenStepping: 3.5,//加速步进
                nowStepping: 0,//当前步进
                setInt: null,//定时器
                x_distance: 0,//各屏间距,x轴
                y_distance: 0,//各屏间距,x轴
                z_distance: -150,//各屏间距,z轴
                firstChildCont: 0,
                childList: [
                    {
                        imgPath: require("../assets/deepCity/b1.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b2.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b3.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b4.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b5.png"),
                    },
                    // {
                    //     imgPath: require("../assets/deepCity/b6.png"),
                    // },
                    {
                        imgPath: require("../assets/deepCity/b7.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b8.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b9.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/b10.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/c1.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/c2.png"),
                    },
                    {
                        imgPath: require("../assets/deepCity/c3.png"),
                    },
                ],
            };
        },
        computed: {},
        created() {
            this.firstChildCont = this.childList.length;
        },
        mounted() {
            //let firstChildCont = document.getElementsByClassName('first-child').length;
            let deep = (this.firstChildCont - 1) * Math.abs(this.z_distance);
            this.setInt = setInterval(() => {
                if (this.nowStepping > 0 && Math.abs(this.nowTranslateZ - deep) <= 15) {
                    this.nowTranslateZ = deep;
                    this.nowStepping = 0;
                } else if (this.nowStepping < 0 && Math.abs(this.nowTranslateZ) <= 15) {
                    this.nowTranslateZ = 0;
                    this.nowStepping = 0;
                } else {
                    this.nowTranslateZ += this.nowStepping;
                }
            }, 10);
        },
        methods: {
            swipeEvent(event) {
                if (event.deltaY > 0) {
                    this.backOff()
                } else {
                    this.forward()
                }
            },
            forward() {
                //let firstChildCont = document.getElementsByClassName('first-child').length;
                if (this.nowStepping === this.stepping) {
                    this.nowStepping = this.quickenStepping;
                } else {
                    this.nowStepping = this.stepping;
                }


            },
            backOff() {
                if (this.nowStepping === -this.stepping) {
                    this.nowStepping = -this.quickenStepping;
                } else {
                    this.nowStepping = -this.stepping;
                }

            },
            stop() {
                let deep = (this.firstChildCont - 1) * Math.abs(this.z_distance);
                if (this.nowTranslateZ === deep) {
                    this.$router.replace('/p2')
                } else {
                    this.nowStepping = 0;
                }

            }
        },
        components: {
            'first-child': FirstChild
        }
    };
</script>
<style lang="scss" scoped>
	.first {
		width: 100%;
		height: 100%;
		position: relative;
		perspective: 375px;
		/*transform-origin: 50% 50% 0px;*/
		transform-style: preserve-3d;
		overflow: hidden;
		background: url("../assets/deepCity/bj.jpg") no-repeat 0 0;
		background-size: 100% 100%;

		.main {
			transform-style: preserve-3d;
			width: 100%;
			height: 100%;
		}
	}
</style>