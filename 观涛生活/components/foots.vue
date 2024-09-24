<template>
	<view class="foots" :style="{padding: `${mytop}rem ${left}rem`}">
		<footer>
			<view class="foots-t">

				<view class="foots-t-box">
					<text>下载和关注</text>
					<view class="foots-image">
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
						<image src="https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w"
							mode=""></image>
					</view>
				</view>

				<up-collapse @change="change" @close="close" @open="open">
					<up-collapse-item title="文档指南" name="Docs guide">
						<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
					</up-collapse-item>
					<up-collapse-item title="组件全面" name="Variety components">
						<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
					</up-collapse-item>
					<up-collapse-item title="众多利器" name="Numerous tools">
						<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
					</up-collapse-item>
				</up-collapse>
			</view>
			<view class="footsbox-l">
				<text class="footsbox-l-title">观涛</text>
			</view>
			<view class="footxt">
				<view class="" style="text-align: center;font-size: 0.8rem; color: #a8abb0;margin-top: 1rem;">
					举报电话：4006018900，举报邮箱：tousujubao@meituan.com，
					以上渠道均可投诉举报：互联网违法和不良信息，涉及未成年人保护、互联网算法推荐、谣言类信息、生活服务类专项举报等相关问题。
				</view>
				<view class="logo-box"
					style="display: flex;align-items: center;justify-content: center;font-size: 0.7rem;color: #a8abb0;margin-top: 1rem;">
					<text class="" style="margin-right: 0.5rem;">
						©2024 美团版权所有
					</text>
					<view class="" style="margin-right: 0.5rem;border-bottom: 1px solid #a8abb0;">
						京ICP备10211739号
					</view>
					<image src="../static/logo.png" mode="" style="width: 1rem;height: 1rem;margin-right: 0.5rem;">
					</image>
					<view class="" style="margin-right: 0.5rem;border-bottom: 1px solid #a8abb0;">
						京公网安备11000002002052号
					</view>
					<view class="" style="margin-right: 0.5rem;border-bottom: 1px solid #a8abb0;">
						隐私政策
					</view>
					<view class="" style="margin-right: 0.5rem;border-bottom: 1px solid #a8abb0;">
						规则中心
					</view>
				</view>
			</view>
		</footer>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';




	const open = (e) => {
		// console.log('open', e)  
	};

	// 定义 close 方法  
	const close = (e) => {
		// console.log('close', e)  
	};

	// 定义 change 方法  
	const change = (e) => {
		// console.log('change', e)  
	};





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


	const flexshow = ref(false)

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
		// document.body.style.fontSize = viewportWidth.value
		// 打印当前视口宽度  
		// 根据视口宽度更新其他状态或执行其他逻辑  
		// if (viewportWidth.value > 1275) {
		// 	showtitle.value = false;
		// } else {
		// 	showtitle.value = true;
		// }
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
	.foots {
		width: 100%;
		// height: 300px;
		margin-top: 3rem;
		background-color: #f3f3f4;
		box-sizing: border-box;

		.foots-t {
			width: 100%;
			height: 80%;

			// display: flex;
			.foots-t-box {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;

				text {
					margin-left: 1.5rem;
					color: #303133;

				}

				/* #ifdef H5 */
				.foots-image {
					display: flex;
					align-items: center;

					image {
						width: 2rem;
						height: 2rem;
						padding-bottom: 1rem;
						margin-right: 0.7rem;
					}
				}

				/* #endif */
				/* #ifdef APP */
				.foots-image {
					display: flex;
					align-items: center;

					image {
						width: 1.5rem;
						height: 1.5rem;
						// padding-bottom: rem;
						margin-right: 0.2rem;
					}
				}

				/* #endif */
			}
		}

		.footsbox-l {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 3.5rem;

			.footsbox-l-title {
				font-size: 3rem;
			}
		}

		.ulboxli {
			display: flex;
			align-items: center;

			.footsimg {
				width: 2rem;
				height: 2rem;
			}

			text {
				font-size: 0.8rem;
			}

			.footsiset {
				display: flex;
				align-items: center;
				margin: 0 1rem;
			}
		}

	}

	.logo-box>view:hover {
		color: black;
		border-bottom: 1px solid black;
	}

	.footxt {
		background-color: #f3f3f4;
		width: 100%;
		height: 100%;
		display: flex;
		margin-top: 3rem;
		// border-top: 1px solid #9a9da3;
		flex-direction: column;
	}
</style>