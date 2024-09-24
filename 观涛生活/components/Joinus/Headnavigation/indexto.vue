<template>
	<view class="Naviget" :style="{ 'padding': `${mytop}rem  ${myleft}rem` }">
		<view class="Navigetop">
			<view class="Naviget-le" :style="{ 'width': `${Navigetle}%`,'font-size': `${login}rem`  }">
				观涛
			</view>
			<view class="Naviget-cent" :style="{ 'width': `${Navigetcent}%` }">
				<view class="ul" style="display: flex;justify-content: space-between;height: 100%;">
					<text class="li" :style="{ 'font-size': `${fontsize}rem` }">
						<navigator url="/pages/Home/Home" hover-class="navigator-hover">
							首页
						</navigator>
						<span class="borbth"></span>
					</text>
					<text class="li" :style="{ 'font-size': `${fontsize}rem` }">
						<navigator url="/pages/index/index" hover-class="navigator-hover">
							北斗计划
						</navigator>
						<span class="borbth"></span>
					</text>
					<text class="li" :style="{ 'font-size': `${fontsize}rem` }"> 社会招聘
						<span class="borbth"></span>
					</text>
					<text class="emitset li" :style="{ 'font-size': `${fontsize}rem` }">校园招聘
						<span class="borbth"></span>

					</text>
					<text class="emitset li" :style="{ 'font-size': `${fontsize}rem` }">工作兼职
						<span class="borbth"></span>

					</text>
					<text class="li" :style="{ 'font-size': `${fontsize}rem` }">了解美团
						<span class="borbth"></span>
					</text>
					<text class="li" :style="{ 'font-size': `${fontsize}rem` }">
						<navigator url="/pages/Joinus/Joinus" hover-class="navigator-hover">
							常见问题
						</navigator>
						<span class="borbth"></span>
					</text>
				</view>
			</view>
			<view class="Naviget-rigth" :style="{ 'width': `${Navigetrigth}%` }">
				<view class="" style="display: flex;align-items: center;width: 100%;">
					<button class="Naviget-rigth-bth" :style="{ 'font-size': `${buth}rem` }">English</button>
					<button class="Naviget-rigth-bth" :style="{ 'font-size': `${buth}rem` }">登录</button>
				</view>
			</view>
		</view>

	</view>

