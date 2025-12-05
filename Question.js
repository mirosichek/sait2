let currentQuestionId = null;

class Question {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.setupEventListener();
    }

    setupEventListener() {
        this.element.addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                const question = event.target.value.trim();
                if (!question) return;

                const { data, error } = await supabase
                    .from('QuestionAnswer')
                    .insert({ Question: question })
                    .select("id")
                    .single();

                if (error) {
                    alert("Ошибка сохранения вопроса: " + error.message);
                    return;
                }

                currentQuestionId = data.id;   // <-- сохраняем ID
                event.target.value = "";
            }
        });
    }
}
