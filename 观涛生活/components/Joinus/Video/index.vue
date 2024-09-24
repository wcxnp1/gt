<template>
	<view class="da">
		<view class="video-container">
			<video src="/static/oceans.mp4" poster="/static/xiao.jpg" class="video-player" autoplay muted
				:controls="false" @click.stop="preventFullscreen" loop></video>

		</view>
		<view class="Joinustititle" :style="{'bottom':`${botton}px`}">
			<Joinustitl></Joinustitl>
		</view>
	
	</view>

</template>
<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	import Joinustitl from "@/components/Joinus/Joinustext/index.vue"
	const botton = ref(0)
	const preventFullscreen = () => {
		console.log(1212);
	}

	// 引入input组件
	import indexinput from "@/components/Joinus/Joinustext/Joinusinput.vue"
	// 引入ul
	import indexulset from "@/components/Joinus/Joinustext/joinusul.vue"
	const viewportWidth = ref(0); // 初始化为0，稍后在handleResize中更新

	// 定义一个处理窗口大小变化的函数  
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth; // 更新视口宽度  
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
			botton.value = 280
		} else {
			document.documentElement.style.fontSize = (FontSize / 1) + 'px';
			if (viewportWidth.value < 1000) {
				botton.value = 185
			}
			if (viewportWidth.value < 900) {
				botton.value = 175
			}
			if (viewportWidth.value < 800) {
				botton.value = 145
			}
			if (viewportWidth.value < 700) {
				botton.value = 120
			}
			if (viewportWidth.value < 600) {
				botton.value = 105
			}
			if (viewportWidth.value < 500) {
				botton.value = 80
			}
			if (viewportWidth.value < 400) {
				botton.value = 70
			}
			if (viewportWidth.value < 300) {
				botton.value = 60
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
	.da {
		width: 100%;
		height: 100%;
		position: relative;
	

	
		.Joinustititle {
			position: absolute;
			bottom: 135px;
			left: 50%;
			width: 100%;
			height: 100%;
			transform: translate(-50%, 50%);
			z-index: 999;
			text-align: center;

		}

		.joinuslogo {
			position: absolute;
			bottom: 0px;
			left: 0px;
			width: 100%;
			z-index: 999;

		}
	}

	.video-container {
		width: 100%;
		/* 容器宽度为父容器的100% */
		padding-top: 56.25%;
		/* 9/16 = 0.5625，转换为百分比，这是16:9的宽高比 */
		position: relative;
		/* 为视频绝对定位做准备 */
		overflow: hidden;
		height: 82%;
		/* 隐藏超出容器的部分 */
		background-color: #000;
		background-image: url('../../../static/xiao.jpg');
		background-size: cover;
		/* 可选：设置容器背景色为黑色，以减少视频内容裁剪时的视觉干扰 */

	}



	.video-player {
		position: absolute;
		/* 绝对定位 */
		top: 0px;
		left: 0;
		width: 100%;
		/* 视频宽度填满容器 */
		height: 74%;
		/* 视频高度填满容器 */
		// object-fit: cover;
		/* 覆盖整个容器，可能会裁剪视频内容以匹配容器的宽高比 */
	}

	.uni-video-container {
		object-fit: cover;
	}

	// .uni-page-head {
	// 	display: none !important;
	// }
	.uni-page-head .uni-placeholder {
		display: none !important;
	}

	uni-page-head {
		background-color: transparent !important;
	}

	.video-container {
		background-color: white;
	}
</style>