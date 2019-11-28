<template>
	<main-view :hide-small-cloud="true" back-off-path="p5" move-on-path="p7"
		:title-img="require('../assets/p6/title.png')">
		<div class="p6">
			<div class="word">
				<transition  enter-active-class="animated zoomInUp slow" appear>
					<img src="../assets/p6/img.png" alt="">
				</transition>
				<p>{{date}}</p>
				<p>{{place}}</p>
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
                date:"时间：2019年12月27日（星期五）晚17点",
                place:"地点：宜兴市阳羡东路455号艾美酒店二楼陶阳羡",
			};
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
<style lang="scss">
	.p6 {
		width: 100%;
		height: 100%;
		overflow: hidden;

		img {
			width: 100%;
		}

		.word {
			width: 70%;
			margin: 0 auto;
			margin-top: 20px;
			p {
				width: 100%;
				font-size: 12px;
				margin-top: 10px;
				color: rgb(255, 204, 128);
				text-align: center;
			}
		}

		.end {
			width: 50%;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>