<template>
	<div id="app">
		<h5-audio-controls
			ref="h5AudioControls"
			:autoPlay="false"
			src="https:mate.ganglonggou.com/lib/music/invitation2019_music.mp3"
		/>
		<transition name="main-router"
			:enter-active-class="'animated '+transitionClassName.enter"
			:leave-active-class="'animated '+transitionClassName.leave">
			<router-view/>
		</transition>
	</div>
</template>
<script>
    // import music from './components/Music'
    import {commonShare} from "../src/share.js";

    export default {
        data() {
            return {
                transitionClassName: {
                    enter: "fadeInUp faster",
                    leave: "fadeOutUpBig faster"
                }
            };
        },
        watch: {
            '$route'(to) {
                if (to.query.isBackOff) {
                    this.transitionClassName = {
                        enter: "fadeInDown faster",
                        leave: "fadeOutDownBig faster"
                    }
                } else {
                    this.transitionClassName = {
                        enter: "fadeInUp faster",
                        leave: "fadeOutUpBig faster"
                    }
                }

            }
        },
        mounted() {
            document.body.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, {
                passive: false
            });
            commonShare(() => {
                this.$refs.h5AudioControls.play();
            }, this);
        },
        components: {
            //'music':music,
        }
    }
</script>
<style lang="scss">
	#app {
		overflow: hidden;
		width: 375px;
		height: 724px;
		//-webkit-overflow-scrolling: touch;
	}

	body {
		//background: url("assets/deep/background.jpg") no-repeat 0 0;
		//background-size: 100% 100%;
	}

	.main-router-leave-to {
		position: absolute;
	}

	.main-router-enter {
		position: absolute;
	}
</style>
