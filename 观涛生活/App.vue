<script>
	export default {

		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-plus/index.scss";
	@import url('style/app.css');
	@import url("./style/index.css");
	@import url('./style/Mediaqueries.css');
	// 首页的字体
	@import url('./style/homestyle.css');
	// 我的
	@import url('./style/Joinus.css');
</style>