<template>
	<div id="sidebar" class="bg-info">
		<div class="sidebar-title bg-danger text-center">
			<img class="img-thumbnail img-circle" src="../assets/logo.png">
		</div>
		<div class="sidebar-main text-center">
			<div class="add ">
				<span class="glyphicon glyphicon-plus" @click="addNote"></span>
			</div>
			<div class="love">
				<span class="glyphicon" :class="[activeNote.love ? 'glyphicon-star' : 'glyphicon-star-empty']" @click="changeLove"></span>
			</div>
			<div class="detele">
				<span class="glyphicon glyphicon-minus" @click="deteleNote"></span>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex';
	import {mapActions} from "vuex";
	export default{
		name: 'sidebar',
		computed: {
			...mapState(["activeNote"])
		},
		methods: {
			...mapActions(["addNote", "deteleNote", "changeLove"]),
		}
	}
</script>

<style>
	#sidebar{
		width: 10%;
		height: 100%;
		min-height: 500px;
	}
	.sidebar-title{
		padding: 10px 0;
		width: 100%;
	}

	.sidebar-title>img{
		width: 60%;
	}

	.sidebar-main{
		width: 100%;
	}

	.sidebar-main>div{
		padding: 20px 0;
		font-size: 40px;
	}

	.sidebar-main>div>span{
		cursor: pointer;
		opacity: 0.4
	}

	.sidebar-main>div>span:hover{
		opacity: 0.6
	}

	.glyphicon-star{
		color: yellow;
	}
</style>