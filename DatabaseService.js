const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

class DatabaseService {
    async saveQuestion(question, flag) {
        const { data, error } = await supabaseClient
            .from('Questions')
            .insert({ Question: question, Flag: flag })
            .select('id')
            .single();

        if (error) {
            throw new Error("Ошибка сохранения вопроса: " + error.message);
        }

        return data.id;
    }

    async saveAnswers(answers, rightFlags, questionId) {
        for (let i = 0; i < answers.length; i++) {
            const { error } = await supabaseClient
                .from('QuestionAnswer')
                .insert({
                    Answer: answers[i],
                    Question: questionId,
                    Right: rightFlags[i]
                });

            if (error) {
                throw new Error("Ошибка сохранения ответа: " + error.message);
            }
        }
    }

    async saveTeams(teams, number){
        for(let i=0; i<teams.length; i++){
            const { error } = await supabaseClient
                .from('Teams')
                .insert({
                    team: teams[i],
                    number_of_people:number[i]
                });

            if (error) {
                throw new Error("Ошибка сохранения ответа: " + error.message);
            }
        }
    }

    async getTeamsWithPeople() {
        const { data: teams, error: teamsError } = await supabaseClient
            .from('Teams')
            .select('*');

        if (teamsError) {
            throw new Error('Ошибка получения команд: ' + teamsError.message);
        }

        for (let team of teams) {
            const { data: people, error: peopleError } = await supabaseClient
                .from('QuizDatabase')
                .select('name, surname, score')
                .eq('group_id', team.id)
                .execute();
            

            if (peopleError) {
                console.error('Ошибка людей для команды', team.id, peopleError);
                team.people = [];
            } else {
                team.people = people || [];
            }
        }
        return teams;
    }
}
