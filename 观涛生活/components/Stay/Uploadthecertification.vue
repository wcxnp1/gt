<template>
	<view class="index">
		<view class="index-box">
			<view class="index-logo">
				观涛入驻
			</view>
			<view class="index-x">
				<up-form ref="uFormRef" labelPosition="top">
					<up-form-item label="上传营业执照">
						<up-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="6" multiple
							:maxCount="1" width="250" height="150">
							<image src="../../static/OIP-C.jpg" mode="widthFix" style="width: 250px;height: 150px;">
							</image>
						</up-upload>
					</up-form-item>
					<up-form-item label="上传身份证正面">
						<up-upload :fileList="fileList2" @afterRead="afterRead" @delete="deletePic" name="6" multiple
							:maxCount="1" width="250" height="150">
							<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" mode="widthFix"
								style="width: 250px;height: 150px;">
							</image>
						</up-upload>
					</up-form-item>
					<up-form-item label="上传身份证反面">
						<up-upload :fileList="fileList3" @afterRead="afterRead" @delete="deletePic" name="6" multiple
							:maxCount="1" width="250" height="150">
							<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" mode="widthFix"
								style="width: 250px;height: 150px;">
							</image>
						</up-upload>
					</up-form-item>

				</up-form>
				<view class="" style="display: flex;width: 200px;margin: auto;">
					<up-button type="error" text="上一步" style="width: 70px;" @click="Previous"></up-button>
					<up-button text="提交" style="width: 70px;" @click="submit"></up-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	// 上传营业执照
	const fileList1 = ref([])
	// 上传身份证正面
	const fileList2 = ref([])
	// 上传身份证反面
	const fileList3 = ref([])
	const emits = defineEmits('Previous')
	const Previous = () => {
		emits('Previous')
	}
	const uFormRef = ref(null);
	// 校验规则
	const rules = {
		fileList1: [{
			required: true,
			message: '请输入店铺名称',
			trigger: ['blur', 'change'],
		}, ],
		fileList2: [{
			required: true,
			message: '请输入商铺分类',
			trigger: ['blur', 'change'],
		}, ],
		fileList3: [{
			required: true,
			message: '请输入商铺位置',
			trigger: ['blur', 'change'],
		}, ],
	};

	function submit() {

	}
	// 上传
	// 删除图片
	const deletePic = (event) => {
		fileList1.value.splice(event.index, 1);
	};

	// 新增图片
	const afterRead = async (event) => {
		// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
		let lists = [].concat(event.file);
		let fileListLen = fileList1.value.length;
		lists.map((item) => {
			fileList1.value.push({
				...item,
				status: 'uploading',
				message: '上传中',
			});
		});
		for (let i = 0; i < lists.length; i++) {
			const result = await uploadFilePromise(lists[i].url);
			let item = fileList1.value[fileListLen];
			fileList1.value.splice(fileListLen, 1, {
				...item,
				status: 'success',
				message: '',
				url: result,
			});
			fileListLen++;
		}
	};

	const uploadFilePromise = (url) => {
		return new Promise((resolve, reject) => {
			let a = uni.uploadFile({
				url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
				filePath: url,
				name: 'file',
				formData: {
					user: 'test',
				},
				success: (res) => {
					setTimeout(() => {
						resolve(res.data.data);
					}, 1000);
				},
			});
		});
	};
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;
		margin-top: 1rem;

		.index-box {
			width: 80%;
			margin: auto;
			// background-color: red;

			.index-logo {
				font-size: 1.5rem;
				text-align: center;
			}

			// .u-form {
			// 	padding: 0 2rem;
			// 	box-sizing: border-box;
			// }

		}

		::v-deep .u-form-item__body__left {
			width: 100% !important;
		}

		::v-deep .u-upload[data-v-cafe0b2a] {
			flex: 0;
			margin: 0 1rem;
		}
	}
</style>