</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive
	} from 'vue';
	import uppopup from "@/components/uppopup.vue"
	// 头部的显示隐藏的关键字
	const showtitle = ref(false)
	// 头部箭头的显示与隐藏
	const showDropdown = ref(false)
	// 控制是否显示icon图标
	const showicon = ref(false)
	// 控制内边距
	const mytop = ref(0)
	const myleft = ref(2)
	const Navigetle = ref(10)
	const Navigetcent = ref(65)
	const Navigetrigth = ref(15)
	// 控制文字的大小
	const fontsize = ref(1)
	const login = ref(1)
	const buth = ref(0.8)
	const headicon = () => {
		showicon.value = !showicon.value
	}

	onMounted(() => {
		window.addEventListener('resize', handleResize);
	});
	// 定义头部的数据

	// 定义一个变量显示与隐藏
	const uppopupset = ref()
	// 点击小图标显示右边框
	function hedaupicon() {
		uppopupset.value.open()
	}
	// 跳转的观涛合作
	const headopen = () => {

		// #ifdef APP
		uni.navigateTo({
			url: "/pages/index/index"
		})
		// #endif
		// #ifdef H5
		window.location.href = '/pages/Home/Home.html';
		// #endif


	}
	// 跳转首页
	const headshou = () => {
		// #ifdef APP
		uni.navigateTo({
			url: "/pages/index/index"
		})
		// #endif
		// #ifdef H5
		window.location.href = '/pages/index/index.html';
		// #endif

	}
	// 跳转加入我们
	const headJoinus = () => {
		// #ifdef APP
		uni.navigateTo({
			url: "/pages/Joinus/Joinus"
		})
		// #endif
		// #ifdef H5
		window.location.href = '/pages/Joinus/Joinus.html';
		// #endif
	}
	// 创建一个响应式的 ref 来存储视口宽度  
	const viewportWidth = ref(0); // 初始化为0，稍后在handleResize中更新  

	// 定义一个处理窗口大小变化的函数  
	const handleResize = () => {
		const FontSize = '16'
		viewportWidth.value = window.innerWidth; // 更新视口宽度  
		// console.log(viewportWidth.value);
		if (viewportWidth.value > 1000) {
			myleft.value = 2;
			Navigetle.value = 10
			Navigetcent.value = 65
			Navigetrigth.value = 15
			fontsize.value = 1
			login.value = 1.5
			buth.value = 0.7
			document.documentElement.style.fontSize = FontSize + 'px';
		} else {
			document.documentElement.style.fontSize = (FontSize / 1) + 'px';
			if (viewportWidth.value < 1000) {
				myleft.value = 0;
				Navigetle.value = 7
				Navigetcent.value = 65
				Navigetrigth.value = 18
				fontsize.value = 1
				login.value = 1.2
				buth.value = 0.5
			}
			if (viewportWidth.value < 800) {
				myleft.value = 1;
				Navigetle.value = 7
				Navigetcent.value = 65
				Navigetrigth.value = 18
				fontsize.value = 1
				login.value = 1.2
				buth.value = 0.7
			}
			if (viewportWidth.value < 700) {
				myleft.value = 0;
				Navigetle.value = 7
				Navigetcent.value = 65
				Navigetrigth.value = 18
				fontsize.value = 0.8
				login.value = 1
				buth.value = 0.5
			}
			if (viewportWidth.value < 600) {

				myleft.value = 0;
				Navigetle.value = 7
				Navigetcent.value = 68
				Navigetrigth.value = 25
				fontsize.value = 0.6
				login.value = 0.8
				buth.value = 0.5
			}
			if (viewportWidth.value < 450) {
				myleft.value = 0;
				Navigetle.value = 7
				Navigetcent.value = 68
				Navigetrigth.value = 25
				fontsize.value = 0.5
				login.value = 0.6
				buth.value = 0.3
			}
		}
		// document.body.style.fontSize = viewportWidth.value
		// 打印当前视口宽度  
		// 根据视口宽度更新其他状态或执行其他逻辑  
		if (viewportWidth.value > 1275) {
			showtitle.value = false;
		} else {
			showtitle.value = true;
		}
	};

	// 在组件挂载后添加窗口大小变化监听器  
	onMounted(() => {
		// 设置初始的视口宽度  
		handleResize(); // 立即调用以设置初始值  
		window.addEventListener('resize', handleResize); // 添加事件监听器  
	});

	// 在组件卸载前移除窗口大小变化监听器  
	onUnmounted(() => {
		window.removeEventListener('resize', handleResize);
	});
</script>

