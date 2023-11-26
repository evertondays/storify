import React from 'react'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import styles from './page.module.css'
import HomeCard from '../components/home-card.component'
import { IBM_Plex_Sans } from 'next/font/google'

const IbmPlexFont = IBM_Plex_Sans({ weight: ['700'], subsets: ['latin'] })

export default async function Home() {
	const prisma = new PrismaClient()
	const firstArticle = await prisma.article.findFirst({
		orderBy: { updatedAt: 'desc' },
	})
	const articles = await prisma.article.findMany({
		take: 7,
		skip: 1,
		orderBy: { updatedAt: 'desc' },
	})

	return (
		<div>
			<header className={styles.header}>
				<img src={firstArticle?.imageUrl ? firstArticle?.imageUrl : ''}></img>
				<div className={styles.text_wrapper}>
					<div className={styles.info_container}>
						<div className={styles.info_card}>
							<span>Mais recente</span>
						</div>
						<Link href={`/article/${firstArticle?.id}`} className={styles.link}>
							<span className={IbmPlexFont.className}>{firstArticle?.title}</span>
						</Link>
					</div>
				</div>
			</header>

			<div className={styles.card_container}>
				{articles.map((post) => (
					<HomeCard post={post} key={post.id} />
				))}
			</div>
		</div>
	)
}
