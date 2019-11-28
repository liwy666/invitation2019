<template>
	<main-view back-off-path="index" move-on-path="p3" :title-img="require('../assets/p2/greet.png')">
		<div class="p2">
			<div class="word">
				<p>尊敬的___先生/女士：</p>
				<p class="p-s">您好。</p>
				<p class="p-s">感谢您在百忙之中收阅我们的邀请函。 </p>
				<p class="p-s">岁月峥嵘，逐梦路上感恩有您！</p>
				<p class="p-s">新年伊始，我们将继续坚守初心，兢兢业业，矢志不渝。</p>
				<p class="p-s">值此辞旧迎新之际，诚邀参加【岗隆数码2019年会暨2020年新春晚会】</p>
				<p class="p-s"></p>
				<p class="p-s">如蒙应允，不胜荣幸。</p>
				<p class="p-s"></p>
				<p class="p-s">祝：新春快乐，万事如意！</p>
				<div class="zly">
					<img src="../assets/p2/zly.png" alt="">
				</div>
			</div>
			<div class="end">
				<img src="../assets/p2/2019.png">
			</div>
		</div>
	</main-view>
</template>
<script>
    import Main from '../components/ViewMain'

    export default {
        data() {
            return {
                isShow: false,
            };
        },
        computed: {},
        created() {

        },
        mounted() {
            this.isShow = true;
        },
        methods: {},
        components: {
            "main-view": Main
        }
    };
</script>
<style lang="scss" scoped>
	.p2 {
		width: 100%;
		height: 100%;
		overflow: hidden;

		img {
			width: 100%;
		}

		.word {
			width: 80%;
			margin: 0 auto;
			font-size: 12px;
			position: relative;

			p {
				width: 100%;
				margin-top: 10px;
				color: rgb(255, 204, 128);
			}

			.p-s {
				text-indent: 2em
			}

			.zly {
				width: 45px;
				right: 5%;
				bottom: -17%;
				position: absolute;
			}
		}


		.end {
			width: 50%;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>