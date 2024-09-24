<template>
	<view class="home">
		<!-- #ifdef H5 -->
		<view class="home-title">
			<view class="hometitle-logo">
				观涛是一家科技零售公司
			</view>
			<view class="hometitle-text">
				美团以“零售 + 科技”的战略 <br />
				践行“帮大家吃得更好，生活更好”的公司使命
			</view>
			<view class="Showupandmore" @click="headsetshow" v-if="!showtext">
				<text>了解更多</text>
				<up-icon name="arrow-down" color="#111925"></up-icon>
			</view>
			<view class="titleto-txt" v-if="showtext">
				<view class="titlename">
					自2010年3月成立以来
				</view>
				<view class="titlename">
					美团持续推动服务零售和商品零售在需求侧和供给侧的数字
				</view>
				<view class="titlename">
					化升级，和广大合作伙伴一起努力为消费者提供品质服务。
				</view>
				<view class="titlename">
					2018年9月20日，美团在港交所挂牌上市。
				</view>
				<view class="titlename" style="margin-top: 1rem;">
					美团始终以客户为中心，
				</view>
				<view class="titlename">
					不断加大在新技术上的研发投入。
				</view>
				<view class="titlename">
					美团会和大家一起努力，更好承担社会责任，
				</view>
				<view class="titlename">
					更多创造社会价值。
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP -->
		<view class="home-title">
			<view class="hometitle-logo">
				观涛是一家科技零售公司
			</view>
			<view class="hometitle-text">
				美团以“零售 + 科技”的战略 <br />
				践行“帮大家吃得更好，生活更好”的公司使命
			</view>
			<view class="Showupandmore" @click="headsetshow" v-if="!showtext">
				<text>了解更多</text>
				<up-icon name="arrow-down" color="#111925"></up-icon>
			</view>
			<view class="titleto-txt" v-if="showtext">
				<view class="titlename">
					自2010年3月成立以来
				</view>
				<view class="titlename">
					美团持续推动服务零售和商品零售在需求侧和供给侧的数字
				</view>
				<view class="titlename">
					化升级，和广大合作伙伴一起努力为消费者提供品质服务。
				</view>
				<view class="titlename">
					2018年9月20日，美团在港交所挂牌上市。
				</view>
				<view class="titlename" style="margin-top: 1rem;">
					美团始终以客户为中心，
				</view>
				<view class="titlename">
					不断加大在新技术上的研发投入。
				</view>
				<view class="titlename">
					美团会和大家一起努力，更好承担社会责任，
				</view>
				<view class="titlename">
					更多创造社会价值。
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script setup>
	import {
		ref,

	} from 'vue';
	const showtext = ref(false)
	// 显示更多内容
	const headsetshow = () => {
		showtext.value = !showtext.value
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;

		/* #ifdef H5 */
		.titleto-txt {
			margin-top: 1rem;
		}

		.titlename {
			font-size: 1.5rem;
			color: #abaeb0;
		}

		.Showupandmore {
			display: flex;
			font-size: 1.5rem;
			align-items: center;
			justify-content: center;
			margin-top: 2rem;
		}

		.hometitle-logo {
			font-size: 2.5rem;
			font-weight: 700;
			color: black;
		}

		.hometitle-text {
			font-size: 1.7rem;
			margin-top: 2rem;
		}

		.hometitle-txt {
			font-size: 1.2rem;
			margin-top: 1rem;
			color: #b2b6ba;
		}

		.home-xia {
			margin-top: 1.5rem;
			display: flex;
			justify-content: center;
			font-size: 1.7rem;
		}

		.homeQRcode:hover .QRcode {
			display: block !important;
		}

		.homeQRcode {
			position: relative;

			.QRcode {
				display: none !important;
				width: 170px;
				height: 150px;
				position: absolute;
				left: 19px;
				bottom: -170px;
			}
		}

		/* #endif */
		/* #ifdef APP */
		.titleto-txt {
			margin-top: 1rem;
		}

		.titlename {
			font-size: 1rem;
			color: #abaeb0;
		}

		.Showupandmore {
			display: flex;
			font-size: 1rem;
			align-items: center;
			justify-content: center;
			margin-top: 2rem;
		}

		.hometitle-logo {
			font-size: 1.5rem;
			font-weight: 1000;
			color: black;
		}

		.hometitle-text {
			font-size: 1.2rem;
			margin-top: 2rem;
			color: #7e7f81;
		}

		.hometitle-txt {
			font-size: 1.2rem;
			margin-top: 1rem;
			color: #b2b6ba;
		}

		.home-xia {
			margin-top: 1.5rem;
			display: flex;
			justify-content: center;
			font-size: 1.7rem;
		}

		.homeQRcode:hover .QRcode {
			display: block !important;
		}

		.homeQRcode {
			position: relative;

			.QRcode {
				display: none !important;
				width: 170px;
				height: 150px;
				position: absolute;
				left: 19px;
				bottom: -170px;
			}
		}

		/* #endif */

	}
</style>