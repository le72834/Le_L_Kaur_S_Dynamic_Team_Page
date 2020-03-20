(() => {
  let teamButtons = document.querySelectorAll(".team"),
      currentTeamMember = document.querySelector("h3"),
      personInfo = document.querySelector(".personInfo");

  const teamInfo = [
    ["Linh", `Developer - abc`],
    ["Sabby", `Designer - xyz`]

  ];

  function showInfo() {
    //debugger;
    currentTeamMember.textContent =`${teamInfo[this.dataset.offset][0]}`;

    personInfo.textContent = `${teamInfo[this.dataset.offset][1]}`;
  }





  teamButtons.forEach(button => button.addEventListener("click", showInfo));




})();
