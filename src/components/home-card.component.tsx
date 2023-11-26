import React from 'react'
import { Article } from '@prisma/client'
import Link from 'next/link'
import styles from './home-card.module.css'
import { IBM_Plex_Sans } from 'next/font/google'

const IbmPlexFont = IBM_Plex_Sans({ weight: ['700'], subsets: ['latin'] })

export default async function HomeCard(props: AppProps) {
	return (
		<div className={styles.card}>
			<img src={props.post?.imageUrl ? props.post?.imageUrl : ''}></img>
			<div className={styles.info}>
				<Link href={`/article/${props.post?.id}`} className={styles.title}>
					<span className={IbmPlexFont.className}>{props.post.title}</span>
				</Link>
				<div className={styles.card_text}>{props.post.description}</div>
			</div>
		</div>
	)
}

declare interface AppProps {
	post: Article
}
