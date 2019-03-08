<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="../../static/componentIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			以下将展示uni-app官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见uni-app开发文档。
		</view>
		<view class="uni-card" v-for="(list,index) in list" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" 
						:class="list.open ? 'uni-active' : '' " @click="triggerCollapse(index)">
						{{list.name}}
					</view>
					<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key"
							@click="goDetailPage(item)">
							<view class="uni-list-cell-navigate uni-navigate-right"> {{item.name ? item.name : item}} </view>
						</view>
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
				list:[{
					id:'view',
					name:'视图容器',
					open:false,
					pages:[
						'view',
						'scroll-view',
						'swiper',
						// #ifndef MP-TOUTIAO
						'movable-view',
						// #endif
					]
				}, {
					id:'content',
					name:'基础组件',
					open:false,
					pages:['text','rich-text','icon','progress']
				}]
			};
		},
		methods:{
			triggerCollapse(e) {
				// 没有相关子类，直接跳转页面
				if (!this.list[e].pages) {
					this.goDetailPage(this.list[e].url);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[e].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				if (typeof e === 'string') {
					uni.navigateTo({
						url: '/pages/component/' + e +'/' + e
					});
				} else {
					uni.navigateTo({
						url: e.url
					});
				}
			}
		}
	}
</script>

<style>
page{height: auto; min-height: 100%; }
.uni-card{box-shadow: none; }
.uni-list:after{height: 0;}
.uni-list:before{height: 0;}
</style>
