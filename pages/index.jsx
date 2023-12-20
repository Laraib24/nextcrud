import Head from 'next/head';
import prisma from '@/lib/prisma';
import styles from '@/styles/Home.module.css';
import Post from './components/Post';
import Link from 'next/link';

export default function Home({ tasks }) {
	return (
		<>
			<main className={styles.main}>
				<Link href='/add-task'>Add Post</Link>
				<h1>Tasks</h1>
				<ul>
					<Post posts={tasks} />;
				</ul>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	try {
		const tasks = await prisma.tasks.findMany();
		console.log(tasks);
		return {
			props: {
				tasks,
			},
		};
	} catch (error) {
		console.error('Error fetching tasks:', error);

		return {
			props: {
				tasks: [],
			},
		};
	}
}
