<template>
	<view class="index">
		<view class="index-box">
			<titleset></titleset>
			<swiperindex></swiperindex>
		</view>
	</view>
</template>

<script setup>
	// 引入加入我们的中间内容
	import titleset from "@/components/Joinus/joinusttile/index.vue"
	import swiperindex from "@/components/Joinus/swiper/wiper.vue"
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100%;

		.index-box {
			width: 80%;
			margin: auto;
		}
	}
</style>