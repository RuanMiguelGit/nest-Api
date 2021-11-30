import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../interfaces/task';
import { Model } from 'mongoose';
import { createTaskDto } from 'src/dto/create.task.dto';

@Injectable()
export class TaskService {
    
constructor(@InjectModel('task') private taskModel: Model<Task>){}
   
async getTasks(){
const data = await this.taskModel.find()
return data
}

async getTask(id: string){
    const data = await this.taskModel.findById(id)
    return data
}

async createTask(task: createTaskDto) {
    const newTask = new this.taskModel(task)
    const data = await newTask.save()
    return data
}

}

