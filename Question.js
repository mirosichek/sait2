

const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


class AbstractInput {
    constructor(Id) {
        if (new.target === AbstractInput) {
            throw new Error("Нельзя создавать экземпляры абстрактного класса");
        }
        this.Id = Id;
        this.input = "";
    }

    update() {
        this.input = document.getElementById(this.Id).value;

        this.toDatabase();
        this.save();
    }

    toDatabase() {
        throw new Error("Метод toDatabase() должен быть реализован в наследнике");
    }
}


class Question extends AbstractInput {
    constructor() {
        super("myQuestion");
    }

    async toDatabase() {
        const { error } = await supabase
            .from('Questions')
            .insert({ Question: this.input });
        if (error) console.error(error);
    }
}

const savedValue = new Question();



