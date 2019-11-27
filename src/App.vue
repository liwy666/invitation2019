<template>
	<div id="app">
		<h5-audio-controls
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
    export default {
        data() {
            return {
                transitionClassName: {
                    enter: "bounceInUp",
                    leave: "fadeOutUpBig"
                }
            };
        },
        watch: {
            '$route'(to) {
                if (to.query.isBackOff) {
                    this.transitionClassName = {
                        enter: "bounceInDown",
                        leave: "fadeOutDownBig"
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
		background: url("./assets/background.jpg") no-repeat 0 0;
		background-size: 100% 100%;
		//-webkit-overflow-scrolling: touch;
	}

	body {
		background: url("./assets/background.jpg") no-repeat 0 0;
		//background-size: 100% 100%;
	}

	.main-router-leave-to {
		position: absolute;
	}

	.main-router-enter {
		position: absolute;
	}
</style>
