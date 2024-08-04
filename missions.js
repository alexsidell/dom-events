let missionEl = document.querySelectorAll(".content-overlay")
let closeEl = document.querySelector(".pop-up-container")

for (let mission of missionEl) {mission.addEventListener("click", showMission)}
closeEl.addEventListener("click",showMission)

function showMission() {
    let selectedMission = this.innerHTML //give title of mission
    let missionIsSelected = document.querySelector(".pop-up-container")
    let h2 = missionIsSelected.children[0].children[0]
    h2.innerHTML = selectedMission
    missionIsSelected.classList.toggle("hidden")
}