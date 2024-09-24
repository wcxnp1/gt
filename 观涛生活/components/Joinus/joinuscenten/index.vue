<template>
	<view class="index">
		<view class="index-box">
			<cententtitle></cententtitle>
			<view class="index-centen">
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<cententbox></cententbox>
				</view>
				<view class="index-centen-box" :style="{'width':`${withset}%`}">
					<!-- <cententbox></cententbox> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 引入标题
	import cententtitle from "../joinusttile/index.vue"
	// 引入box ‘
	import cententbox from "./cententbox.vue"
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';

	const viewportWidth = ref(0);
	const withset = ref(25)

	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth;
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
			withset.value = 19
		} else {
			withset.value = 30
			document.documentElement.style.fontSize = (FontSize / 1) + 'px';

		};
	}

	onMounted(() => {

		handleResize(); // 立即调用以设置初始值  
		window.addEventListener('resize', handleResize);
	});

	// 在组件卸载前移除窗口大小变化监听器  
	onUnmounted(() => {
		window.removeEventListener('resize', handleResize);
	});
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;

		.index-box {
			width: 80%;
			margin: auto;
		}

		.index-centen {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.index-centen-box {
				width: 19%;
				margin: 1rem 0;
			}
		}
	}
</style>