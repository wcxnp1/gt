<template>
	<view class="navigation" style="margin-top: 1rem;">
		<view class="ul" style="margin-top: 1rem;">
			<view class="li" @click="headliserrouter(item.id)" v-for="(item,index) in dataset" :key="index">
				<text class="navigationtitle">{{item.name}}</text>
				<up-icon name="arrow-right" v-if="(item.id==5) || (item.id==4)" color="#010c1c" size="15"></up-icon>
			</view>
		</view>
		<view class="navigation-t">
			<text class="">下载和关注</text>
		</view>
		<view class="iconselection">
			<view class="iconimg">
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
			</view>
			<view class="iconimg">
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
				<image class="img" src="https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w"
					alt="" />
			</view>
		</view>
		<view class="navigation-chia">
			<text>简体中文 / </text>
			<text>繁体中文</text>
		</view>
		<view class="TranslatedintoEnglish">
			<text>English Version</text>
			<up-icon name="arrow-rightward" color="#00101e" size="18"></up-icon>
		</view>
	</view>
</template>

<script setup>
	// 定义数据
	import {
		ref,
		defineEmits
	} from "vue"
	const dataset = ref([{
			id: '1',
			name: '首页',
		},
		{
			id: '2',
			name: '和美团合作',

		},
		{
			id: '3',
			name: '我们的科技',

		},
		{
			id: '4',
			name: '企业社会责任',

		},

		{
			id: '5',
			name: '美团公益',

		},
		{
			id: '6',
			name: '投资者关系',

		},
		{
			id: '7',
			name: '加入我们',
		}

	])
	// 定义变量是否显示与隐藏
	// #ifdef H5
	const emit = defineEmits(['showsubassembly', 'ifshowset'])
	const isAct = ref(false)
	const NAN = ref(false)
	const headliserrouter = (i) => {
		if (i == 4) {
			isAct.value = true
			emit('showsubassembly', isAct.value)
		} else if (i == 5) {
			isAct.value = true
			emit('ifshowset', NAN.value)
		}

	}
	// // #endif
	// #ifdef APP

	const emit = defineEmits(['showsu', 'ifshowsetwe'])
	const headliserrouter = (i) => {
		if (i == 4) {
			emit('showsu', true)
		} else if (i == 5) {
			emit('ifshowsetwe', true)
		} else if (i == 2) {
			uni.redirectTo({
				url: '/pages/index/index'
			});
		} else if (i == 1) {
			uni.redirectTo({
				url: '/pages/Home/Home'
			});
		} else if (i == 7) {
			uni.redirectTo({
				url: '/pages/Joinus/Joinus'
			});
		}


	}
	// #endif
</script>

<style lang="scss" scoped>
	.navigation {
		width: 100%;
		// height: 100rem;
		overflow: hidden;

		.ul {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			/* #ifdef APP */
			.li {
				width: 100%;
				height: 3rem;
				line-height: 3rem;
				display: flex;
				font-size: 1rem;
				justify-content: space-between;
				font-size: 1rem;

				.navigationtitle {
					width: 100%;
					font-size: 1rem;
				}

			}

			/* #endif */
			/* #ifdef H5 */
			.li {
				width: 100%;
				height: 3rem;
				line-height: 3rem;
				display: flex;
				font-size: 1rem;
				justify-content: space-between;
				font-size: 1rem;

				.navigationtitle {
					width: 100%;
					font-size: 1rem;
				}

			}

			/* #endif */
		}

		.navigation-t {
			font-size: 1rem;
			margin-top: 2.5rem;
		}

		.iconselection {
			width: 100%;

			.iconimg {
				display: flex;
				margin-top: 1rem;
				// background-color: red;

				/* #ifdef APP */
				.img {
					width: 5rem;
					height: 3rem;
					margin-right: 1.5rem;
				}

				/* #endif */
				/* #ifdef H5 */
				.img {
					width: 5rem;
					height: 3rem;
					margin-right: 1.5rem;
				}

				/* #endif */
			}
		}

		.navigation-chia {
			margin-top: 2rem;

			text {
				font-size: 1.1rem;
				font-weight: 800;
			}

			text:nth-child(2) {
				color: #a2a2a2;
			}
		}

		.TranslatedintoEnglish {
			margin-top: 2rem;
			font-size: 1rem;
			display: flex;
			justify-content: space-between;
			// margin-left: 1rem;
		}
	}
</style>