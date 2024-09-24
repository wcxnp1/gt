<template>
	<view class="joinusul ">
		<view class="setul">
			<view class="ul">
				<li class="li" :style="{'font-size':`${fontsize}rem`,'padding':`${mytop}rem ${myleft}rem` }">北斗计划</li>
				<li class="li" :style="{'font-size':`${fontname}rem `,'padding':`${mytop}rem ${myleft}rem` }">
					面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入</li>
			</view>
			<view class="ul">
				<li class="li" :style="{'font-size':`${fontsize}rem`,'padding':`${mytop}rem ${myleft}rem` }">北斗计划</li>
				<li class="li" :style="{'font-size':`${fontname}rem `,'padding':`${mytop}rem ${myleft}rem` }">
					面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入</li>
			</view>
			<view class="ul">
				<li class="li" :style="{'font-size':`${fontsize}rem`,'padding':`${mytop}rem ${myleft}rem` }">北斗计划</li>
				<li class="li" :style="{'font-size':`${fontname}rem `,'padding':`${mytop}rem ${myleft}rem` }">
					面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入</li>
			</view>
			<view class="ul">
				<li class="li" :style="{'font-size':`${fontsize}rem`,'padding':`${mytop}rem ${myleft}rem` }">北斗计划</li>
				<li class="li" :style="{'font-size':`${fontname}rem `,'padding':`${mytop}rem ${myleft}rem` }">
					面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入</li>
			</view>
			<view class="ul">
				<li class="li" :style="{'font-size':`${fontsize}rem`,'padding':`${mytop}rem ${myleft}rem` }">北斗计划</li>
				<li class="li" :style="{'font-size':`${fontname}rem `,'padding':`${mytop}rem ${myleft}rem` }">
					面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入</li>
			</view>
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

	const viewportWidth = ref(0);
	const fontsize = ref(0)
	const fontname = ref(0)
	const mytop = ref(0.7)
	const myleft = ref(0)
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth;
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
			fontsize.value = 1
			fontname.value = 0.8
		} else {
			document.documentElement.style.fontSize = (FontSize / 1) + 'px';
			if (viewportWidth.value < 1000) {
				fontsize.value = 1
				fontname.value = 0.7
				mytop.value = 0.8
			}
			if (viewportWidth.value < 900) {
				fontsize.value = 0.9
				fontname.value = 0.6
				mytop.value = 0.7
			}
			if (viewportWidth.value < 800) {
				fontsize.value = 0.8
				fontname.value = 0.6
				mytop.value = 0.4
			}
			if (viewportWidth.value < 7320) {
				fontsize.value = 0.8
				fontname.value = 0.5
				mytop.value = 0.4
			}
			if (viewportWidth.value < 700) {
				fontsize.value = 0.7
				fontname.value = 0.5
				mytop.value = 0.3
			}
			if (viewportWidth.value < 650) {
				fontsize.value = 0.7
				fontname.value = 0.4
				mytop.value = 0.3
			}
			if (viewportWidth.value < 600) {
				fontsize.value = 0.6
				fontname.value = 0.4
				mytop.value = 0.3
			}
			if (viewportWidth.value < 500) {
				fontsize.value = 0.5
				fontname.value = 0.3
				mytop.value = 0.2
			}
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
	.joinusul {
		width: 100%;
		// color: blue;
		// margin-top: 1rem;

		.setul {
			width: 80%;
			margin: auto;
			background-color: #f1ebe9;
			border-radius: 0.5rem;
			display: flex;
			justify-content: space-around;

			.ul {
				// text-align: left;
				width: 13%;

				.li {
					width: 100%;
					// padding: 0.7rem 0;
				}

				.li:nth-child(1) {
					font-size: 1rem;
					font-weight: 600;
					color: #000000;
				}

				.li:nth-child(2) {
					font-size: 0.6rem;
					font-weight: 600;
					color: #000000;
					color: #545b64;
				}

			}
		}
	}
</style>