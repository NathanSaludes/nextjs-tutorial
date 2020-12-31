import useSWR from 'swr'
import axios from 'axios'
import styles from './ClientSideDataFetchingTest.module.css'

const fetcher = url => new Promise((resolve, reject) => {
	setTimeout(() => {
		axios.get(url).then(res => resolve(res.data)).catch(err => reject(err))
	}, 3000);
})

export default function ClientSideDataFetchingComponent() {
	const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/1`, fetcher);

	if (error) {
		return <div>Error</div>
	}

	return (
		<>
			{data &&
				<div className={styles.makeAllTextRed}>
					<h1>{data?.title}</h1>
					<p>{data?.body}</p>
				</div>
			}
		</>
	)
}