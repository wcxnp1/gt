<template>
	<view class="index">
		<indexpc v-show="!showset"></indexpc>
		<indexapp v-show="showset"></indexapp>
	</view>
</template>

<script setup>
	// 引入pc 
	import indexpc from "./indexpc.vue"
	// 引入App
	import indexapp from "./indexapp.vue"
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';

	const viewportWidth = ref(0);
	const showset = ref(false)

	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth;
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
			showset.value = false
		} else {
			showset.value = true
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
		// height: 200px;
		margin-top: 2rem;

		.index-box {
			width: 80%;
			margin: auto;
			display: flex;
			// justify-content: center;

			.index-box-left {
				width: 50%;
				margin: auto;

				.indexbox-title {
					display: flex;
					line-height: 3rem;
					justify-content: space-between;
					border-bottom: 1px solid #eee;
					color: #404040;
				}
			}

			.index-box-left:nth-child(1) {
				// border-right: 1px solid #eee;
				margin-right: 1rem;
			}
		}


	}
</style>