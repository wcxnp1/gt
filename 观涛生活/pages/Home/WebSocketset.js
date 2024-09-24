import {
	ref
} from "vue"
export default {
	const messages = ref([]);
	const newMessage = ref('');
	const websocket = ref(null);
	const textname = ref([])

	function sendMessage() {
		if (newMessage.value.trim() !== '') {
			messages.value.push({
				sender: 'user',
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
				addMessage('连接已建立！');
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
		console.log(JSON.stringify(msg));
		// messages.value.push(msg);
	};
	const sendMsg = () => {
		if (websocket.value && newMessage.value) {
			textname.value = [{
				sender: 'admin',
				content: '收到你的消息了！',
				time: getCurrentTime()
			}]
			websocket.value.send(JSON.stringify(textname.value));

		}
	};
	onMounted(() => {
		connectWebSocket('ws://10.172.0.22:8080/guantaolife/websocket/1');
	});
	onUnmounted(() => {
		if (websocket.value) {
			websocket.value.close();
		}
	});


}