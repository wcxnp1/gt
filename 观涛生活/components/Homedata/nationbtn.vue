<template>
	<view class="">
		<view class="Navigatethecomplex" style="margin-top: 1rem;">
			<view class="Navigatethecomplextitle">
				<up-icon name="arrow-left" color="#000e1d" size="18" @click="headiconset"></up-icon>
				<text style="font-size: 1rem;margin-left: 0.5rem;">美团公益</text>
			</view>

			<view class="Navigatethecomplextitletop">
				<view class="txt" style="font-size: 1rem;margin: 0.5rem 0; ">美团乡村儿童操场</view> <br />
				<view class="txt" style="font-size: 1rem;margin: 0.5rem 0; ">美团公益基金会</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		defineEmits
	} from "vue"
	// #ifdef APP
	const emit = defineEmits(['headiconset'])
	const headiconset = () => {
		emit('headiconset', false)
	}
	// #endif
	// #ifdef H5
	const emit = defineEmits(['headiconset'])
	const headiconset = () => {
		emit('headiconset', false)
	}
	// #endif
</script>

<style lang="scss" scoped>
	.Navigatethecomplextitle {
		height: 4rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;


	}
</style>