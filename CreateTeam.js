class CreateTeam {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.teamArr = [];
        this.numberPeopleArr = [];
    }

    addTeams() {
        const i = this.teamArr.length;

        if (i >= 6) {
            alert("Больше команд нельзя");
            return;
        }

        this.teamArr.push("");
        this.numberPeopleArr.push(0);

        const wrapper = document.createElement("div");

        const teamInput = document.createElement("input");
        teamInput.type = "text";
        teamInput.placeholder = `Команда ${i + 1}`;

        teamInput.addEventListener("input", () => {
            this.teamArr[i] = teamInput.value.trim();
        });

        const numberInput = document.createElement("input");
        numberInput.type = "number";
        numberInput.min = 1;
        numberInput.placeholder = "Кол-во людей";

        numberInput.addEventListener("input", () => {
            this.numberPeopleArr[i] = Number(numberInput.value);
        });

        wrapper.appendChild(teamInput);
        wrapper.appendChild(numberInput);
        this.container.appendChild(wrapper);
    }

    getTeams() {
        return this.teamArr;
    }

    getNumbers() {
        return this.numberPeopleArr;
    }

    reset() {
        this.teamArr = [];
        this.numberPeopleArr = [];
        this.container.innerHTML = "";
    }
}
