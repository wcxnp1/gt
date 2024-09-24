<template>
	<view class="index">
		<view class="index-box">
			<view class="index-logo">
				观涛入驻
			</view>
			<view class="index-x">
				<up-form :model="form" :rules="rules" ref="uFormRef" labelPosition="top">
					<up-form-item label="店铺名称" prop="Contact">
						<up-input v-model="form.Contact" />
					</up-form-item>
					<up-form-item label="商铺分类" prop="phonen">
						<up-input v-model="form.phonen" />
					</up-form-item>
					<up-form-item label="商铺位置" prop="Storelocation">
						<up-input v-model="form.Storelocation" />
					</up-form-item>
					<up-form-item label="详细地址" prop="Specific">
						<up-input v-model="form.Specific" />
						<up-icon name="map-fill" color="#2979ff" size="28" @click="getLocation"></up-icon>
					</up-form-item>
					<view id="mapContainer" style="width: 100%; height: 300px;"></view>
					<up-form-item label="门牌照片">
						<up-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
							:maxCount="10"></up-upload>
					</up-form-item>
				</up-form>
				<up-button @click="submit">下一步</up-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	// 上传的文件
	const fileList1 = ref([])
	// 响应式表单数据  
	const form = ref({
		Contact: '',
		phonen: '',
		Storelocation: '',
		Specific: ''
	});

	// 校验规则  
	const rules = {
		Contact: [{
			required: true,
			message: '请输入店铺名称',
			trigger: ['blur', 'change'],
		}, ],
		phonen: [{
			required: true,
			message: '请输入商铺分类',
			trigger: ['blur', 'change'],
		}, ],
		Storelocation: [{
			required: true,
			message: '请输入商铺位置',
			trigger: ['blur', 'change'],
		}, ],
		Specific: [{
			required: true,
			message: '请输入商铺的具体位置',
			trigger: ['blur', 'change'],
		}, ],
	};

	// 表单引用  
	const uFormRef = ref(null);

	// 提交方法  
	const emits = defineEmits('submit')

	function submit() {
		uFormRef.value.validate().then(valid => {
			if (valid) {
				emits('submit')
			} else {
				uni.$u.toast('亲，请填写内容')
			}
		}).catch(() => {
			// 处理验证错误  
			uni.$u.toast('错误')
		});
	}
	// 门店信息
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
	// 地图的使用
	// 使用onmonent 
	onMounted(() => {
		initMap();
	})
	// 渲染地图
	const initMap = () => {
		var center = new qq.maps.LatLng(39.916527, 116.397128); // 初始地图中心  
		var map = new qq.maps.Map(document.getElementById('mapContainer'), {
			center: center,
			zoom: 13
		});

		// 定义一个函数来在地图上添加标记  
		function addMyLocationMarker(latlng, map) {
			var marker = new qq.maps.Marker({
				position: latlng,
				map: map,
				title: '我的位置'
			});
			// marker.setIcon('../../static/logo.png');
			// 使用 on 方法来添加点击事件监听器  
			// marker.setIcon({
			// 	url: '../../static/logo.png', // 替换为你的图标路径  
			// 	// size: new qq.maps.Size(20, 32), // 图标大小  
			// 	// anchor: new qq.maps.Point(0, 0) // 图标锚点  
			// });
			// qq.maps.event.addListener(marker, 'click', function() {
			// 	alert('你点击了你的位置！');
			// });

			// 如果你需要自定义图标，可以这样设置  

		}

		// 获取当前位置  
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var latitude = position.coords.latitude;
				var longitude = position.coords.longitude;
				var latlng = new qq.maps.LatLng(latitude, longitude);

				// 更新地图中心到当前位置  
				map.setCenter(latlng);

				// 在当前位置添加“我的位置”标记  
				addMyLocationMarker(latlng, map);
			}, function(error) {
				console.log('Error occurred. Error code: ' + error.code);
				// 错误处理，比如显示一个错误信息  
				alert('无法获取您的位置信息。');
			}, {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
			// 浏览器不支持地理位置服务时的处理  
			alert('您的浏览器不支持地理位置服务。');
		}
	}

	// 确保在DOM加载完成后调用initMap函数  
	document.addEventListener('DOMContentLoaded', initMap);
	//通过事件获取详细的地址
	const mapUrl = ref('https://restapi.amap.com/v3/geocode/regeo?output=xml')
	const mapKay = ref('28528396e62ece90b8563af354691027')

	const getLocation = () => {
		uni.getLocation({
			type: 'wgs84',
			success: (res) => {
				console.log(res);
				var latitude = 39.984154;
				var longitude = 116.307490;
				uni.request({
					url: mapUrl.value,
					method: 'GET',
					data: {
						location: `${latitude},${longitude}`,
						key: mapKay.value,
					},
					success: (res) => {
						console.log(JSON.stringify(res.data, null, 2));
					},
					fail: (err) => {
						console.log('地址解析失败' + err);
					}
				});
			}
		});
	}
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
	}
</style>