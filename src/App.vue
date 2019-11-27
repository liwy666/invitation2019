<template>
	<div id="app">
		<music></music>
		<transition name="main-router"
			:enter-active-class="'animated '+transitionClassName.enter"
			:leave-active-class="'animated '+transitionClassName.leave">
			<router-view/>
		</transition>
	</div>
</template>
<script>
	import music from './components/Music'
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
            '$route'(to, from) {
                if (to.query.intoTime && parseInt(to.query.intoTime) < parseInt(from.query.intoTime)) {
                    this.transitionClassName = {
                        enter: "bounceInDown",
                        leave: "fadeOutDownBig"
                    }
                } else {
                    this.transitionClassName = {
                        enter: "bounceInUp",
                        leave: "fadeOutUpBig"
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
        components:{
            'music':music,
		}
    }
</script>
<style lang="scss">
	#app {
		overflow: hidden;
		width: 375px;
		height: 650px;
		background:url("./assets/background.jpg") no-repeat 0 0;
		background-size: 100% 100%;
		//-webkit-overflow-scrolling: touch;
	}
	body{
		background:url("./assets/background.jpg") no-repeat 0 0;
		//background-size: 100% 100%;
	}
	.main-router-leave-to {
		position: absolute;
	}

	.main-router-enter {
		position: absolute;
	}
</style>
