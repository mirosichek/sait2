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
        const f =this.question.getQID();

        const questionId = await this.qtoDatabase(q, f);
        await this.atoDatadase(a, r, questionId);

        this.resetForm();
    }

    async qtoDatabase(question, flag){
        const { data, error } = await supabase
            .from('Questions')
            .insert({ Question: question, Flag: flag })
            .select("id")
            .single();

        if (error) {
            alert("Ошибка сохранения вопроса: " + error.message);
            return;
        }

        return data.id;
    }

    async atoDatadase(answersList, right, questionId){
        for (let i = 0; i < answersList.length; i++) {
            const { error } = await supabase
                .from('QuestionAnswer')
                .insert({
                    Answer: answersList[i],
                    Question: questionId,
                    Right: right[i]
                });

            if (error) {
                alert("Ошибка сохранения ответа: " + error.message);
            }
        }
    }

    resetForm() {
        document.getElementById("myQuestion").value = "";
        document.getElementById("myQuestionID").value = "";

        document.getElementById("inputAnsverContainer").innerHTML = "";

        answer.arrAn = [];
        answer.isCorrect = [];
    }
}


