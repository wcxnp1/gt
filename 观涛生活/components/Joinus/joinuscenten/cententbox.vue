<template>
	<view class="index">
		<view class="centenbox">
			<text>观涛生活</text>
			<view class="centenbox-top">
				<text class="" style="font-size: 0.9rem;">观涛生活</text>
				<view class="" style="font-size: 0.8rem;margin-top: 0.5rem;">
					大壮得得得吧怒弗恩付费不犯法螺蛳粉么商品房金额是漂发剂哦发布额u封闭翻倍翻倍发吧月份儿
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.index {
		width: 100%;

		.centenbox:hover .centenbox-top {
			display: block !important;
		}

		.centenbox {
			width: 100%;
			// height: 100px;
			padding: 1rem 0;
			display: flex;
			align-items: center;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			justify-content: center;
			background-color: white;
			border-radius: 0.5rem;
			position: relative;

			.centenbox-top {
				// width: 200px;
				display: none !important;
				padding: 0.5rem 1rem;
				position: absolute;
				bottom: -100px;
				left: -20px;
				width: 100%;
				background-color: white;
				border-radius: 0.5rem;
				z-index: 9999;
			}


		}


		.centenbox:hover {
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

		}



	}
</style>