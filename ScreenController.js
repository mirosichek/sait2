class ScreenController {
    constructor() {
        this.mainScreen = document.getElementById("mainScreen");
        this.createQuestionScreen = document.getElementById("createQuestionScreen");

        this.initEvents();
    }

    initEvents() {
        document.getElementById("createPollBtn").addEventListener("click", () => {
            this.showCreateQuestionScreen();
        });

        document.getElementById("backBtn").addEventListener("click", () => {
            this.showMainScreen();
        });
    }

    showMainScreen() {
        this.mainScreen.style.display = "block";
        this.createQuestionScreen.style.display = "none";
    }

    showCreateQuestionScreen() {
        this.mainScreen.style.display = "none";
        this.createQuestionScreen.style.display = "block";
    }
}


