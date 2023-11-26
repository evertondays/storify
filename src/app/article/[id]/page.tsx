import React from 'react'
import { PrismaClient } from '@prisma/client'
import styles from './page.module.css'
import { IBM_Plex_Sans } from 'next/font/google'

const IbmPlexFont = IBM_Plex_Sans({ weight: ['700'], subsets: ['latin'] })

export default async function Article({ params }: { params: { id: string } }) {
	const articleId = parseInt(params.id)

	const prisma = new PrismaClient()
	const article = await prisma.article.findUnique({
		where: {
			id: articleId,
		}
	})

	const imageUrl = article?.imageUrl ? article?.imageUrl : ''

	return (
		<div className={styles.content}>
			<div className={styles.header}>
				<div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
			</div>
			<div className={styles.article}>
				<div className={styles.titleContainer}>
					<h1 className={IbmPlexFont.className}>{article?.title}</h1>
					<div className={styles.separator}></div>
				</div>
				<div className={styles.text}>{article?.body}</div>
			</div>
		</div>
	)
}
