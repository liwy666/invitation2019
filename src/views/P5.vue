<template>
	<main-view :hide-small-cloud="true" back-off-path="p4" move-on-path="p6"
		:title-img="require('../assets/p5/title.png')">
		<div class="p5">
			<div class="word">
				<transition-group enter-active-class="animated zoomInUp" class="lift" tag="div">
					<div v-for="item in now_list" :key="item.title" class="item">
						<p class="small">{{item.date}}</p>
						<p class="large">{{item.title}}</p>
					</div>
				</transition-group>
				<div class="right" :style="'background-image: url('+require('../assets/p5/vertical.png')+')'">
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
					<div class="item">
						<div class="img-box"><img src="../assets/p5/flower.png" alt=""></div>
					</div>
				</div>
			</div>
		</div>
	</main-view>
</template>
<script>
    import Main from '../components/ViewMain'

    export default {
        data() {
            return {
                isShowItem: false,
                list: [
                    {
                        date: "16:30-17:00",
                        title: "入场及签到",
                    },
                    {
                        date: "17:00-17:10",
                        title: "合影 ",
                    },
                    {
                        date: "17:10-17:20",
                        title: "总经理致辞",
                    },
                    {
                        date: "17:20-17:30",
                        title: "董事长致辞",
                    },
                    {
                        date: "17:30-18:00",
                        title: "颁奖典礼",
                    },
                    {
                        date: "18:00-21:00",
                        title: "晚宴、游戏、抽奖",
                    },
                ],
                now_list: [],
                setInt: null,//定时器
                i: 0,
            };
        },
        computed: {},
        created() {

        },
        mounted() {
            this.isShowItem = true;
            this.now_list.push(this.list[this.now_list.length]);
            this.setInt = setInterval(() => {
                if (this.now_list.length >= this.list.length) {
                    clearInterval(this.now_list);
                } else {
                    this.now_list.push(this.list[this.now_list.length]);
                }
            }, 800);
        },
        methods: {},
        components: {
            "main-view": Main
        }
    };
</script>
<style lang="scss" scoped>
	.p5 {
		width: 100%;
		height: 100%;
		overflow: hidden;

		img {
			width: 100%;
		}

		.word {
			width: 70%;
			margin: 0 auto;
			display: flex;
			padding-left: 33%;
			.item {
				height: 40px;
				margin-bottom: 15px;
				overflow: hidden;
				color: rgb(255, 204, 128);

				.img-box {
					padding-left: 15px;
					margin: 0 auto;
					width: 30px;

					img {
						animation: spin 5s linear infinite;
						@-webkit-keyframes spin {
							from {
								-webkit-transform: rotate(0deg);
							}
							to {
								-webkit-transform: rotate(360deg);
							}
						}
						@keyframes spin {
							from {
								transform: rotate(0deg);
							}
							to {
								transform: rotate(360deg);
							}
						}
					}
				}
			}

			.left {
				padding: 10px 0;
			}

			.right {
				padding: 10px 0;
				background-position: 28px 0;
				background-size: 3px 100%;
				background-repeat: no-repeat;
			}

			.small {
				font-size: 13px;
			}

			.large {
				font-size: 16px;
				font-weight: bolder;
			}
		}

		.end {
			width: 50%;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>