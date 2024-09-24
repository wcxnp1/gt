<template>
	<view class="uppuop">
		<up-popup :show="show" mode="left" @close="close" @open="open">
			<view class="uppuop-left">
				<view class="uppuop-logo">
					<view class="" style="margin: 2rem;font-weight: 800;font-size: 2rem;">观涛</view>

					<scroll-view scroll-y="true" style="height: 600px;">
						<!-- #ifdef APP -->
						<navigation @showsu="handleData" @ifshowsetwe="ifshowsetwe" v-show="!isset">
						</navigation>
						<Navigatethecomplex v-show="showset" @headset="headset">
						</Navigatethecomplex>
						<nationbtn @headiconset="headiconset" v-show="ifset"></nationbtn> -->
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<transition name="fade" mode="out-in">
							<view :key="IsNaN ? 'complex' : 'navigation'">
								<navigation v-show="!IsNaN" @showsubassembly="handleDataUpdate" @ifshowset="ifshowset">
								</navigation>
								<Navigatethecomplex v-show="NAN && IsNaN" @headset="headset">
								</Navigatethecomplex>
								<nationbtn v-show="!NAN && IsNaN " @headiconset="headiconset"></nationbtn>
							</view>
						</transition>
						<!-- #endif -->
					</scroll-view>

				</view>
			</view>
		</up-popup>
	</view>
</template>

<script setup>
	// 原始的导航栏
	import navigation from "@/components/Homedata/navigation.vue"
	// 导航栏的二级菜单
	import Navigatethecomplex from "./Homedata/Navigatethecomplex.vue"
	// 导航栏的第二季
	import nationbtn from "./Homedata/nationbtn.vue"
	import {
		ref,
		onMounted
	} from 'vue';

	// 定义右话出来的数据
	const show = ref(false);
	// 同步获取  
	const Heightset = ref()
	const systemInfo = uni.getSystemInfoSync();
	Heightset.value = systemInfo.windowHeight
	// console.log(systemInfo.windowWidth, 'systemInfo.windowWidth'); // 屏幕宽度  
	// console.log(systemInfo.windowHeight, 'systemInfo.windowWidth'); // 屏幕高度  
	function open() {
		// 打开逻辑，比如设置 show 为 true  
		show.value = true;
		// console.log('open');  
	}

	function close() {
		// 关闭逻辑，设置 show 为 false  
		show.value = false;
		// console.log('close');  
	}
	// #ifdef H5
	//控制组件的显示与隐藏
	const IsNaN = ref(false)
	const NAN = ref(false)

	const headset = () => {
		IsNaN.value = false
	}
	const handleDataUpdate = (data) => {
		IsNaN.value = true
		NAN.value = data
	}
	const NANset = ref(false)
	const ifshowset = (data) => {
		IsNaN.value = true
		NAN.value = data
	}
	const headiconset = (data) => {
		IsNaN.value = false
	}
	// #endif
	// #ifdef APP
	const showset = ref(false)
	const isset = ref(false)
	const ifset = ref(false)
	const handleData = (data) => {
		showset.value = data
		isset.value = true
	}
	const headiconset = (data) => {
		ifset.value = data
		isset.value = false
	}
	const ifshowsetwe = (data) => {
		ifset.value = data
		isset.value = true
	}
	const headset = (data) => {
		showset.value = data
		isset.value = false
	}
	// #endif
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
	.uppuop {
		width: 100%;
		// height: 100%;
		display: flex;
		z-index: 9999;

		.uppuop-left {
			width: 250px;

			.uppuop-logo {
				width: 100%;
				padding: 0px 3rem;
				box-sizing: border-box;

			}
		}
	}

	/* 定义过渡动画 */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>