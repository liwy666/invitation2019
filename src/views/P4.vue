<template>
	<main-view :hide-small-cloud="true" back-off-path="p3" move-on-path="p5"
		:title-img="require('../assets/p4/title.png')">
		<div class="p4">
			<div class="word">
				<transition  enter-active-class="animated zoomInUp slow" appear>
				<img src="../assets/p4/gl.png" alt="">
				</transition>
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
<style lang="scss">
	.p4 {
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
		}

		.end {
			width: 50%;
			margin: 0 auto;
			margin-top: 40px;
		}
	}
</style>