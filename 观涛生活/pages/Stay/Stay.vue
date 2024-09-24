<template>
	<view class="index">
		<joinset :index="index"></joinset>
		<centern @submit="submit" v-if="!uploshow"></centern>
		<Uploadthecertification @Previous="Previous" v-if="uploshow"></Uploadthecertification>
	</view>
</template>

<script setup>
	import joinset from "@/components/Stay/join.vue"
	import centern from "@/components/Stay/centent.vue"
	// 上传的认证资料
	import Uploadthecertification from "@/components/Stay/Uploadthecertification.vue"
	import {
		ref,
		onMounted,
		nextTick
	} from 'vue';
	const index = ref(0)
	// 控制步骤条
	const uploshow = ref(false)
	// 下一步
	const submit = () => {
		index.value = 1
		uploshow.value = true
	}
	// 上一步
	const Previous = () => {
		index.value = 0
		uploshow.value = false
	}
	// 响应式表单数据  
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		// height: 100%;
		// background-color: yellow;

	}
</style>