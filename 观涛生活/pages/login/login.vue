<template>
	<view class="login">
		<view class="login-box">
			<view class="">
				<indexset v-if="!pnpneshow"></indexset>
				<enroll v-if="pnpneshow"></enroll>
			</view>
		</view>
	</view>
</template>

<script setup>
	import indexset from "@/components/login/index.vue"
	import enroll from "@/components/login/enroll.vue"
	import {
		ref
	} from "vue"
	const pnpneshow = ref(false)
</script>

<style lang="scss" scoped>
	.login {
		width: 100vw;
		height: 100vh;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;

		.login-box {
			width: 20vw;
			height: 40vh;
			background-color: white;
			padding: 2rem 2rem;
			box-sizing: border-box;
			// background-color: white;
		}
	}
</style>