'use client';

import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function AddPost() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		console.log(title, content);
		try {
			fetch('/api/add-task', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, content }),
			});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<main className={styles.main}>
			<h1>Add Task</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title'>Title:</label>
					<input
						type='text'
						id='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='title'>Content:</label>
					<input
						type='text'
						id='content'
						value={content}
						onChange={e => setContent(e.target.value)}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</main>
	);
}
