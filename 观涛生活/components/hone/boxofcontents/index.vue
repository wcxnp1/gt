<template>

	<!-- #ifdef H5 -->
	<view class="index" :style="{padding: `${mytop}rem ${left}rem`}">
		<view class="index-all">
			<text style="font-size: 3rem;">最新动态</text>
			<Seethemall></Seethemall>
		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-left" :style="{ width: flexshow ? '100%' : '67%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-fight" :style="{ width: flexshow ? '100%' : '30%' }">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%' }">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
		</view>
		<view class="Seethemall">
			<Seethemall></Seethemall>
		</view>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP -->
	<view class="index" :style="{padding: `${mytop}rem ${left}rem`}">
		<view class="index-all">
			<text style="font-size: 2rem;">最新动态</text>
			<Seethemall></Seethemall>
		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-left" :style="{ width: flexshow ? '100%' : '60%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-fight" :style="{ width: flexshow ? '100%' : '40%' }">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>

		</view>
		<view class="indexcentent" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%' }">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>
			<view class="indexcentent-le" :style="{ width: flexshow ? '100%' : '30%'}">
				<Bigboxofcontents></Bigboxofcontents>
			</view>

		</view>
		<view class="Seethemall">
			<Seethemall></Seethemall>
		</view>
	</view>
	<!-- #endif -->

</template>

<script setup>
	// 内容主题
	import Seethemall from "@/components/hone/Seethemall.vue"
	// 引入内容
	import Bigboxofcontents from "@/components/hone/boxofcontents/Bigboxofcontents.vue"
	// 引入页脚内容

	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	const mytop = ref(2)
	const left = ref(1)
	const peross = () => {
		if (process.env.UNI_PLATFORM === 'h5') {
			mytop.value = 2
			left.value = 10
		}
	}

	const headicon = () => {
		showicon.value = !showicon.value
	}

	onMounted(() => {
		window.addEventListener('resize', handleResize);
		peross()
	});
	// 定义头部的数据


	const flexshow = ref(true)

	// 创建一个响应式的 ref 来存储视口宽度  
	const viewportWidth = ref(0); // 初始化为0，稍后在handleResize中更新  

	// 定义一个处理窗口大小变化的函数  
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth; // 更新视口宽度  
		if (viewportWidth.value < 956) {
			flexshow.value = true
			left.value = 3
		} else if (viewportWidth.value == 1738) {
			left.value = 6
		} else if (viewportWidth.value == 1530) {
			left.value = 3
		} else {
			flexshow.value = false
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
	.index {
		width: 100vw;
		// padding: 2rem 10rem;
		box-sizing: border-box;
		// flex-direction: column;

		.index-all {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 1rem 0;

		}

		.Seethemall {
			display: flex;
			justify-content: center;
		}

		.indexcentent-left:hover {
			box-shadow: -2px 2px 5px 1px #968e8e;
		}

		.indexcentent-fight:hover {
			box-shadow: -2px 2px 5px 1px #968e8e;
		}

		/* #ifdef H5 */
		.indexcentent {
			width: 100%;
			padding: 4rem 0;
			display: flex;
			justify-content: space-around;
			border-radius: 1rem;
			overflow: hidden;
			justify-content: space-around;

			.indexcentent-left {
				width: 67%;
				height: 30rem;
				// background-color: yellow;
				border-radius: 1rem;
				overflow: hidden;
			}

			.indexcentent-le {
				width: 30%;
				height: 30rem;
				// background-color: yellow;
				border-radius: 1rem;
				overflow: hidden;
			}


			.indexcentent-fight {
				width: 30%;
				height: 30rem;
				// background-color: yellowgreen;
				border-radius: 1rem;
				overflow: hidden;
			}
		}

		/* #endif */
		/* #ifdef APP */
		.indexcentent {
			width: 100%;
			// padding: 4rem 0;
			margin-top: 2rem;
			display: flex;
			justify-content: space-around;
			border-radius: 1rem;
			overflow: hidden;
			justify-content: space-around;

			.indexcentent-left {
				width: 67%;
				height: 35rem;
				// background-color: yellow;
				border-radius: 1rem;
				overflow: hidden;
			}

			.indexcentent-fight {
				width: 30%;
				height: 35rem;
				// background-color: yellowgreen;
				border-radius: 1rem;
				overflow: hidden;
			}

			.indexcentent-le {
				width: 30%;
				height: 40rem;
				// background-color: yellow;
				border-radius: 1rem;
				overflow: hidden;
			}



		}



		/* #endif */
	}
</style>