const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

class Database {
    constructor(containerId, question, answer) {
        this.container = document.getElementById(containerId);
        this.question = question;
        this.answer = answer;
        this.currentQuestionId = null;
        this.setupEventListener();
    }

    setupEventListener() {
        this.container.addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                await this.save();
            }
        });
    }

    async save() {
        const q = this.question.getValue();
        const a = this.answer.getValue();
        const r=this.answer.getRight();

        await this.qtoDatabase(q);
        await this.atoDatadase(a, r);

        this.resetForm();
    }

    async qtoDatabase(question){
        const { data, error } = await supabase
            .from('Questions')
            .insert({ Question: question })
            .select("id")
            .single();

        if (error) {
            alert("Ошибка сохранения вопроса: " + error.message);
            return;
        }

        this.currentQuestionId = data.id;
    }

    async atoDatadase(answer, right){
        for (let i = 0; i < answer.length; i++) {
            const { error } = await supabase
                .from('QuestionAnswer')
                .insert({
                    Answer: answer[i],
                    Question: this.currentQuestionId,
                    Right: right[i]
                });

            if (error) {
                alert("Ошибка сохранения ответа: " + error.message);
            }
        }
    }

    resetForm() {
    document.getElementById("myQuestion").value = "";
    document.getElementById("inputCount").value = "";

    document.getElementById("inputAnsverContainer").innerHTML = "";

    answer.arrAn = [];
    answer.isCorrect = [];
}

}


// input.addEventListener("keydown", async (event) => {
//                 if (event.key === "Enter") {

//                     if (!currentQuestionId) {
//                         alert("Сначала напишите вопрос и нажмите Enter!");
//                         return;
//                     }

//                     const answer = event.target.value.trim();
//                     if (!answer) return;

//                     await this.toDatabase(answer);
//                     event.target.value = "";
//                 }
//             });

// const { data, error } = await supabase
//                     .from('QuestionAnswer')
//                     .insert({ Question: question })
//                     .select("id")
//                     .single();


//               currentQuestionId = data.id;   // <-- сохраняем ID
//                 event.target.value = "";

//                 async toDatabase(answer) {
//         const { error } = await supabase
//             .from('QuestionAnswer')
//             .update({ Answer: answer })
//             .eq("id", currentQuestionId);

//         if (error) {
//             alert("Ошибка сохранения ответа: " + error.message);
//         }
//     }
// // 