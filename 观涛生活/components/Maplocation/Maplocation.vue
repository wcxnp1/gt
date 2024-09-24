<template>
</template>

<script>
	export default {
		data() {
			return {
				mapUrl: 'https://apis.map.qq.com',
				mapKay: 'HXBZ-5EQCZ-SMFXD-TBJC4-NWL36-AUFIM',
			};
		},
		onLoad() {
			this.getLocation()
		},

		methods: {
			getLocation() {
				that.$msg('定位刷新中');
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						that.latitude = res.latitude;
						that.longitude = res.longitude;
						uni.request({
							url: that.$config.mapUrl + '/ws/geocoder/v1/',
							method: 'GET',
							data: {
								location: res.latitude + ',' + res.longitude,
								key: that.$config.mapKay
							},
							success: function(res) {
								console.log(res);
								let data = res.data;
								if (data.status == 0) {
									that.$msg('定位刷新成功');
									that.currLocation = data.result.address_component;
								} else {
									console.log(data.message);
								}
							},
							fail: function(err) {
								that.$msg('获取定位失败');
								console.log('地址解析失败' + err);
							}
						});
					}
				});
			}
		},
		components: {

		}
	};
</script>

<style>
</style>