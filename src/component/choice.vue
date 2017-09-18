<template>
	<div class="text-center" id="choice">
		<h2>Bookings<br>
			zhengqifeng.com
		</h2>
		<div class="btn-group btn-group-justified">
			<div class="btn btn-default" @click="toggleShow('all')" :class="{active: show==='all'}">所有笔记</div>
			<div class="btn btn-default" @click="toggleShow('favorite')" :class="{active: show==='favorite'}">收藏笔记</div>
		</div>
		<div class="btn-group btn-group-justified" role="group">
	        <div class="input-group search">
	            <input type="text" class="form-control" v-model="search" placeholder="Search for...">
	            <span class="input-group-addon">
	            	<i class="glyphicon glyphicon-search"></i>
	            </span>
        	</div>
        </div>
        <div>
        	<div class="list-group">
        		<a v-for="note in newNotes" class="list-group-item" href="#" :class="{active: activeNote === note}" @click="updateActibeNote(note)">
	            	<h4 class="list-group-item-heading">
	            		{{note.title.trim().substring(0,30)}}
	            	</h4>
	        	</a>
	        </div>
    	</div>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex';
	import {mapGetters} from 'vuex';
	export default{
		name: 'choice',
		data(){
			return {
				search: ''
			}
		},
		computed: {
			...mapState([
				"show","notes","activeNote"
			]),
			...mapGetters(["filteredNotes"]),
			newNotes: function(){
				var that=this;
				return that.filteredNotes.filter(function (fil) {
                    return fil.title.toLowerCase().indexOf(that.search.toLowerCase()) !== -1;
                })
			}
		},
		methods: {
			toggleShow(value){
				this.$store.dispatch("toggleShow", value)
			},
			updateActibeNote(note){
				this.$store.dispatch("updateActibeNote", note)
			}
		}
	}
</script>

<style>
	#choice{
		background-color: #F5F5F5;
		width: 25%;
	}
	h2{
		font-weight: 300;
	    text-transform: uppercase;
	    text-align: center;
	    font-size: 22px;
	    padding-bottom: 8px;
	}
	.btn-group{
		padding: 0px 30px;
		margin-bottom: 20px;
	}
</style>