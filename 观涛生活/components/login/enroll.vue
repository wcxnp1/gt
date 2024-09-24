<template>
	<view class="index">

		<up-form :model="form" ref="uFormRef" :rules="rules" labelPosition="top">
			<up-form-item prop="phone">
				<text style="font-size: 2rem;margin: auto;">注册</text>
			</up-form-item>
			<up-form-item prop="phone">
				<up-input v-model="form.phone" placeholder="请填写正确的手机号" />
			</up-form-item>
			<up-form-item prop="password">
				<up-input v-model="form.password" placeholder="请设置您的密码" />
			</up-form-item>
			<up-form-item prop="Resetyourpassword">
				<up-input v-model="form.Resetyourpassword" placeholder="重复您设置的密码" />
			</up-form-item>
			<!-- <up-button @click="submit">同意条款并注册</up-button> -->
			<up-button type="warning" text="同意条款并注册" @click="submit" style="margin-top: 0.5rem;"></up-button>

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
		password: '',
		Resetyourpassword: ''
	});

	// 校验规则  
	const rules = {
		phone: [{
			required: true,
			message: '请输入姓名',
			trigger: ['blur', 'change'],
		}, ],
		password: [{
			required: true,
			message: '请输入姓名',
			trigger: ['blur', 'change'],
		}, ],
		Resetyourpassword: [{
			required: true,
			message: '请输入姓名',
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

	::v-deep .u-form-item__body__right__message {
		margin-left: 0;
	}
</style>