

const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


class AbstractInput {
    constructor(elementId) {
        if (new.target === AbstractInput) {
            throw new Error("Нельзя создавать экземпляры абстрактного класса");
        }
        this.elementId = elementId;
        this.element = document.getElementById(elementId);
        this.input = "";
        this.setupEventListener();
    }

    setupEventListener() {
        this.element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const value = event.target.value;
                this.input = value;
                this.toDatabase(value);
            }
        });
    }
    update() {
        this.element.value = "";
    }

    toDatabase() {
        throw new Error("Метод toDatabase() должен быть реализован в наследнике");
    }
}

class Question extends AbstractInput {
    constructor() {
        super("myQuestion");
    }

    async toDatabase(question) {
        const { error } = await supabase
            .from('Questions')
            .insert({ Question: question });
        if (error) console.error(error);
        else console.log("Вопрос сохранен в БД:", question);
    }
}

class Answer extends AbstractInput {
     constructor() {
    super("inputContainer");
     }
    async addInputs() {
  let numberOfInputs = parseInt(document.getElementById('inputCount').value);
  if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) {
    alert('Введите корректное число от 1 до 10. В противном случае что-то может пойти не так!');
    return;
  }

  let container = document.getElementById('inputContainer'); // Это место для новых полей
  while (container.hasChildNodes()) { 
    container.removeChild(container.lastChild); // Освобождаем место от старых элементов
  }

  for (let i = 0; i < numberOfInputs; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `dynamicInput${i}`; // Имена для каждого поля для избежания ошибок
    input.placeholder = `Ввод ${i + 1}`;
    container.appendChild(input); // Добавляем новое поле в контейнер
    container.appendChild(document.createElement('br')); // Предусматриваем дополнительное пространство между полями
  }
}
}

const savedValue = new Question();
const saveAnswer=new Answer();

