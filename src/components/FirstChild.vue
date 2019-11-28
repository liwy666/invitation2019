<template>
	<div class="first-child" :style="myChildStyle">
		<slot></slot>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                myChildStyle: "",
            };
        },
        props: {
            childStyle: String,
            index: Number,
            x_distance: Number,//各屏间距,x轴
            z_distance: Number,//各屏间距,z轴
            y_distance: Number,//各屏间距,z轴
        },
        computed: {},
        created() {
            this.myChildStyle = this.childStyle;
            this.myChildStyle += 'transform: translate3d(' + ((this.index - 1) * this.x_distance).toString()
                + 'px,' + ((this.index - 1) * this.y_distance).toString()
                + 'px,' + ((this.index - 1) * this.z_distance).toString() + 'px);';
            this.myChildStyle += 'z-index:' + this.index + ';';
        },
        methods: {},
    };
</script>
<style lang="scss" scoped>
	.first-child {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100% 100%;
		position: absolute;
	}
</style>