<template>
	<view class="index">
		<up-form :model="form" ref="uFormRef" :rules="rules" labelPosition="top">
			<up-form-item>
				<text style="font-size: 2rem;margin: auto;">密码登录</text>
			</up-form-item>
			<up-form-item prop="phone">
				<up-input v-model="form.phone" placeholder="请输入手机号" />
			</up-form-item>
			<up-form-item prop="password">
				<up-input v-model="form.password" placeholder="请你输入密码" />
			</up-form-item>
			<up-button type="warning" text="登录" @click="submit" style="margin-top: 0.5rem;"></up-button>
			<view class="" style="display: flex;justify-content: space-between;align-items: center;margin-top: 0.7rem;">
				<view class="">
					<text>还没有账号？</text>
					<text style="color: #ff8b03;">马上注册</text>
				</view>
				<view class="">
					<text>忘记密码</text>
				</view>
			</view>
		</up-form>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 响应式表单数据  
	const form = ref({
		phone: '',
		password: ''
	});

	// 校验规则  
	const rules = {
		phone: [{
			required: true,
			message: '请输入手机号',
			trigger: ['blur', 'change'],
		}, ],
		password: [{
			required: true,
			message: '请输入密码',
			trigger: ['blur', 'change'],
		}, ],
	};

	// 表单引用  
	const uFormRef = ref(null);

	// 提交方法  
	function submit() {
		uFormRef.value.validate().then(valid => {
			if (valid) {
				uni.$u.toast('校验通过')
			} else {
				uni.$u.toast('校验失败')
			}
		}).catch(() => {
			// 处理验证错误  
			uni.$u.toast('校验失败')
		});
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;

	}

	::v-deep .u-form-item__body__left {
		width: 100% !important;
	}
</style>