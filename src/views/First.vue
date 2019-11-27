<template>
	<div class="first">
		<div class="main" :style="'transform: translateZ('+nowTranslateZ.toString()+'PX);'"
			v-hammer:swipe="swipeEvent"
			v-hammer:tap="stop"
		>
			<first-child :index="1"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'">
			</first-child>
			<first-child :index="2"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="3"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="4"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="5"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="6"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="7"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'"></first-child>
			<first-child :index="8"
				:x_distance="x_distance"
				:z_distance="z_distance"
				:childStyle="'background-image: url('+require('../assets/demo.png') +');'">
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
                z_distance: -200,//各屏间距,z轴
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //let firstChildCont = document.getElementsByClassName('first-child').length;
            let firstChildCont = 8;
            let deep = (firstChildCont-1) * Math.abs(this.z_distance);
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
                this.nowStepping = 0;
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

		.main {
			transform-style: preserve-3d;
			width: 100%;
			height: 100%;
		}
	}
</style>