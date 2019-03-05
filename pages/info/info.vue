<template>
	<view class="content">
		<view class="main-title">
			<view class="title">{{newsinfo.title}}</view>
			<view class="main-title-info">
				<view class="author">{{newsinfo.author_name}}</view>
				<view class="date">{{newsinfo.published_at}}</view>
			</view>
		</view>
		<view class="main-content">
			<rich-text :nodes="newsinfo.content"></rich-text>
		</view>
		<view class="main-bottom">Views {{newsinfo.views_count}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsinfo : {}
			};
		},
		// 页面加载成功执行函数.
		onLoad:function(e){
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.newsinfo = res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{width: 90%; height: auto; margin: 5%;}
  .main-title{}
    .title{font-size: 1.1em;}
	.main-title-info{margin-top: 5%;}
	.author{float: left; color: #555555;}
	.date{float:left; padding-left: 5%; color: #C8C7CC;}
	.main-content{width: 100%; clear: both;padding-top: 2%; padding:10upx;}
    .main-bottom{color: #555555;}
</style>
