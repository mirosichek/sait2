class ShowDataServise {
    constructor(db) {
        this.db = db;
    }

    async loadAndRender() {
        const teams = await this.db.getTeamsWithPeople();
        this.renderTeams(teams);
    }

    renderTeams(teams) {
        const container = document.getElementById('teamsContainer');
        container.innerHTML = '';

        teams.forEach(team => {
            const teamBlock = document.createElement('div');

            teamBlock.innerHTML = `
                <h3>
                    ${team.team} |
                    Счет: ${team.score ?? 0} |
                    Людей: ${team.number_of_people}
                </h3>
            `;

            if (team.people.length === 0) {
                const empty = document.createElement('p');
                empty.textContent = 'Нет участников';
                teamBlock.appendChild(empty);
            } else {
                let i = 1;
                team.people.forEach(person => {
                    const p = document.createElement('p');
                    p.textContent = `${i} ${person.name} ${person.surname}: ${person.score}`;
                    teamBlock.appendChild(p);
                    i++;
                });
            }
            container.appendChild(teamBlock);
        });
    }
}
