<template>
	<view class="indexset">
		<view class="box">
			<view class="box-top">
				<view class="box-logo">
					<image src="../../static/logo.png" mode="" class="img"></image>
					<text style="margin-left: 1rem;">观涛客服</text>
				</view>
				<view class="" style="display: flex;align-items: center;">
					<up-icon name="arrow-down" color="#fffcf3" size="18" @click="iconset"></up-icon>
				</view>
			</view>
			<view class="chat-room">
				<view class="chat-container">
					<!-- 顶部标题 -->
					<view class="top-bar">
						<!-- <text>聊天室</text> -->
					</view>
					<scroll-view scroll-y="true" class="chat-scroll">
						<!-- 聊天记录 -->
						<view v-for="(message, index) in messages" :key="index" class="message-item">
							<view v-if="message.sender === 'user'" class="user-message">
								<view class="message-content">
									<text>{{message.content}}</text>
									<!-- <text class="time">{{message.time}}</text> -->
								</view>
								<image class="avatar" :src="userAvatar"></image>
							</view>
							<view v-if="message.sender === 'admin'" class="admin-message">
								<image class="avatar" :src="adminAvatar"></image>
								<view class="message-content">
									<text>{{message.content}}</text>
									<!-- <text class="time">{{message.time}}</text> -->
								</view>
							</view>
						</view>
					</scroll-view>
					<!-- 底部输入框和发送按钮 -->
					<view class="input-bar">
						<input type="text" v-model="newMessage" placeholder="输入消息..." />
						<button @click="sendMessage">发送</button>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted
	} from 'vue';

	// 关闭模态框
	const emit = defineEmits('iconset')
	const iconset = () => {
		emit('iconset')
	}
	const userAvatar = '/static/logo.png'; // 用户头像路径
	const adminAvatar = '/static/logo.png'; // 客服头像路径

	const messages = ref([{
		sender: 'admin',
		adminAvatar: adminAvatar,
		content: '这是我们客服的电话 110'

	}]);

	const newMessage = ref('');
	const websocket = ref(null);
	const textname = ref([])
	// 用户名称
	const userset = ref()
	// 决定使用户还是客服的url地址  // 默认是用户的接口
	const barUrl = ref('ws://10.172.0.22:8080/guantaolife/websocket/1')

	function sendMessage() {
		userset.value = 'user'
		if (newMessage.value.trim() !== '') {
			messages.value.push({
				sender: userset.value,
				content: newMessage.value,
				time: getCurrentTime()
			});
			sendMsg()
			newMessage.value = '';
		}
	}
	const connectWebSocket = (url) => {
		if ('WebSocket' in window) {
			websocket.value = new WebSocket(url);
			websocket.value.onopen = () => {
				// addMessage('有什么问题吗');
			};
			websocket.value.onmessage = (event) => {
				const data = JSON.parse(event.data);
				if (data.msg) {
					addMessage(data.msg);
				} else if (data.state && data.state !== 'success') {
					addMessage('非法连接！');
					websocket.value.close();
				}
			};
			websocket.value.onerror = () => {
				addMessage('连接错误！');
			};
			websocket.value.onclose = () => {
				addMessage('连接已关闭');
			};
			// 添加消息到前端显示  

		} else {
			alert("Don't support websocket.value!");
		}
	};
	const addMessage = (msg) => {
		userset.value = "admin"
		messages.value.push({
			sender: userset.value,
			content: msg,
			time: getCurrentTime()
		});
	};
	const sendMsg = () => {
		if (websocket.value && newMessage.value) {
			textname.value = [{
				sender: 'user',
				content: newMessage.value,
				time: getCurrentTime()
			}]
			websocket.value.send(JSON.stringify(textname.value));

		}
	};
	const intervalId = ref(null)
	const startPolling = () => {
		intervalId.value = setInterval(connectWebSocket(barUrl.value), 5000); // 每5秒轮询一次  
	};
	const stopPolling = () => {
		clearInterval(intervalId.value);
	};
	onMounted(() => {
		startPolling()
	});
	onUnmounted(() => {
		if (websocket.value) {
			websocket.value.close();
		}
		stopPolling();
	});
	// websocket的轮询机制


	function getCurrentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		return `${hours}:${minutes}`;
	}
</script>

<style lang="scss" scoped>
	.indexset {
		position: fixed;
		right: 100px;
		bottom: 0px;
		z-index: 9999;
		background-color: white;

		.box {
			width: 400px;
			height: 470px;
			// background-color: red;
			overflow: hidden;
			border-radius: 1rem;

			.chat-room {
				width: 400px;
			}

			.box-top {
				width: 100%;
				height: 50px;
				color: white;
				background-color: #bb241a;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 1rem;
				box-sizing: border-box;

				.box-logo {
					display: flex;
					align-items: center;

					.img {
						width: 30px;
						height: 30px;

					}
				}
			}

			.scroolo {
				width: 200px;
				// height: 50px;
				display: flex;
				// background-color: red;

				.scroolo-left {
					margin-top: 0.8rem;
				}

				.scroolo-right {
					margin-left: 0.5rem;
				}
			}

		}

		.chat-container {
			padding: 1rem;
		}

		.top-bar {
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 10px;
		}

		.chat-scroll {
			height: 300px;
			overflow-y: auto;
		}

		.message-item {
			margin-bottom: 10px;
		}

		.user-message {
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
		}

		.admin-message {
			display: flex;
			align-items: flex-start;
		}

		.avatar {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: 10px;
		}

		.message-content {
			background-color: #f1f1f1;
			padding: 10px;
			border-radius: 10px;
		}

		.time {
			font-size: 12px;
			color: #999;
		}

		.input-bar {
			display: flex;
			margin-top: 10px;
			align-items: center;
		}

		input {
			flex: 1;
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
		}

		button {
			padding: 10px 20px;
			background-color: #4CAF50;
			color: white;
			border: none;
			border-radius: 5px;
			margin-left: 10px;
		}
	}
</style>