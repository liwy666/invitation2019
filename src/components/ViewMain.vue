<template>
	<div v-hammer:swipe.down="backOff">
		<slot></slot>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        computed: {},
        created() {

        },
        methods: {
            backOff(){
                this.$router.go(-1);
			}
		},
    };
</script>
<style lang="scss" scoped>
</style>