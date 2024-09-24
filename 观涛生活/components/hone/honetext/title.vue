<template>
	<view class="home">
		<!-- #ifdef H5 -->
		<view class="home-title">
			<view class="hometitle-logo">
				观涛是一家科技零售公司
			</view>
			<view class="hometitle-text">
				美团以 “零售 + 科技” 的斩落践行“ 帮大家吃的更好，生活更好” 的公司使命。
			</view>
			<view class="hometitle-txt">
				服务零售和商品零售在需求侧和供给侧的数字化升级，和广大合作伙伴一起努力为消费者提供品质服务。2018年9月20日，美团在港交所挂牌上市。<br />
				美团始终以客户为中心，不断加大在新技术上的研发投入。美团会和大家一起努力，更好承担社会责任，更多创造社会价值。
			</view>
			<view class="home-xia">
				<view class="homeQRcode" style="display: flex;">
					<svg t="1726210669884" class="icon" viewBox="0 0 1024 1024" version="1"
						xmlns="http://www.w3.org/2000/svg" p-id="4338" width="50" height="50">
						<path
							d="M597.333333 597.333333h85.333334v-85.333333h85.333333v128h-85.333333v42.666667h-85.333334v-42.666667h-85.333333v-128h85.333333v85.333333z m-384-85.333333h256v256H213.333333v-256z m85.333334 85.333333v85.333334h85.333333v-85.333334H298.666667zM213.333333 213.333333h256v256H213.333333V213.333333z m85.333334 85.333334v85.333333h85.333333V298.666667H298.666667z m213.333333-85.333334h256v256h-256V213.333333z m85.333333 85.333334v85.333333h85.333334V298.666667h-85.333334z m85.333334 384h85.333333v85.333333h-85.333333v-85.333333z m-170.666667 0h85.333333v85.333333h-85.333333v-85.333333z"
							fill="#444444" p-id="4339"></path>
					</svg>
					<text style="line-height: 2.7rem;">下载观涛App</text>
					<view class="QRcode">
						<image src="/static/erweim.png" mode="" style="width: 100%;height: 100%;"></image>
					</view>
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
				美团以 “零售 + 科技” 的斩落 <br /> 行“ 帮大家吃的更好，生活更好” 的公司使命。
			</view>
			<view class="hometitle-txt">
				服务零售和商品零售在需求侧和供给侧的数字化升级，和广大合作伙伴一起努力为消费者提供品质服务。2018年9月20日，美团在港交所挂牌上市。<br />
				美团始终以客户为中心，不断加大在新技术上的研发投入。美团会和大家一起努力，更好承担社会责任，更多创造社会价值。
			</view>
			<view class="home-xia">
				<view class="homeQRcode" style="display: flex;">
					<svg t="1726210669884" class="icon" viewBox="0 0 1024 1024" version="1"
						xmlns="http://www.w3.org/2000/svg" p-id="4338" width="50" height="50">
						<path
							d="M597.333333 597.333333h85.333334v-85.333333h85.333333v128h-85.333333v42.666667h-85.333334v-42.666667h-85.333333v-128h85.333333v85.333333z m-384-85.333333h256v256H213.333333v-256z m85.333334 85.333333v85.333334h85.333333v-85.333334H298.666667zM213.333333 213.333333h256v256H213.333333V213.333333z m85.333334 85.333334v85.333333h85.333333V298.666667H298.666667z m213.333333-85.333334h256v256h-256V213.333333z m85.333333 85.333334v85.333333h85.333334V298.666667h-85.333334z m85.333334 384h85.333333v85.333333h-85.333333v-85.333333z m-170.666667 0h85.333333v85.333333h-85.333333v-85.333333z"
							fill="#444444" p-id="4339"></path>
					</svg>
					<text style="line-height: 2.7rem;">下载观涛App</text>
					<view class="QRcode">
						<image src="/static/erweim.png" mode="" style="width: 100%;height: 100%;"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script setup>

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
		.home-title {
			margin: auto;
			text-align: center;

			.hometitle-logo {
				font-size: 1.5rem;
				font-weight: 700;
				color: #001421;
			}

			.hometitle-text {
				font-size: 1rem;
				color: #001421;
			}
		}

		/* #endif */


	}
</style>