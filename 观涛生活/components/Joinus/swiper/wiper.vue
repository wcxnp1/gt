<template>
	<view class="index">
		<up-swiper :list="list1" indicator indicatorMode="line" circular height="500"></up-swiper>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';

	// 使用 reactive 创建响应式数组  
	const list1 = reactive([
		'https://cdn.uviewui.com/uview/swiper/swiper1.png',
		'https://cdn.uviewui.com/uview/swiper/swiper2.png',
		'https://cdn.uviewui.com/uview/swiper/swiper3.png',
	]);
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 500px !important;
		// background-color: #fff;
	}
</style>