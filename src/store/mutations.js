export default {
    UPDATEACTIVENOTE(state, value) {
        state.activeNote = value;
    },
    TOGGLESHOW(state, value) {
        state.show = value;
        if(value === 'favorite'){
	    	state.activeNote = state.notes.filter(note => note.love)[0] || {};
	    }else{
	        state.activeNote = state.notes[0] || {};
	    }
    },
    ADDNOTE(state) {
        var newc = { title: '', contain: '', love: false};
        if(state.show=="favorite"){
        	newc.love=true;
        }
        state.notes.push(newc);
        state.activeNote = state.notes[state.notes.length - 1] || {};
    },
    DETELENOTE(state) {
        let indice = state.notes.indexOf(state.activeNote);
        state.notes.splice(indice, 1);
        state.activeNote = state.notes[0] || {};
    },
    CHANGELOVE(state) {
    	let indice = state.notes.indexOf(state.activeNote);
    	state.notes[indice].love = !state.notes[indice].love;
    }
}