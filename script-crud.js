const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector('.app__form-textarea');

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});

const tarefas = []

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const descricaoTarefa = textArea.value;
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefa));
})