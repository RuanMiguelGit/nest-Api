import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/task';
@Injectable()
export class TaskService {

    task: Task[] = [
        {
            id:1,
            title:'sadas',
            description:'asdasda',
            done: true
        }
    ]


    getTasks(): Task[] {
        return this.task
    }

    getTask(id:number):Task {
        return this.task.find(item => item.id)
    }

}

