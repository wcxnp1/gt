<template>
	<view class="Bigboxofcontents">
		<view class="Bigboxofcontents-da">
			<view class="Bigboxofcontents-image">
				<image
					src="https://img.meituan.net/smartvenus/46704c7da8685160b75b5dfd3721c0f2493524.jpg@620w_60Q%7Cpr=1"
					alt="" class="Bigboxofcontents-img" />
			</view>
			<view class="Bigboxofcontents-box">
				<view class="Bigboxofcontents-title">
					固生堂与美团医疗达成战略合作 助力中医机构数字化升级
				</view>
				<view class="Bigboxofcontents-text">
					9月11日，固生堂与美团医疗达成战略合作，为用户提供便捷。优质的中医服务
				</view>
				<view class="Bigboxofcontents-name">
					2024-09-12
				</view>
			</view>
		</view>
		<view class="upover">

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const show = ref(true);
</script>

<style lang="scss" scoped>
	.Bigboxofcontents {
		width: 100%;
		height: 100%;

		.Bigboxofcontents-da {
			width: 100%;
			height: 100%;

			.Bigboxofcontents-image {
				width: 100%;
				height: 70%;
				overflow: hidden;
				position: relative;

				.Bigboxofcontents-img {
					width: 100%;
					height: 100%;
					overflow: hidden;
				}

				.upover {
					// display: none !important;
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.5);

				}
			}


			.Bigboxofcontents-image:hover {
				transform: scale(1.01);

			}

			.Bigboxofcontents-box {
				padding: 2rem 2rem;
				box-sizing: border-box;
				color: #8a8e94;


				.Bigboxofcontents-title {
					font-size: 1.2rem;
					color: black;

					// font-weight: 600;

				}

				.Bigboxofcontents-text {
					// margin: 0.5rem 0;
				}
			}
		}


	}

	.Bigboxofcontents-image:hover .upover {
		display: block !important;
	}
</style>