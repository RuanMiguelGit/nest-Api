import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../interfaces/task';
import { Model } from 'mongoose';

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


}

