<template>
	<view class="Joinusinput" :style="{'margin':`${top}rem`}">
		<view class="Joinusinput-box">
			<input type="text" class="my-input" placeholder="请输入内容..." :style="{'padding':`${size}rem  0`}" />
			<view class="Joinusicon">
				<up-icon name="search" color="#000001" size="28"></up-icon>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue';

	// 使用 defineProps 来定义组件的 props  
	const props = defineProps({
		size: {
			type: Number,
			default: 1
		},
		top: {
			type: Number,
			default: 1
		}
	});
</script>

<style lang="scss" scoped>
	.Joinusinput {
		width: 100%;
		// margin-bottom: 1rem;
		.Joinusinput-box {
			width: 100%;
			margin: auto;
			display: flex;
			justify-content: center;
			position: relative;

			.my-input {
				width: 40%;
				// padding: 0.9rem 0;
				padding-left: 1rem;
				text-align: left;
				background-color: white;
				border-radius: 1.5rem;
				// display: flex;
				// align-items: center;

			}

			.Joinusicon {
				position: absolute;
				top: 8%;
				right: 31%;
				width: 5%;
				height: 82%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #ffd100;
				border-radius: 100%;
			}
		}
	}
</style>