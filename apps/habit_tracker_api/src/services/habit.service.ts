import { habitRepository } from '../repositories/habit.repository';

export const habitService = {
    create (name: string, description: string, userId: string) {
        if (!userId) throw new Error('User not found')
        if (!name) throw new Error('The name of the habit is required')
        
        return habitRepository.create(name, description, userId)
    },
    delete (id: string) {
        if (!id) throw new Error('Habit not found')

        return habitRepository.delete(id)
    },
    findByAllByUser (userId: string) {
        if (!userId) throw new Error('User not found')

        return habitRepository.findAllByUser(userId)
    }
}