<template>
	<view class="Stepcontent">
		<view class="Stepcontenttitle">
			门店入驻
		</view>
		<view class="" style="display: flex;flex-wrap: wrap;width: 100%;">
			<view class="Stepcontentset" v-for="(item) in Stepcontentdata" :key="item.id">
				<view class="Stepcontentbox">
					<view class="Stepcontentname">
						{{item.title}}
					</view>
					<view class="Stepcontenttxt">
						{{item.name}}
					</view>
					<view class="Stepcontent-t">
						<view class="" style="display: flex;align-items: center;">
							<text>查看详情</text>
							<up-icon name="arrow-rightward" color="#878787" size="13"
								style="margin-left: 0.5rem;"></up-icon>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue"
	const Stepcontentdata = reactive()
</script>

<style lang="scss">
	.Stepcontent {
		width: 100%;
		// margin: 0 auto;
		// margin-left: 10rem;

		.Stepcontenttitle {
			width: 100%;
			font-size: 2rem
		}

		.Stepcontentset:hover {
			background-color: #ffe600;
		}

		.Stepcontentset:hover .Stepcontenttxt {
			display: none !important;
		}

		.Stepcontentset:hover .Stepcontent-t {
			display: flex;
			align-items: center;
			display: block !important;
		}

		.Stepcontentset {
			width: 25%;
			height: 100px;
			border-radius: 0.5rem;
			background-color: white;
			padding: 2rem 2rem;
			box-sizing: content-box;
			margin-top: 2rem;
			margin-left: 0.6rem;

			.Stepcontentname {
				font-size: 1.5rem;
				margin-bottom: 1rem;
			}

			.Stepcontenttxt {
				font-size: 1rem;
				color: #878787;
			}

			.Stepcontent-t {
				display: none !important;
				color: #878787;
				font-size: 1rem;
			}
		}
	}
</style>