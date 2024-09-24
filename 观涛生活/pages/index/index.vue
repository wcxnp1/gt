<template>
	<view class="u-page">
		<Navigationbar></Navigationbar>
		<heahimage></heahimage>
		<Stepbarindex></Stepbarindex>
		<foots></foots>
	</view>
</template>

<script>
	// 头部
	import Navigationbar from "@/components/Navigationbar.vue"
	// 图片
	import heahimage from "@/components/headimg/headimage.vue"
	// 步骤条内容
	import Stepbarindex from "@/components/centent/index.vue"
	// fooser数据
	import foots from "@/components/foots.vue"
	export default {
		data() {
			return {

			};
		},
		onLoad() {

		},

		methods: {

		},
		components: {
			Navigationbar,
			heahimage,
			Stepbarindex,
			foots
		}
	};
</script>

<style lang="scss">
	.u-page {
		width: 100%;
		height: 100%;
		background-color: #eee;
	}
</style>