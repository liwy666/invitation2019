<template>
	<div class="view-main" v-hammer:swipe="swipeEvent">
		<transition enter-active-class="animated fadeInDown slow">
			<div class="fixed"  :class="{'animated swing infinite slower':isStartLoopAnimation}" style="width: 25%;left: -7%;" v-show="isShow">
				<img src="../assets/p2/china.png" alt="">
			</div>
		</transition>
		<transition enter-active-class="animated fadeInDown slow">
			<div class="fixed" :class="{'animated swing infinite slow':isStartLoopAnimation}" style="width: 15%;top: 4%;right: 1%;" v-show="isShow">
				<img src="../assets/p2/think.png" alt="">
			</div>
		</transition>
		<transition enter-active-class="animated rotateInDownLeft">
			<div class="fixed" :class="{'animated bounce infinite':isStartLoopAnimation}" style="width: 25%;bottom: 4%;left: 1%;" v-show="isShow">
				<img src="../assets/p2/tiger.png" alt="">
			</div>
		</transition>
		<transition enter-active-class="animated fadeInRight slow">
			<div class="fixed" style="width: 25%;top: 34%;right: 1%;" v-show="isShow&&!hideSmallCloud">
				<img src="../assets/p2/cloud.png" alt="">
			</div>
		</transition>
		<transition enter-active-class="animated fadeInRight slow">
			<div class="fixed" style="    width: 40%;top: 88%;right: 1%;" v-show="isShow">
				<img src="../assets/p2/cloud.png" alt="">
			</div>
		</transition>
		<transition enter-active-class="animated bounceInDown">
			<div class="rat" :class="{'animated tada infinite slower':isStartLoopAnimation}" v-show="isShow">
				<img src="../assets/p2/rat.png">
			</div>
		</transition>
		<transition enter-active-class="animated bounceInUp">
			<div class="title" v-show="isShow">
				<img :src="titleImg">
			</div>
		</transition>
		<slot ></slot>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                isShow: false,
				isStartLoopAnimation:false,
            };
        },
        props: {
            backOffPath: {
                value: String,
                required: true,
            },
            moveOnPath: {
                value: String,
                required: true,
            },
            titleImg: {
                value: String,
                required: true,
            },
			hideSmallCloud:Boolean,
        },
        computed: {},
        created() {

        },
        mounted() {
            this.isShow = true;
            setTimeout(()=>{
                this.isStartLoopAnimation = true
			},2500)
        },
        methods: {
            swipeEvent(event) {
                if (event.deltaY > 0) {
                    this.backOff()
                } else {
                    this.moveOn()
                }
            },
            backOff() {
                if (this.backOffPath) {
                    this.$router.replace({path: this.backOffPath, query: {isBackOff: 'true'}});
                }

            },
            moveOn() {
                if (this.moveOnPath) {
                    this.$router.replace({path: this.moveOnPath});
                }

            }
        },
    };
</script>
<style lang="scss" scoped>
	.view-main {
		width: 375px;
		height: 724px;
		background: url("../assets/background.png") no-repeat 0 0;
		overflow: hidden;

		img {
			width: 100%;
		}

		.fixed {
			position: fixed;
			z-index: 10;
		}

		.title {
			margin: 0 auto;
			width: 80%;
		}

		.rat {
			width: 25%;
			margin: 0 auto;
			margin-top: 45px;
		}
	}
</style>