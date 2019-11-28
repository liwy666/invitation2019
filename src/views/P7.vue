<template>
	<main-view back-off-path="p6" move-on-path="" :title-img="require('../assets/p7/title.png')">
		<div class="p7">
			<div class="word">
				<p class="p-s">豕去春无限，鼠来岁有余</p>
				<p class="p-s">新春伊始，万象更新。 </p>
				<p class="p-s">佳节之宴，言笑晏晏，诚邀与君共临，煮酒论英雄，挥斥方遒，不负韶华。</p>
				<p class="p-s">未来可期，愿与君聚力前行，赴前程远大。</p>
				<p class="p-s"></p>
				<p class="p-s"></p>
				<p class="p-s"></p>
				<p class="p-end">万望晤面</p>
				<p class="p-end"></p>
				<p class="p-end">岗隆数码全体同仁 鞠身拜上</p>
			</div>
			<div class="end">
				<img src="../assets/p7/map.png">
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
	.p7 {
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
			.p-end{
				text-align: right;
				font-size: 14px;
				font-weight: bolder;
			}

		}


		.end {
			width: 65%;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>