<style lang="scss" scoped>
	.Naviget {
		width: 100%;
		height: 3rem;
		min-width: 355px;
		// padding: 0 2rem;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		color: white;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;

		.Navigetop {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			color: white;
			justify-content: space-around;

			.Naviget-le {
				width: 10%;
				height: 100%;
				display: flex;
				align-items: center;
				color: black;
			}

			.Naviget-cent {
				width: 75%;
				height: 100%;
			}

			.Naviget-rigth {
				width: 15%;
				height: 100%;
				display: flex;
				align-items: center;
				// justify-content: space-around;

				.Naviget-rigth-bth {
					// width: 4rem;
					// height: 2rem;
					// font-size: 0.7rem;
					text-align: center;
					// line-height: 2rem;
				}

				.Naviget-rigth-bth:nth-child(1) {
					// width: 4rem;
					// height: 2rem;
					background-color: transparent;
					border: 1px solid #ffffff;
					text-align: center;
					color: black;
					// margin-left: 0.5rem;

				}

				.Naviget-rigth-bth:nth-child(2) {
					// width: 4rem;
					// height: 2rem;
					background-color: #ffd100;
					border: none;
					color: black;

				}

				.li:hover .Navlist {
					display: block !important;
				}

				.li:hover .chiba {
					display: block !important;
				}


				.navbox:hover {
					background-color: #eee;
				}

				.navbox:hover .navimage {
					opacity: 1 !important;
				}


				.chisno:hover {
					background-color: #eee;
				}

				.ul {
					height: 100%;
					display: flex;
					justify-content: space-around;
				}

				.ul>.li {
					position: relative;
					height: 100%;


					.lijiantou {
						position: absolute;
						right: -14px;
						bottom: 34px;
					}

					.chiba {
						display: none !important;
						position: absolute;
						left: -89px;
						bottom: -161px;
						width: 180px;
						height: 160px;
						background-color: white;
						border-radius: 5px;
						padding: 10px 10px;
						box-sizing: border-box;
					}

					.chibabox {
						display: flex;
						height: 40px;
						justify-content: space-between;
						align-items: center;
						margin: 5px 0;
					}

					.Navlist {
						display: none !important;
						width: 150px;
						height: 200px;
						background-color: white;
						position: absolute;
						left: -19px;
						bottom: -200px;
						border-radius: 5px;

						.navbox {
							margin: 8px 0px;
							display: flex;
							align-items: center;
							padding: 0 10px;
							box-sizing: border-box;
							position: relative;

							.navimage {
								opacity: 0;
								width: 100px;
								height: 92px;
								position: absolute;
								left: -123px;
								top: -33px;
								border-radius: 10px;


								.navset {
									width: 100%;
									height: 100%;
									background-color: #ffffff;
									display: flex;
									justify-content: center;
									align-items: center;
								}

								.navh {
									position: absolute;
									right: -15px;
									top: 39px;
								}
							}

							text {
								margin-left: 10px;
							}
						}

						.Navlistimg {
							width: 30px;
							height: 30px;
						}
					}
				}
			}
		}

	}

	.emitset:hover .bgb {
		display: block !important;
	}

	.emitset:hover .headlist {
		display: block !important;
	}

	.borbth {
		position: absolute;
		left: 50%;
		bottom: 5px;
		transform: translate(-50%, 0);
		display: inline-block;
		width: 25px;
		height: 3px;
		transform: translateX(-50%);
		transition: background-color 0.3s ease;
		// background-color: #ffd100;
	}

	.bgb {
		display: none !important;
		position: absolute;
		left: 0;
		bottom: -340px;
		width: 500px;
		height: 300px;
		border-radius: 10px;
		padding: 20px 20px;
		background-color: white;
		z-index: 999;

		.bgbchiled>view>text:hover {
			border-bottom: 1px solid black;
		}

		.bgbchiled>view>text:nth-child(1) {
			border-bottom: 1px solid #eee;
		}

		.bgb>.bgbtext:hover {
			border-bottom: 1px solid #eee;
		}

		.bgbtext {
			width: 100%;
			padding: 30px 0;
			border-top: 1px solid #eee;
			text-align: center;
		}

	}

	.li {
		list-style: none;
		font-size: 1rem;
		color: black;
		font-weight: 700;
		position: relative;
		display: flex;
		align-items: center;
	}

	.li:hover .borbth {
		background-color: #ffd100;
	}

	.li:nth-child(4) .borbth {
		background-color: #ffd100;
	}

	.li:nth-child(4) .lijiantou {
		position: absolute;
		right: -14px;
		bottom: 33px;
		width: 10px;
		height: 10px;
		// background-color: red;
	}

	li:nth-child(5) .lijiantou {
		position: absolute;
		right: -6px;
		bottom: -3px;
		width: 10px;
		height: 10px;
		position: relative;
		// background-color: red;
	}

	.headlist {
		display: none !important;
		width: 170px;
		position: absolute;
		left: -40px;
		bottom: -77px;
		height: 80px;
		background-color: white;
		// padding: 20px 0;
		border-radius: 10px;
		text-align: center;
		display: flex;
		border-radius: 5px;
		overflow: hidden;

		view {
			height: 40px;
			line-height: 40px;
		}

		view:hover {
			background-color: #eee;
		}


	}

	.Two {
		width: 100%;
		// height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.popupcenter {
			width: 500px;
			// height: ;
		}
	}
</style>