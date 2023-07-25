import { PrismaClient } from '@prisma/client'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
	const prisma = new PrismaClient()
	const firstArticle = await prisma.article.findFirst({ orderBy: { updatedAt: 'desc' } })
	const articles = await prisma.article.findMany({ take: 7, skip: 1, orderBy: { updatedAt: 'desc' } })

	return (
		<div>
			<header className={styles.header}>
				<img src={firstArticle?.imageUrl ? firstArticle?.imageUrl : ''}></img>

				<div className={styles.text_wrapper}>
					<div className={styles.info_container}>
						<div className={styles.info_card}>
							<span>Mais recente</span>
						</div>
						<Link href="/" className={styles.link}>{firstArticle?.title}</Link>
					</div>
				</div>
			</header>

			<ul>
				{
					articles.map(post => (
						<li key={post.id}>{post.title}</li>
					))
				}
			</ul>
		</div>
	)
}
