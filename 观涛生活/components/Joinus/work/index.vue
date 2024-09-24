<template>
	<view class="index">
		<view class="index-box">
			<titleset></titleset>
			<view class="indexbox-q" :style="{ flexDirection: flexshow ? 'column' : 'row' }">
				<view class="index-q-t" :style="{ width: flexshow ? '100%' : '24%' }">
					<indexboxset></indexboxset>
				</view>
				<view class="index-q-t" :style="{ width: flexshow ? '100%' : '24%' }">
					<indexboxset></indexboxset>
				</view>
				<view class="index-q-t" :style="{ width: flexshow ? '100%' : '24%' }">
					<indexboxset></indexboxset>
				</view>
				<view class="index-q-t" :style="{ width: flexshow ? '100%' : '24%' }">
					<indexboxset></indexboxset>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import titleset from "@/components/Joinus/joinusttile/index.vue"
	import indexboxset from "./indexbox.vue"
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';

	const viewportWidth = ref(0);
	const withdet = ref(0)
	const hithser = ref(0)
	const flexshow = ref(false)
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth;
		if (viewportWidth.value > 1000) {
			flexshow.value = false
			document.documentElement.style.fontSize = FontSize + 'px';
		} else {
			flexshow.value = true
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

		.index-box {
			width: 80%;
			margin: auto;

			.indexbox-q {
				width: 100%;
				display: flex;
				// flex-direction: column;
				justify-content: space-around;

				.index-q-t {
					width: 24%;
					height: 100%;
					border-radius: 0.5rem;
					overflow: hidden;
					margin-bottom: 1rem;
				}
			}
		}
	}
</style>