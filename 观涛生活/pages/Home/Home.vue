<template>
	<view class="home">
		<!-- #ifdef APP -->
		<!-- <backtop></backtop> -->
		<Navigationbar></Navigationbar>
		<topic></topic>
		<indexset></indexset>
		<foots></foots>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<main @scroll="heandscrolll">
			<backtop v-if="scrollshow" @headup="headup" @headshow="headshow"></backtop>
			<Navigationbar></Navigationbar>
			<topic></topic>
			<indexset></indexset>
			<foots></foots>
		</main>
		<!-- #endif -->
	</view>
</template>

<script setup>
	// 头部
	import Navigationbar from "@/components/Navigationbar.vue"
	// 主题logo
	import topic from "@/components/hone/topic.vue"

	// 主题内容
	import indexset from "@/components/hone/boxofcontents/index.vue"
	// 内容
	// import Bigboxofcontents from "@/components/hone/boxofcontents/Bigboxofcontents.vue"
	import foots from "@/components/foots.vue"
	// 引入客服信息
	import backtop from "@/components/backtop/backtop.vue"
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	import uppopup from "@/components/uppopup.vue"
	// 头部的显示隐藏的关键字
	const showtitle = ref(false)
	// 头部箭头的显示与隐藏
	const showDropdown = ref(false)
	// 控制是否显示icon图标
	const showicon = ref(false)

	const headicon = () => {
		showicon.value = !showicon.value
	}

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
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
		} else {
			document.documentElement.style.fontSize = (FontSize / 2) + 'px';
		}
		// document.body.style.fontSize = viewportWidth.value
		// 打印当前视口宽度  
		// 根据视口宽度更新其他状态或执行其他逻辑  
		if (viewportWidth.value > 1275) {
			showtitle.value = false;
		} else {
			showtitle.value = true;
		}
	};

	// 在组件挂载后添加窗口大小变化监听器  
	onMounted(() => {
		// 设置初始的视口宽度  
		handleResize(); // 立即调用以设置初始值  
		window.addEventListener('resize', handleResize); // 添加事件监听器  
		window.addEventListener('scroll', heandscrolll);
	});

	// 在组件卸载前移除窗口大小变化监听器  
	onUnmounted(() => {
		window.removeEventListener('resize', handleResize);
	});
	// 做右边的消息框
	const scrollshow = ref(false)
	const heandscrolll = (event) => {
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > 700) {
			scrollshow.value = true
		}
	}
	// 返回顶部
	const headup = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
	// 返回底部
	const headshow = () => {
		console.log(3233);
		window.scrollTo({
			top: 2000,
			behavior: 'smooth',
		});
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100%;
		// height: 100vh;
		// background-color: #ffffff;
		background-color: #f7f8f9;
		margin-top: 1rem;

	}

	.scrollable-content {
		// height: 1000px;
		/* 或其他足够小的值以产生滚动条 */
		overflow-y: auto;
		/* 允许垂直滚动 */
	}
</style>