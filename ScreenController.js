class ScreenController {
    constructor() {
        this.mainScreen = document.getElementById("mainScreen");
        this.createQuestionScreen = document.getElementById("createQuestionScreen");
        this.createTeamScreen = document.getElementById("createTeamScrean");
        this.showScreen=document.getElementById("showInfoScreen");

        this.initEvents();
    }

    initEvents() {
        document.getElementById("createPollBtn").addEventListener("click", () => {
            this.showCreateQuestionScreen();
        });

        document.getElementById("createTeams").addEventListener("click", () => {
            this.showCreateTeamScreen();
        });

        document.getElementById("backBtn").addEventListener("click", () => {
            this.showMainScreen();
        });

        document.getElementById("backTeamsBtn").addEventListener("click", ()=> {
            this.showMainScreen();
        })

        document.getElementById("backShowBtn").addEventListener("click", ()=> {
            this.showMainScreen();
        })

        document.getElementById("ShowInfo").addEventListener("click", async () => {
        this.showShowScreen();
        await window.ShowData.loadAndRender();
        });

    }

    showMainScreen() {
        this.mainScreen.style.display = "block";
        this.createQuestionScreen.style.display = "none";
        this.createTeamScreen.style.display = "none";
        this.showScreen.style.display="none";
    }

    showCreateQuestionScreen() {
        this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "block";
        this.createTeamScreen.style.display = "none";
        this.showScreen.style.display="none";
    }

    showCreateTeamScreen() {
        this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "none";
        this.createTeamScreen.style.display = "block";
        this.showScreen.style.display="none";
    }

    showShowScreen(){
         this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "none";
        this.createTeamScreen.style.display = "none";
        this.showScreen.style.display="block";
    }
}
