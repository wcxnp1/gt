<template>
	<view class="index">
		<up-steps :current="index">
			<up-steps-item title="添加商铺" desc="10:30">
			</up-steps-item>
			<up-steps-item title="上传认证材料" desc="10:35"></up-steps-item>
		</up-steps>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
	}
</style>