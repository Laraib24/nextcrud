export default function Post({ posts }) {
	return (
		<table style={{ maxWidth: '770px' }}>
			<thead>
				<tr>
					<td style={{ padding: '10px', border: '1px solid #fff' }}>ID</td>
					<td style={{ padding: '10px', border: '1px solid #fff' }}>Author</td>
					<td style={{ padding: '10px', border: '1px solid #fff' }}>Title</td>
					<td style={{ padding: '10px', border: '1px solid #fff' }}>Content</td>
				</tr>
			</thead>
			<tbody>
				{posts?.map(post => (
					<tr key={post?.id}>
						<td style={{ padding: '10px', border: '1px solid #fff' }}>
							{post?.id}
						</td>
						<td style={{ padding: '10px', border: '1px solid #fff' }}>
							{post?.authorId}
						</td>
						<td style={{ padding: '10px', border: '1px solid #fff' }}>
							{post?.title}
						</td>
						<td style={{ padding: '10px', border: '1px solid #fff' }}>
							{post?.content}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
