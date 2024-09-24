<template>
	<!-- #ifdef H5 -->
	<view class="image">
		<headtext></headtext>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP -->
	<view class="image">
		<headtext></headtext>
	</view>
	<!-- #endif -->
</template>

<script setup>
	import headtext from "./headtext.vue"
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.image {
		width: 100%;
		height: 500px;
		background: url('https://p0.meituan.net/smartvenus/4aa435df71da9524c7976150c06b2cd9578699.jpg@format=jpeg%7C20Q%7Cpr=1.webp') center no-repeat;
		// background-size: cover;
		z-index: 997;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	/* #endif */
	/* #ifdef APP */
	.image {
		width: 100%;
		height: 300px;
		background: url('https://p0.meituan.net/smartvenus/4aa435df71da9524c7976150c06b2cd9578699.jpg@format=jpeg%7C20Q%7Cpr=1.webp') center no-repeat;
		// background-size: cover;
		z-index: 997;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	/* #endif */
</style>