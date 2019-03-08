<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	
	/* 页面共用样式 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	
	.uni-header-logo{
		text-align: center;
		padding: 30upx;
		margin-top: 10upx;
	}
	
	.uni-header-logo image{
		width: 140upx;
		height: 140upx;
	}
	
	.uni-hello-text{
		color: #7A7E83;
	}
</style>
