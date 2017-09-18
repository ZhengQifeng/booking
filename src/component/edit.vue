<template>
	<div id="edit">
		<div class="form-group">
			<input type="text" name="title" class="inp-title form-control" placeholder="请输入标题" v-model="activeNote.title">
			<textarea class="form-control" placeholder="请输入正文" row="3" v-model="activeNote.contain"></textarea>
		</div>
 	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex';
	export default{
		name: 'edit',
		computed: {
			...mapState([
				"activeNote"
			]),
		},
	}
</script>

<style type="text/css">
	#edit{
		width: 70%;
	}

	#edit>.form-group{
		height: 50%;
	}

	.inp-title{
		border: 0;
	}

	#edit textarea{
		height: 100%;
        border: 0;
        border-radius: 0;
        padding-top: 15px;
	}
</style>