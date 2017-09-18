export default{
	updateActibeNote({commit}, value){
		commit("UPDATEACTIVENOTE", value)
	},
	toggleShow({commit}, value){
		commit("TOGGLESHOW", value)
	},
	addNote({commit}){
		commit("ADDNOTE")
	},
	deteleNote({commit}){
		commit("DETELENOTE")
	},
	changeLove({commit}){
		commit("CHANGELOVE")
	}
}