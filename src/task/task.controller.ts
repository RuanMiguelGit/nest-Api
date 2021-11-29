import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get()
    getTask():string{
        return 'returning task'
    }

    @Post()
    createTask():string{
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
