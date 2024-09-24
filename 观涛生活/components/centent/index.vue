<template>
	<view class="index">
		<view class="index-box">
			<Stepbar></Stepbar>
		</view>
	</view>
</template>

<script setup>
	//步骤条数据
	import Stepbar from "./Stepbar.vue"
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		height: 100%;
		// position: relative;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		background-color: #f7f8f9;
		padding-bottom: 10rem;
		// margin-bottom: 5rem;

		.index-box {
			width: 100%;
			height: 100%;
			// background-color: red;
			margin: auto;
			display: flex;

			.index-left {
				position: relative;
				width: 10%;
				height: 100%;
				background-color: yellow;
			}

			.index-right {
				width: 80%;
				height: 100%;
				background-color: brown;
			}

		}


	}
</style>