<template>
	<view class="Joinus">
		<transition name="fade">
			<Headnavigation v-show="!isScrolled"></Headnavigation>
		</transition>
		<transition name="fade">
			<Headnavigationto v-show="issindexto"></Headnavigationto>
		</transition>
		<main @scroll="handleScroll">
			<videoset></videoset>
			<centerbox></centerbox>
			<swiperset></swiperset>
			<work></work>
			<service></service>
			<foot></foot>
		</main>
	</view>
</template>

<script>
	// 引入加入我们的头部导航栏
	import Headnavigation from "@/components/Joinus/Headnavigation/index.vue"
	// 引入加入我们的头部to
	import Headnavigationto from "@/components/Joinus/Headnavigation/indexto.vue"
	// 视频
	import videoset from "@/components/Joinus/Video/index.vue"
	// 内容的部分
	import centerbox from "@/components/Joinus/joinuscenten/index.vue"
	// 引入轮播图
	import swiperset from "@/components/Joinus/swiper/index.vue"
	// 引入工作
	import work from "@/components/Joinus/work/index.vue"
	// 引入服务’
	import service from "@/components/Joinus/giveserviceto/index.vue"
	// 引入页脚
	import foot from "@/components/foots.vue"
	export default {
		data() {
			return {
				// 用于控制头部导航的显示与隐藏  
				isScrolled: false,
				//往上划显示
				issindexto: false,
				// 上次滚动位置  
				lastScrollTop: 0,
			}
		},
		methods: {
			handleScroll(event) {
				const st = window.pageYOffset || document.documentElement.scrollTop;
				// 滚动方向向下  
				// console.log(st);
				if (st > this.lastScrollTop) {
					this.isScrolled = true;
				}
				// 滚动方向向上  
				else {
					this.isScrolled = true;
					this.issindexto = true
					console.log(2);
					if (st < 89) {
						this.isScrolled = false;
						this.issindexto = false
					}
				}
				// 更新上次滚动位置  
				this.lastScrollTop = st;
			},
		},
		mounted() {
			// 监听滚动事件  
			window.addEventListener('scroll', this.handleScroll);
		},
		beforeDestroy() {
			// 组件销毁前移除事件监听器  
			window.removeEventListener('scroll', this.handleScroll);
		},
		components: {
			Headnavigation,
			videoset,
			Headnavigationto,
			centerbox,
			swiperset,
			work,
			service,
			foot
		}
	}
</script>

<style lang="scss" scoped>
	.Joinus {
		width: 100%;
		height: 100%;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to

	/* .fade-leave-active in <2.1.8 */
		{
		opacity: 0;
	}
</style>