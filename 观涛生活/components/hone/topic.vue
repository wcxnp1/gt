<template>
	<view class="topic">
		<!-- #ifdef APP -->
		<hometitle v-show="showtitle"></hometitle>
		<hometitleto v-show="!showtitle"></hometitleto>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<hometitle v-show="!showtitle"></hometitle>
		<hometitleto v-show="showtitle"></hometitleto>
		<!-- #endif -->
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	// 引入主题的文字
	import hometitle from "./honetext/title.vue"
	// 引入副主题的文字
	import hometitleto from "./honetext/ttileto.vue"
	const showtitle = ref(false)
	onMounted(() => {
		window.addEventListener('resize', handleResize);
	});
	// 定义头部的数据

	// 定义一个变量显示与隐藏
	const uppopupset = ref()
	// 点击小图标显示右边框
	function hedaupicon() {
		uppopupset.value.open()
	}



	// 创建一个响应式的 ref 来存储视口宽度  
	const viewportWidth = ref(0); // 初始化为0，稍后在handleResize中更新  

	// 定义一个处理窗口大小变化的函数  
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth; // 更新视口宽度  
		console.log(viewportWidth.value);
		if (viewportWidth.value > 1092) {
			showtitle.value = false
		} else {
			showtitle.value = true
		}

	};

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
	.topic {
		padding-top: 5rem;
		width: 100vw;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('https://p0.meituan.net/smartvenus/5f82da11ccab7a38ce2d35713e20f65830379.png') no-repeat;
		background-size: 100%, 100%;


	}
</style>