class ScreenController {
    constructor() {
        this.mainScreen = document.getElementById("mainScreen");
        this.createQuestionScreen = document.getElementById("createQuestionScreen");
        this.createTeamScreen = document.getElementById("createTeamScrean");

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
    }

    showMainScreen() {
        this.mainScreen.style.display = "block";
        this.createQuestionScreen.style.display = "none";
        this.createTeamScreen.style.display = "none";
    }

    showCreateQuestionScreen() {
        this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "block";
        this.createTeamScreen.style.display = "none";
    }

    showCreateTeamScreen() {
        this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "none";
        this.createTeamScreen.style.display = "block";
    }
}
