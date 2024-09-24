<template>
	<view class="Naviget">
		<view class="Navigetop" v-show="!showtitle">
			<view class="Naviget-le">
				<text class="fs" style="margin-left: 3rem;">观涛</text>
			</view>
			<view class="Naviget-cent">
				<view class="ul" style="display: flex;justify-content: space-between;height: 100%;">
					<text class="li">
						<navigator url="/pages/Home/Home" hover-class="navigator-hover">
							首页
						</navigator>
						<text class="borbth"></text>
					</text>
					<text class="li">
						<navigator url="/pages/index/index" hover-class="navigator-hover">
							和美团合作
						</navigator>
						<text class="borbth"></text>
					</text>
					<text class="li">我们的科技
						<text class="borbth"></text>
					</text>
					<text class="emitset li">企业的社会责任
						<text class="borbth"></text>
						<view class="lijiantou">
							<up-icon :name="showDropdown ? 'arrow-up-fill' : 'arrow-down-fill'" color="#000000"
								size="8"></up-icon>
						</view>
						<view class="bgb">
							<view class="bgbchiled" style="display: flex;justify-content: space-around;">
								<view style="display: flex;flex-direction: column;">
									<text style="display: inline-block;padding: 20px 0;">个体</text>
									<text style="display: inline-block;margin: 20px 0;">便利用户生活</text>
									<text style="display: inline-block;margin: 20px 0;">骑手关怀与发展</text>
									<text style="display: inline-block;margin: 20px 0;">涌现新职业</text>
								</view>
								<view style="display: flex;flex-direction: column;">
									<text style="display: inline-block;padding: 20px 0;">产业</text>
									<text style="display: inline-block;margin: 20px 0;">助力市场繁荣</text>
									<text style="display: inline-block;margin: 20px 0;">支持小商户发展</text>
									<text style="display: inline-block;margin: 20px 0;">中华劳资号服务包</text>
								</view>
								<view style="display: flex;flex-direction: column;">
									<text style="display: inline-block;padding: 20px 0;">社会</text>
									<text style="display: inline-block;margin: 20px 0;">推动绿色消费</text>
									<text style="display: inline-block;margin: 20px 0;">支持乡村振兴</text>
									<text style="display: inline-block;margin: 20px 0;">参与应急救灾</text>
								</view>
							</view>
							<view class="bgbtext">
								下载中心
							</view>
						</view>
					</text>
					<text class="emitset li">美团公益
						<text class="borbth"></text>
						<view class="lijiantou">
							<up-icon :name="showDropdown ? 'arrow-up-fill' : 'arrow-down-fill'" color="#000000"
								size="8"></up-icon>
						</view>
						<view class="headlist">
							<view>美团乡村儿童操场</view>
							<view>美团公益基金会</view>
						</view>
					</text>
					<text class="li">投资者关系
						<text class="borbth"></text>
					</text>
					<text class="li">
						<navigator url="/pages/Joinus/Joinus" hover-class="navigator-hover">
							加入我们
						</navigator>
						<text class="borbth"></text>
					</text>
					<text class="li">
						<navigator url="/pages/Stay/Stay" hover-class="navigator-hover">
							<up-button type="warning" text="商家版"></up-button>
						</navigator>
					</text>
				</view>
			</view>
			<view class="Naviget-rigth">
				<view class="ul" style="display: flex;margin-left: 5rem;justify-content: space-around;">
					<text class="li">下载和关注
						<view class="lijiantou">
							<up-icon :name="showDropdown ? 'arrow-up-fill' : 'arrow-down-fill'" color="#000000"
								size="8"></up-icon>
						</view>
						<view class="Navlist">
							<view class="navbox">
								<image
									src="https://img.meituan.net/portalweb/4aa94bdd72dc7620ef862436beb98c7f11428.png@54w"
									alt="" class="Navlistimg" />
								<text>美团APP</text>
								<view class="navimage">
									<view class="navset">
										<image style="width: 90%;height: 90%; "
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png"
											alt="" />
									</view>
									<view class="navh">
										<up-icon name="play-right-fill" color="#ffffff" size="18"></up-icon>
									</view>
								</view>
							</view>
							<view class="navbox">
								<image
									src="https://img.meituan.net/portalweb/b6fa37911d205a0101c511775ad218f113123.png@54w"
									alt="" class="Navlistimg" />
								<text>美团APP</text>
								<view class="navimage">
									<view class="navset">
										<image style="width: 90%;height: 90%; "
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png"
											alt="" />
									</view>
									<view class="navh">
										<up-icon name="play-right-fill" color="#ffffff" size="18"></up-icon>
									</view>
								</view>
							</view>
							<view class="navbox">
								<image
									src="https://img.meituan.net/portalweb/a6a88a988f5e7eeb39cc8fbd68d291258771.png@54w"
									alt="" class="Navlistimg" />
								<text>美团APP</text>
								<view class="navimage">
									<view class="navset">
										<image style="width: 90%;height: 90%; "
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png"
											alt="" />
									</view>
									<view class="navh">
										<up-icon name="play-right-fill" color="#ffffff" size="18"></up-icon>
									</view>
								</view>
							</view>
							<view class="navbox">
								<image
									src="https://img.meituan.net/portalweb/bffc4d2e608570d3ebcbc0ed0f79abc43284.png@54w"
									alt="" class="Navlistimg" />
								<text>美团APP</text>
								<view class="navimage">
									<view class="navset">
										<image style="width: 90%;height: 90%; "
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png"
											alt="" />
									</view>
									<view class="navh">
										<up-icon name="play-right-fill" color="#ffffff" size="18"></up-icon>
									</view>
								</view>
							</view>
							<view class="navbox">
								<image
									src="https://img.meituan.net/portalweb/64703ff894acc09cb2532cfcda37563a15073.png@54w"
									alt="" class="Navlistimg" />
								<text>美团APP</text>
								<view class="navimage">
									<view class="navset">
										<image style="width: 90%;height: 90%; "
											src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png"
											alt="" />
									</view>
									<view class="navh">
										<up-icon name="play-right-fill" color="#ffffff" size="18"></up-icon>
									</view>
								</view>
							</view>
						</view>
					</text>
					<text class="li">简体中文
						<view class="lijiantou">
							<up-icon :name="showDropdown ? 'arrow-up-fill' : 'arrow-down-fill'" color="#000000"
								size="8"></up-icon>
						</view>
						<view class="chiba">
							<view class="chibabox chisno" @click="headicon">
								<text>简体中文</text>
								<up-icon name="checkbox-mark" v-show="!showicon" color="#000000" size="15"></up-icon>
							</view>
							<view class="chisno chibabox" style="height: 40px;line-height: 40px;" @click="headicon">
								<text>繁体中文</text>
								<up-icon name="checkbox-mark" v-show="showicon" color="#000000" size="15"></up-icon>
							</view>
							<view class="chibabox chisno">
								<text style="margin-top: 10px;">English Version</text>
								<up-icon style="margin-top: 10px;" name="arrow-rightward" color="#000000"
									size="15"></up-icon>
							</view>
						</view>
					</text>
				</view>
			</view>
		</view>
		<view class="Two" v-show="showtitle">
			<view>
				<up-icon name="list" size="28" @click="hedaupicon"></up-icon>
			</view>
			<text class="fs">
				观涛
			</text>
			<text>

			</text>
		</view>
	</view>
	<uppopup ref="uppopupset"></uppopup>
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
	const showtitle = ref(true)
	// 头部箭头的显示与隐藏
	const showDropdown = ref(false)
	// 控制是否显示icon图标
	const showicon = ref(false)

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
		console.log(viewportWidth.value);
		if (viewportWidth.value > 1000) {
			document.documentElement.style.fontSize = FontSize + 'px';
		} else {
			document.documentElement.style.fontSize = (FontSize / 2) + 'px';
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
		height: 5rem;
		padding: 0 1.5rem;
		box-sizing: border-box;
		background-color: white;
		display: flex;
		align-items: center;
		color: black;
		// opacity: 0.5;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;


		.Navigetop {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			color: black;

			.Naviget-le {
				width: 20%;
				height: 100%;
				display: flex;
				align-items: center;
			}

			.Naviget-cent {
				width: 60%;

				height: 100%;
			}

			.Naviget-rigth {
				width: 20%;
				margin-left: 7rem;
				height: 100%;


				.ul>.li:hover .Navlist {
					display: block !important;
				}

				.li:hover .chiba {
					display: block !important;
				}



				.li:hover .lijiantou {
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

		// .li:hover .Navlist {
		// 	display: block !important;
		// }
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
		bottom: 11px;
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

	.li:nth-child(5) .lijiantou {
		position: absolute;
		right: -14px;
		bottom: 33px;
		width: 10px;
		height: 10px;
		// position: relative;
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