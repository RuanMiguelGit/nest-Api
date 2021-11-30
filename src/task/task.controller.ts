import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { createTaskDto } from 'src/dto/create.task.dto';
import { TaskService } from './task.service';
import { Task } from 'src/interfaces/task';

@Controller('task')
export class TaskController {

    constructor(private TaskServices: TaskService){}

    @Get()
    getTasks():Promise<Task[]>{
       return  this.TaskServices.getTasks()
    }


    @Get(':id')
    getUniqueTask(@Param('id') id:string){
        return this.TaskServices.getTask(id)
    }

    @Post()
    createTask(@Body() task: createTaskDto):Promise<Task>{
        console.log(task)
        return this.TaskServices.createTask(task)
    }

    @Put('id')
    updateTask(@Body() task:createTaskDto, @Param('id') id){
        return 'task is updated'
    }

    @Delete(':id')
    deleteTask(@Param('id') id ){
        return `task number ${id}`
    }
}
