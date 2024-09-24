<template>
	<view class="JOinustext">
		<text class="Joinus-text" :style="{ 'font-size': `${title}rem` }">一起成长， 一起更好</text>
		<view class="Joinus-name" :style="{ 'font-size': `${namesize}rem` }">
			Grow Together, Better Together
		</view>
		<indexinput :size=size :top=top></indexinput>
		<indexulset></indexulset>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	// 引入input组件
	import indexinput from "@/components/Joinus/Joinustext/Joinusinput.vue"
	// 引入ul
	import indexulset from "@/components/Joinus/Joinustext/joinusul.vue"
	const viewportWidth = ref(0); // 初始化为0，稍后在handleResize中更新
	const title = ref(0);
	const namesize = ref(0)
	const size = ref(0.7)
	const top = ref(0)
	// 定义一个处理窗口大小变化的函数  
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth; // 更新视口宽度  
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
			title.value = 3
			namesize.value = 1.5
			size.value = 1
			top.value = 2.5
		} else {
			document.documentElement.style.fontSize = (FontSize / 1) + 'px';
			if (viewportWidth.value < 1000) {
				title.value = 2
				namesize.value = 1.2
				size.value = 0.8
			}
			if (viewportWidth.value < 900) {
				title.value = 1.8
				namesize.value = 1
				size.value = 0.8
			}
			if (viewportWidth.value < 800) {
				title.value = 1.5
				namesize.value = 1
				size.value = 0.8
			}
			if (viewportWidth.value < 700) {
				title.value = 1.2
				namesize.value = 0.8
				size.value = 0.6
				top.value = 0.7
			}
			if (viewportWidth.value < 600) {
				title.value = 1
				namesize.value = 0.7
				size.value = 0.4
				top.value = 0.5
			}
			if (viewportWidth.value < 500) {
				title.value = 0.8
				namesize.value = 0.5
				size.value = 0.2
				top.value = 0.4
			}
			if (viewportWidth.value < 500) {
				title.value = 0.8
				namesize.value = 0.5
				size.value = 0.1
				top.value = 0.4
			}

		};
	}
	// 在组件挂载后添加窗口大小变化监听器  
	onMounted(() => {
		// 设置初始的视口宽度  
		handleResize(); // 立即调用以设置初始值  
		window.addEventListener('resize', handleResize); // 添加事件监听器  
	});

	// 在组件卸载前移除窗口大小变化监听器  
	onUnmounted(() => {
		window.removeEventListener('resize', handleResize);
	});
</script>

<style lang="scss" scoped>
	.JOinustext {
		width: 100%;

		.Joinus-text {

			font-weight: 700;
			color: white;
		}

		.Joinus-name {

			color: white;


		}
	}
</style>