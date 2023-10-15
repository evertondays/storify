import { Article } from '@prisma/client'
import Link from 'next/link'
import styles from './home-card.module.css'

export default async function HomeCard(props: AppProps) {
	return (
		<div className={styles.card}>
			<img src={props.post?.imageUrl ? props.post?.imageUrl : ''}></img>
			<div className={styles.info}>
				<Link href="/" className={styles.title}>
					{props.post.title}
				</Link>
				<div className={styles.card_text}>{props.post.description}</div>
			</div>
		</div>
	)
}

declare interface AppProps {
	post: Article
}
