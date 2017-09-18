export default{
	filteredNotes: function(state){
		if(state.show==='all'){
			return state.notes || {};
		}else{
			return state.notes.filter(note => note.love) || {};
		}
	}
}

