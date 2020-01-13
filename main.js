Vue.component('task-list',{
    template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>
    `,

    data(){
        return {
            tasks: [
                { task: 'go to the store', complete: true },
                { task: 'go to the email', complete: false },
                { task: 'go to the farm', complete: true },
                { task: 'go to work', complete: false }
            ]
        }
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
