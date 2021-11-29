import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { createTaskDto } from 'src/dto/create.task.dto';


@Controller('task')
export class TaskController {
    @Get()
    getTask():string{
        return 'returning task'
    }

    @Post()
    createTask(@Body() task: createTaskDto):string{
        console.log(task)
        return 'creating task'
    }

    @Put()
    updateTask(){
        return 'task is updated'
    }

    @Delete()
    deleteTask(){
        return 'task deleted'
    }
}
