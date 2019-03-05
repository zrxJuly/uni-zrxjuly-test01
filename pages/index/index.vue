<template>
	<view class="content">
        <view class="uni-list">
        	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index"
					@tap="openInfoPage" :data-newsid="item.post_id">
        		<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
        	</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news : []
			}
		},
		onLoad:function() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.news = res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openInfoPage(e) {
				console.log(e);
				var newsid = e.currentTarget.dataset.newsid;
				console.log(newsid);
				// 打开页面
				uni.navigateTo({
					url: '../info/info?newsid='+newsid
				});
			}
		}
	}
</script>

<style lang="scss">
.content {height: auto; width: 100%;}
  .uni-list{width: 100%;}
    .uni-list-cell{width: 100%; height: 160upx; border-bottom: 1upx solid #DDDDDD;}
      .uni-media-list{width: 100%; height: 100%; margin: 3%;}
        .uni-media-list-logo{width: 20%; height: 90%; float: left; border-radius: 10upx;}
        .uni-media-list-body{width: 74%; height: 90%; float: left; padding-left: 3%; padding-top: 2%;}
          .uni-media-list-text-top{font-size: 1.0em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
          .uni-media-list-text-bottom{color: #DDDDDD; font-size: 0.9em; float: left; margin-top: 2%;}
</style>
