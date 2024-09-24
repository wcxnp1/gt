<template>
	<view class="Navigatethecomplex" style="margin-top: 1rem;" v-show="NANset">
		<view class="Navigatethecomplextitle">
			<up-icon name="arrow-left" color="#000e1d" size="18" @click="headset"></up-icon>
			<text style="font-size: 1rem;margin-left: 0.5rem;">企业社会责任</text>
		</view>
		<view class="Navigatethecomplexlist">
			<view class="li" v-for="(item,index) in data" :key="index">
				{{item}}
			</view>
		</view>
		<view class="Navigatethecomplextitletop">
			<text style="font-size: 1rem;margin-left: 0.5rem;">下载中心</text>
		</view>
	</view>

</template>

<script setup>
	props: ['NANset']
	import {
		ref,
		defineEmits
	} from "vue"

	const data = ref([
		'个体',
		"便利用户生活",
		"骑手关怀与发展",
		"涌现新职业",
		"产业",
		"助力市场繁荣",
		"支持小商户发展",
		"中华老字号服务报",
		"社会",
		"推动绿色消费",
		"支持乡村振兴",
		"参与应急救灾"
	])
	// #ifdef H5
	const emit = defineEmits(['headset'])
	const headset = () => {
		emit('headset')
	}
	// #endif
	// #ifdef APP
	const emit = defineEmits(['headset'])
	const headset = () => {
		emit('headset', false)
	}
	// #endif
</script>

<style lang="scss" scoped>
	.Navigatethecomplex {
		width: 100%;

		.Navigatethecomplextitle {
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			height: 4rem;
		}

		.Navigatethecomplextitletop {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			// text-align: left;
			border-top: 1px solid #eee;
			height: 4rem;
		}

		.Navigatethecomplexlist {
			margin-top: 1rem;

			.li {
				height: 3rem;
				font-size: 1rem;
			}

			.li:nth-child(1) {
				color: #bcbec2;
			}

			.li:nth-child(5) {
				color: #bcbec2;
			}

			.li:nth-child(9) {
				color: #bcbec2;
			}
		}
	}
</style>