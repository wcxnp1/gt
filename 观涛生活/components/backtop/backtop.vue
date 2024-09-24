<template>
	<view class="wrap">
		<view class="index">
			<view class="index-name" @click="headup">
				<up-icon name="arrow-up" color="#001421" size="28"></up-icon>
			</view>
			<view class="index-name" @click="headshow">
				<up-icon name="chat" size="38"></up-icon>
				<text class="">
					立即咨询
				</text>
			</view>
			<view class="index-name" @click="headdown">
				<up-icon name="arrow-down" color="#001421" size="28"></up-icon>
			</view>
		</view>
	</view>
	<backxin v-show="ivonshow" @iconset="iconset"></backxin>
</template>

<script setup>
	import {
		ref,
		defineEmits
	} from 'vue';
	import backxin from "./xinxi.vue"
	const emit = defineEmits(['headup', 'headdown'])
	const ivonshow = ref(false)
	const headshow = () => {
		ivonshow.value = !ivonshow.value
	}
	const iconset = () => {
		ivonshow.value = !ivonshow.value
	}
	// 返回顶部
	const headup = () => {
		emit('headup')
	}
	// 返回底部
	const headdown = () => {
		emit('headshow')
	}
</script>

<style lang="scss" scoped>
	/* #ifdef APP */
	.wrap {
		position: fixed;
		top: 50%;
		right: 0;
		transform: translate(-10%, -50%);

	}

	/* #endif */
	/* #ifdef H5 */
	.wrap {
		position: fixed;
		top: 50%;
		right: 0;
		z-index: 999;
		transform: translate(-10%, -50%);

	}

	/* #endif */
	.index {
		width: 100px;
		// height: 500px;
		border-radius: 1rem;
		// line-height: 100px;
		text-align: center;
		// background: rgba(0, 0, 0, 0.1);
		background-color: white;
		overflow: hidden;

		.index-name {
			width: 100%;
			height: 80px;
			display: flex;
			color: black;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			// line-height: 80px;
			// background-color: #ff9e1f;
		}

		.index-name:hover {
			background-color: #ff9420;
			// color: white;
		}
	}
</style>