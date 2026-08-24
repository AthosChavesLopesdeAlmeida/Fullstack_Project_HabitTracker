import { habitRepository } from '../repositories/habit.repository';

export const habitService = {
    create (userId: string, description: string, name: string) {
        if (!userId) throw new Error('User not found')
        if (!name) throw new Error('The name of the habit is required')
        
        return habitRepository.create(userId, description, name)
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