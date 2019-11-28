<template>
	<main-view back-off-path="p2" move-on-path="p4" :title-img="require('../assets/p3/title.png')">
		<div class="p3">
			<div class="word">
				<p class="p-s">不积跬步，无以至千里；不积小流，无以成江海</p>
				<p></p>
				<p class="p-s">一路走来，点滴积累汇成今日岗隆，以梦为马，亦无畏荆棘。</p>
				<p></p>
				<p class="p-s">这一年，岗隆数码稳步向前多元发展，并荣获“江苏省级电子商务示范企业”</p>
				<p></p>
				<p class="p-s">在岗隆成长的每一步，感谢有您一路同行，给予我们支持与鼓励。</p>
				<p></p>
				<p class="p-s">值此新春佳节，诚邀您共襄盛会，诗酒趁年华</p>
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
            return {};
        },
        computed: {},
        created() {

        },
        methods: {},
        components: {
            "main-view": Main
        }
    };
</script>
<style lang="scss" scoped>
	.p3{
		width: 100%;
		height: 100%;
		overflow: hidden;

		img {
			width: 100%;
		}

		.word {
			width: 70%;
			margin: 0 auto;
			font-size: 12px;
			position: relative;

			p {
				width: 100%;
				margin-top: 20px;
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