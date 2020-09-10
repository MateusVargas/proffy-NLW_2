import {Request, Response} from 'express'
import db from '../database/connections'
import {convertHourToMinutes,convertMinutesToHours} from '../utils/convertTimes'

interface ScheduleItem{
    id: number
    week_day: number,
    from: string,
    to: string,
    class_id: number
}

export default class ClassesController {

    async total(req: Request, res: Response){
        const totalProffys = await db('proffy').count('* as total')
        const { total } = totalProffys[0]
        return res.json({total})
    }

    async show (req: Request, res: Response){
        const {accountId}:any = req

        const proffys = await db('proffy')
        .join('classes','classes.proffy_id','=','proffy.id')
        .join('class_schedule','classes.id','=','class_schedule.class_id')
        .groupBy('proffy.id')
        .where('proffy.account_id','=',accountId)
        .select(['proffy.*','classes.id as classid','classes.*'])

        const schedules = await db('class_schedule')
        .join('classes','classes.id','=','class_schedule.class_id')
        .join('proffy','proffy.id','=','classes.proffy_id')
        .where('proffy.account_id','=',accountId)
        .select('class_schedule.*')

        const schedule = schedules.map((scheduleItem: ScheduleItem) => {
            return {
             //   id: scheduleItem.id,
                week_day: scheduleItem.week_day,
                from: convertMinutesToHours(scheduleItem.from),
                to: convertMinutesToHours(scheduleItem.to),
                class_id: scheduleItem.class_id
            }
        })

        const serializedProffys = proffys.map(proffy=>{
            return{
                ...proffy,
                schedule
            }
        })
        console.log(schedules)
        return res.status(200).json(serializedProffys)
    }

    async index (req: Request, res: Response){
        const filters = req.query
        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        if(!filters.subject || !filters.week_day || !filters.time){
            return res.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])//whereRaw faz um where com sql puro, nomes de colunas entre crases(``)
            .whereRaw('`class_schedule`.`from` <= ??',[timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??',[timeInMinutes])
        })
        .where('classes.subject','=',subject)
        .join('proffy','classes.proffy_id','=','proffy.id')
        .select(['classes.*','proffy.*'])

        return res.status(200).json(classes)
    }

    async create (req: Request,res: Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body

        const {accountId}:any = req

        const transaction = await db.transaction()
    
        try {
            const insertedProffyId = await transaction('proffy').insert({
                name,
                avatar,
                whatsapp,
                bio,
                account_id: accountId
            })
            const proffy_id = insertedProffyId[0]
        
            const insertedClassesIds = await transaction('classes').insert({
                subject,
                cost,
                proffy_id
            })
            const class_id = insertedClassesIds[0]
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                }
            })
            await transaction('class_schedule').insert(classSchedule)
        
            transaction.commit()
        
            return res.status(201).send()
    
        } catch (error) {
            await transaction.rollback()
            
            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    
    }


    async update (req: Request,res: Response){
        const {
            id,
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
            proffy_id,
            classid
        } = req.body

        const {accountId}:any = req

        const transaction = await db.transaction()
    
        try {
            const insertedProffyId = await transaction('proffy').update({
                id,
                name,
                avatar,
                whatsapp,
                bio,
            }).where('proffy.account_id', accountId)

            //const proffy_id = 'insertedProffyId[0]'
        
            const insertedClassesIds = await transaction('classes').update({
                subject,
                cost,
            }).where({proffy_id})
            //const class_id = insertedClassesIds[0]

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    //id: scheduleItem.id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id: classid
                }
            })
            console.log(classSchedule)

             /*await schedule.map((scheduleItem: ScheduleItem)=>{
                 transaction('class_schedule').update({
                     week_day: scheduleItem.week_day,
                     from: convertHourToMinutes(scheduleItem.from),
                     to: convertHourToMinutes(scheduleItem.to),
                 }).where('class_schedule.id')
                 .where('class_schedule.class_id',scheduleItem.class_id)
             })*/

            //await transaction('class_schedule').update(classSchedule)
            //.where('class_schedule.class_id',1)
            
            await transaction('class_schedule')
            .delete()
            .where('class_schedule.class_id', classid)

            await transaction('class_schedule').insert(classSchedule)

        
            transaction.commit()
        
            return res.status(204).send()
    
        } catch (error) {
            await transaction.rollback()
            console.log(error)
            return res.status(400).json({
                error: 'Unexpected error while updating new class'
            })
        }
    
    }

}