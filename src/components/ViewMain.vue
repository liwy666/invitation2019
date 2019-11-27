<template>
	<div v-hammer:swipe="swipeEvent">
		<slot></slot>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props: {
            backOffPath: {
                value: String,
                required: true,
            },
            moveOnPath: {
                value: String,
                required: true,
            }
        },
        computed: {},
        created() {

        },
        methods: {
            swipeEvent(event) {
                if (event.deltaY > 0) {
                    this.backOff()
                } else {
                    this.moveOn()
                }
            },
            backOff() {
                if (this.backOffPath) {
                    this.$router.replace({path: this.backOffPath, query: {isBackOff: 'true'}});
                }

            },
            moveOn() {
                if (this.moveOnPath) {
                    this.$router.replace({path: this.moveOnPath});
                }

            }
        },
    };
</script>
<style lang="scss" scoped>
</style>