import { db, Role, User } from 'astro:db';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs'; 


// https://astro.build/db/seed
export default async function seed() {

	const roles = [
		{ id: 'admin', name: 'Administrador' },
		{ id: 'user', name: 'Usuario' },
	];

	const johnDoe = {
		id: uuidv4(),
		name: 'Jane Doe',
		email: 'jane@gmail.com',
		password: bcrypt.hashSync('123456'),
		role: 'admin',
		
	}

	const janeDoe = {
		id: uuidv4(),
		name: 'John Doe',
		email: 'john@gmail.com',
		password: bcrypt.hashSync('123456'),
		role: 'user',
		
	}

	await db.insert(Role).values(roles);
	await db.insert(User).values([johnDoe, janeDoe]);
}

