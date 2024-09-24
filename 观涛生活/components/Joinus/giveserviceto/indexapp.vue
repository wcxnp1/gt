<template>
	<view class="index">
		<view class="index-box">
			<view class="indexbox-title">
				<text>常见问题</text>
			</view>
			<view class="index-box-q">
				<view class="index-name">
					<text>加入观涛月入过万</text>
				</view>
				<view class="index-name">
					<text>加入观涛月入过万</text>
				</view>
				<view class="index-name">
					<text>加入观涛月入过万</text>
				</view>
				<view class="index-name">
					<text>加入观涛月入过万</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.index {
		width: 100%;

		.index-box {
			width: 80%;
			margin: auto;
		   // background-color: #eee;
		   border-radius: 1rem;
		   padding: 2rem 2rem;
		   box-sizing: border-box;
			.indexbox-title {
				display: flex;
				justify-content: center;

				text {
					font-size: 3rem;
					// font-weight: 700;
				}
			}
			.index-box-q{
				 width: 100%;
				 height: 500px;
				 margin-top: 1rem;
				 // background-color: white;
				 .index-name{
					  line-height: 5rem;
					  border-bottom: 1px solid #eee;
					  text{
						   font-size: 1.5rem
					  }
				 }
				 
			}
		}
	}
</style>