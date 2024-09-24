<template>
	<!-- #ifdef H5 -->
	<view class="text">
		<text class="texttitle">和 观 涛 合 作, 一 起 更 好</text>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP -->
	<view class="text">
		<text class="texttitle">和 观 涛 合 作, 一 起 更 好</text>
	</view>
	<!-- #endif -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.text {
		color: white;
		font-size: 3rem;
		font-weight: 800;
	}

	/* #endif */
	/* #ifdef APP */
	.text {
		color: white;
		font-size: 60rpx;
		font-weight: 800;
	}

	/* #endif */
</style>